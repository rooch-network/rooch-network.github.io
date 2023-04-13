
import { getPagesUnderRoute } from "nextra/context"
import Link from "next/link"
import { useState } from "react"

import { TagsFilter } from "./tagFilter"
import { AuthorsFilter } from "./authorsFilter"

export default function BlogIndex({ more = "Read more" }) {

  const [pages, _] = useState(getPagesUnderRoute("/blog"))
  const [pagesFiltered, setPagesFiltered] = useState(pages)
  const [selectedAuthor, setSelectedAuthor] = useState("all")
  const [selectedTags, setSelectedTags] = useState<Set<string>>(new Set())
  const [authors, __] = useState(pages.map((page: any) => page.frontMatter?.author))
  const [tags, ___] = useState(() => {

    var _tags = []

    pages.forEach((e: any) => {
      if (e.frontMatter?.tag) {
        _tags = _tags.concat(e.frontMatter?.tag)
      }
    })

    return Array.from(new Set(_tags))
  })

  const filter = (author: string, tags: Set<string>) => {

    var _blogs = []

    if (author === "all") {
      _blogs = _blogs.concat(pages);
    } else {
      _blogs = _blogs.concat(pages.filter((v: any) => v.frontMatter?.author === author))
    }
    console.log(_blogs)

    var _filteredTagBlogs = []
    if (tags.size > 0) {
      _blogs.forEach((blog: any) => {
        if (blog.frontMatter?.tag) {

          for (let i in blog.frontMatter?.tag) {
            if (tags.has(blog.frontMatter?.tag[i])) {
              _filteredTagBlogs = _filteredTagBlogs.concat(blog)
              break
            }
          }
        }
      })
    } else {
      _filteredTagBlogs = _blogs
    }
    setPagesFiltered(_filteredTagBlogs)
  }

  return <div>
    <AuthorsFilter authors={authors} selected={selectedAuthor} onClick={(author) => {

      if (author === selectedAuthor) {
        setSelectedAuthor("all")
        filter("all", selectedTags)
        return
      }

      setSelectedAuthor(author)
      filter(author, selectedTags)
    }} />

    <TagsFilter tags={tags} selected={selectedTags} onClick={(tag) => {

      if (selectedTags.has(tag)) {
        selectedTags.delete(tag)
        setSelectedTags(new Set(selectedTags))
        filter(selectedAuthor, selectedTags)
        return
      }
      selectedTags.add(tag)
      setSelectedTags(new Set(selectedTags))
      filter(selectedAuthor, selectedTags)
    }} />

    {
      pagesFiltered.map((page: any) => {
        return (
          <div key={page.route} className="mb-10">
            <h3>
              <Link
                href={page.route}
                style={{ color: "inherit", textDecoration: "none" }}
                className="block font-semibold mt-8 text-2xl "
              >
                {page.meta?.title || page.frontMatter?.title || page.name}
              </Link>
            </h3>
            <p className="opacity-80 mt-6 leading-7">
              {page.frontMatter?.description}{" "}
              <span className="inline-block">
                <Link
                  href={page.route}
                  className="text-[color:black] underline underline-offset-2 decoration-from-font"
                >
                  {more + " →"}
                </Link>
              </span>
            </p>
            {page.frontMatter?.date ? (
              <p className="opacity-50 text-sm mt-6 leading-7">
                {page.frontMatter.date}
              </p>
            ) : null}
          </div>
        )
      })
    }
  </div>
}