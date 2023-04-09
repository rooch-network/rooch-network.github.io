
import { getPagesUnderRoute } from "nextra/context";
import Link from "next/link";
import { Page, PageOpts } from "nextra";

function BlogIndex({ more = "Read more" }) {
  return getPagesUnderRoute("/blog").map((page: Page) => {
    return (
      <div key={page.route} className="mb-10">
        <h3>
          <Link
            href={page.route}
            style={{ color: "inherit", textDecoration: "none" }}
            className="block font-semibold mt-8 text-2xl "
          >
            {page.meta?.title}
          </Link>
        </h3>
        <p className="opacity-80 mt-6 leading-7">
          {page.meta?.description}{" "}
          <span className="inline-block">
            <Link
              href={page.route}
              className="text-[color:hsl(var(--nextra-primary-hue),100%,50%)] underline underline-offset-2 decoration-from-font"
            >
              {more + " →"}
            </Link>
          </span>
        </p>
        {page.meta?.date ? (
          <p className="opacity-50 text-sm mt-6 leading-7">
            {page.meta.date}
          </p>
        ) : null}
      </div>
    );
  });
}

export default BlogIndex;