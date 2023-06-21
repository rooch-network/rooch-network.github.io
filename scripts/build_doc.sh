#!/bin/bash
# Copyright (c) RoochNetwork
# SPDX-License-Identifier: Apache-2.0

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

# rm -rf /tmp/rooch
# rm -rf ../pages/docs/dev

# git clone --depth=1 git@github.com:rooch-network/rooch.git /tmp/rooch

# cp -r  /tmp/rooch/docs/ ../pages/docs/dev/

BASE=$(git rev-parse --show-toplevel)

old_ext="md"
new_ext="mdx"
dir_path="$BASE/pages/docs/dev"
locales=("en-US" "zh-CN")

# ignore
if [[ -d "$dir_path/template" ]]; then
  rm -rf "$dir_path/template" 2>/dev/null
fi

if [[ -f "$dir_path/README.md" ]]; then
  rm $dir_path/README.md
fi

find "$dir_path" -follow -type d -print0 | while IFS= read -r -d '' dir; do

  # change ext, loacle
  find "$dir" -type f -name "*.$old_ext" | while read file; do
    for locale in "${locales[@]}"; do
      if [[ $file == *".${locale}.$old_ext" ]]; then
        mv "$file" "${file%.$old_ext}.$new_ext"
      fi
    done
  done

  find "$dir" -type f -name "*.$old_ext" | while read file; do
    new_file="${file%.$old_ext}.en-US.$new_ext"
    mv "$file" "$new_file"
  done

  #gen meta
  for locale in "${locales[@]}"; do
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
  if [[ -f "$dir/_meta.json" ]]; then
    rm $dir/_meta.json
  fi

  for locale in "${locales[@]}"; do
    if [[ -f "$dir/_meta.${locale}.json" && $(jq 'length' "$dir/_meta.${locale}.json") -eq 0 ]]; then
      rm "$dir/_meta.${locale}.json"
    fi
  done
done
