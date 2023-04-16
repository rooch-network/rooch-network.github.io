import { getPagesUnderRoute } from "nextra/context";
import Link from "next/link";
import { useState } from "react";
import { TagsFilter } from "./tagFilter";
import { AuthorsFilter } from "./authorsFilter";
import { BlogPostMeta } from "./blogHeader";
import { Page } from "nextra";

export type PageX = Page & {
  blog: BlogPostMeta;
};

export default function BlogIndex({ more = "Read more" }) {
  const [pages, _] = useState<Array<PageX>>(
    getPagesUnderRoute("/blog").map((page: any) => {
      let blog = { ...page.frontMatter };
      const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      let dateObject = new Date(page.frontMatter?.date);

      blog.date = dateObject.toLocaleDateString(page.locale, options);

      return {
        ...page,
        blog: blog,
      };
    })
  );

  const [pagesFiltered, setBlogsFiltered] = useState(pages);
  const [selectedAuthor, setSelectedAuthor] = useState("all");
  const [selectedTags, setSelectedTags] = useState<Set<string>>(new Set());
  const [authors, __] = useState(() => {
    let _authors = [];

    pages.forEach((page) => {
      _authors = _authors.concat(page.blog.authors);
    });

    return Array.from(new Set(_authors));
  });

  const [tags, ___] = useState(() => {
    let _tags = [];

    pages.forEach((page) => {
      if (page.blog.tags) {
        _tags = _tags.concat(page.blog.tags);
      }
    });

    return Array.from(new Set(_tags));
  });

  const filter = (author: string, tags: Set<string>) => {
    let _pages: Array<PageX> = [];

    if (author === "all") {
      _pages = _pages.concat(pages);
    } else {
      _pages = _pages.concat(
        pages.filter(
          (page) => page.blog.authors && page.blog.authors.includes(author)
        )
      );
    }

    let _filteredTagBlogs = [];
    if (tags.size > 0) {
      _pages.forEach((page) => {
        if (page.blog.tags) {
          for (let i in page.blog.tags) {
            if (tags.has(page.blog.tags[i])) {
              _filteredTagBlogs = _filteredTagBlogs.concat(page);
              break;
            }
          }
        }
      });
    } else {
      _filteredTagBlogs = _pages;
    }
    setBlogsFiltered(_filteredTagBlogs);
  };

  return (
    <div>
      <AuthorsFilter
        authors={authors}
        selected={selectedAuthor}
        onClick={(author) => {
          if (author === selectedAuthor) {
            setSelectedAuthor("all");
            filter("all", selectedTags);
            return;
          }

          setSelectedAuthor(author);
          filter(author, selectedTags);
        }}
      />

      <TagsFilter
        tags={tags}
        selected={selectedTags}
        onClick={(tag) => {
          if (selectedTags.has(tag)) {
            selectedTags.delete(tag);
            setSelectedTags(new Set(selectedTags));
            filter(selectedAuthor, selectedTags);
            return;
          }
          selectedTags.add(tag);
          setSelectedTags(new Set(selectedTags));
          filter(selectedAuthor, selectedTags);
        }}
      />

      {pagesFiltered.map((page) => {
        return (
          <div key={page.route} className="mb-10">
            <h3>
              <Link
                href={page.route}
                style={{ color: "inherit", textDecoration: "none" }}
                className="block font-semibold mt-8 text-2xl "
              >
                {page.meta?.title || page.blog.title || page.name}
              </Link>
            </h3>
            <p className="opacity-80 mt-6 leading-7">
              {page.blog.description}{" "}
              <span className="inline-block">
                <Link
                  href={page.blog.title}
                  className="text-[color:black] underline underline-offset-2 decoration-from-font"
                >
                  {more + " →"}
                </Link>
              </span>
            </p>
            {<div></div>}
            {page.blog.date ? (
              <p className="opacity-50 text-sm mt-6 leading-7">
                {page.blog.date}
              </p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
