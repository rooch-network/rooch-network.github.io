#!/bin/bash
# Copyright (c) RoochNetwork
# SPDX-License-Identifier: Apache-2.0

# tools check
if ! command -v jq &>/dev/null; then
  echo "jq not found, installing..."
  if [[ "$(uname)" == "Darwin" ]]; then
    brew install jq
  elif [[ "$(uname)" == "Linux" ]]; then
    if [[ -f /etc/redhat-release ]]; then
      sudo yum install -y jq
    else
      sudo apt-get update
      sudo apt-get install -y jq
    fi
  else
    echo "Unsupported operating system"
    exit 1
  fi
fi

function rm_file() {
  if [[ -e $1 ]]; then
    rm -rf $1
  fi
}

BASE=$(git rev-parse --show-toplevel)
OUTPUT=$BASE/pages/docs/dev/
OLD_EXT="md"
NEW_EXT="mdx"
DIR_PATH="$BASE/pages/docs/dev"
LOCALES=("en-US" "zh-CN")
IGNORE_LIST=("template" "README.md")
CLEAR_ITEMS=("_meta.json" "rooch-design.drawio")

while getopts "hp:" opt; do
  case $opt in
  h)
    cat <<EOF
Usage:
    build rooch doc <flags>
Flags:
    -h   Print this help
    -p   Rooch dir
EOF
    exit 1
    ;;
  p)
    ROOCH_DIR=$OPTARG
    ;;
  \?)
    echo "Invalid option: -$OPTARG" >&2
    exit 1
    ;;
  :)
    echo "Option -$OPTARG requires an argument." >&2
    exit 1
    ;;
  esac
done

rm_file $OUTPUT

if [ ! -z "$ROOCH_DIR" ]; then
  cp -r "$ROOCH_DIR/docs/" $OUTPUT
else
  rm -rf /tmp/rooch
  git clone --depth=1 git@github.com:rooch-network/rooch.git /tmp/rooch
  cp -r /tmp/rooch/docs/ $OUTPUT
fi

# ignore
for item in "${IGNORE_LIST[@]}"; do
  rm_file "$DIR_PATH/$item"
done

find "$DIR_PATH" -follow -type d -print0 | while IFS= read -r -d '' dir; do

  # change ext, loacle
  find "$dir" -type f -name "*.$OLD_EXT" | while read file; do
    for locale in "${LOCALES[@]}"; do
      if [[ $file == *".${locale}.$OLD_EXT" ]]; then
        mv "$file" "${file%.$OLD_EXT}.$NEW_EXT"
      fi
    done
  done

  find "$dir" -type f -name "*.$OLD_EXT" | while read file; do
    new_file="${file%.$OLD_EXT}.en-US.$NEW_EXT"
    mv "$file" "$new_file"
  done

  #gen meta
  for locale in "${LOCALES[@]}"; do
    if [ -f "$dir/_meta.json" ]; then
      cp ${dir}/_meta.json ${dir}/_meta.${locale}.json
      meta=$(cat "$dir/_meta.${locale}.json")
      for key in $(echo "$meta" | jq -r 'keys[]'); do
        path=$dir/$key.$locale.mdx
        if [[ -f "$path" ]]; then
          read -r first_line <"$path"
          first_line=$(echo "$first_line" | sed -E 's/^[[:space:]]*#+[[:space:]]*//')
          jq --arg key "$key" --arg value "$first_line" '.[$key] = $value' "$dir/_meta.${locale}.json" >"$dir/_meta.${locale}.json.tmp" && mv "$dir/_meta.${locale}.json.tmp" "$dir/_meta.${locale}.json"
        else
          jq --arg key "$key" --argjson value '{"display": "hidden"}' '.[$key] = $value' "$dir/_meta.${locale}.json" >"$dir/_meta.${locale}.json.tmp" && mv "$dir/_meta.${locale}.json.tmp" "$dir/_meta.${locale}.json"
          # del
          # jq --arg key "$key" 'del(.[$key])' "$dir/_meta.${locale}.json" >"$dir/_meta.${locale}.json.tmp" && mv "$dir/_meta.${locale}.json.tmp" "$dir/_meta.${locale}.json"
        fi
      done
    fi
  done
  # clear
  for item in "${CLEAR_ITEMS[@]}"; do
    rm_file "$dir/$item"
  done

  for locale in "${LOCALES[@]}"; do
    if [[ -f "$dir/_meta.${locale}.json" && $(jq 'length' "$dir/_meta.${locale}.json") -eq 0 ]]; then
      rm "$dir/_meta.${locale}.json"
    fi
  done
done
