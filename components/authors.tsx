import { Avatar } from "./avatar";
import cn from "classnames";
import ROOCH_TEAM from "../data/team";
import type { Author } from "../data/team";

export function Authors({ authors }: { authors: Array<Author> }) {
  console.log(authors)
  const validAuthors = authors.filter((author) => ROOCH_TEAM[author]);
  console.log(validAuthors)
  return (
    <div className="w-full border-b border-gray-400 authors border-opacity-20">
      <div
        className={cn(
          "flex flex-wrap justify-center py-8 mx-auto gap-7",
          authors.length > 4 && "max-w-3xl"
        )}
      >
        {validAuthors.map((username) => (
          <Avatar key={username} {...ROOCH_TEAM[username]} />
        ))
        }
      </div>
    </div>
  );
}
