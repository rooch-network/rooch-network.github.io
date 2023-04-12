import { Avatar } from "./avatar";
import cn from "classnames";
import ROOCH_TEAM from "../data/team";
import type { Author } from "../data/team";

export function AuthorsFilter({
  authors,
  selected,
  onClick }: {
    authors: Array<Author>,
    selected: string,
    onClick: Function
  }) {
  const validAuthors = authors.filter((author) => ROOCH_TEAM[author]);

  return (
    <div className="w-full border-b border-gray-400 authors border-opacity-20">
      <div
        className={cn(
          "flex flex-wrap justify-center py-8 mx-auto gap-7",
          authors.length > 4 && "max-w-3xl"
        )}
      >
        {
          validAuthors.map((username) => {
            const detail = ROOCH_TEAM[username]
            detail.twitterUsername = ""

            var classes = "inline-flex justify-center cta-container"
            if (selected === username) {
              classes = "cta-container-selected "
            }

            return <div className={classes}>
              <button className={cn("cta")} onClick={() => { onClick(username) }}>
                <Avatar key={username} {...detail} />
              </button>
            </div>

            // var classes = "border-dashed border-b-2 border-transparent hover:border-dashed hover:border-black"
            // if (selected === username) {
            //   classes = "border-solid border-b-2 border-black"
            // }

            // console.log(classes)

            // return <button className={cn(classes)} onClick={() => {onClick(username)}}><Avatar key={username} {...detail} /></button>
          })
        }
      </div>
    </div>
  );
}
