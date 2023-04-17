import { getPagesUnderRoute } from "nextra/context";
import Link from "next/link";
import { useState } from "react";
import { FilterButton } from "./filterButton";
import ROOCH_TEAM from "../../data/team";

export default function BlogIndex({
  textAllCategories = "All Categories",
  textAllAuthors = "All Authors",
  textMore = "Read more",
}) {
  // get all the pages
  const [pages, _] = useState(
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
  const [selectedCategory, setSelectedCategory] = useState(textAllCategories);
  const [selectedAuthor, setSelectedAuthor] = useState(textAllAuthors);

  // get all the authors
  const [authors, __] = useState(() => {
    let _authors = [textAllAuthors];

    pages.forEach((page) => {
      _authors = _authors.concat(page.blog.author);
    });

    return Array.from(new Set(_authors));
  });

  // get all the categories
  const [categories, ___] = useState(() => {
    let _categories = [textAllCategories];

    pages.forEach((page) => {
      if (page.blog.category) {
        _categories = _categories.concat(page.blog.category);
      }
    });

    return Array.from(new Set(_categories));
  });

  // filter posts based on author and category
  const filter = (author: string, category: string) => {
    let _pages = [];

    if (author === textAllAuthors && category == textAllCategories) {
      _pages = pages;
    } else {
      _pages = pages.filter((page) => {
        const _author = String(page.blog.author);
        const _category = String(page.blog.category);
        return (
          (_author == author && _category == category) ||
          (_author == author && category == textAllCategories) ||
          (author == textAllAuthors && _category == category)
        );
      });
    }
    setBlogsFiltered(_pages);
  };

  return (
    <div className="mt-10">
      <div className="flex gap-4 pb-2">
        <FilterButton
          options={categories.map((category) => ({
            id: category,
            text: category,
            avatar: undefined,
          }))}
          onClick={(tag) => {
            setSelectedCategory(tag);
            filter(selectedAuthor, tag);
          }}
        />
        <FilterButton
          options={authors.map((author) => ({
            id: author,
            text: ROOCH_TEAM[author] ? ROOCH_TEAM[author].name : author,
            avatar: ROOCH_TEAM[author] ? ROOCH_TEAM[author].avatar : undefined,
          }))}
          onClick={(author) => {
            setSelectedAuthor(author);
            filter(author, selectedCategory);
          }}
        />
      </div>

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
                  {textMore + " →"}
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
