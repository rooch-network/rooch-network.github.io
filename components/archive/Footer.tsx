import { useRouter } from "next/router";
import Link from "next/link";
import { useState, ReactNode, ReactElement } from "react";
import cn from "classnames";
import { LocaleSwitch } from "../localSwitch";
import { useConfig } from "nextra-theme-docs";

function FooterLink({ href, children }: { href: string; children: ReactNode }) {
  const classes =
    "text-sm text-[#666666] dark:text-[#888888] no-underline betterhover:hover:text-gray-700 betterhover:hover:dark:text-white transition";
  if (href.startsWith("http")) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

function FooterHeader({ children }: { children: ReactNode }) {
  return <h3 className="text-sm text-black dark:text-white">{children}</h3>;
}

const navigation = new Map([
  [
    "zh-CN",
    [
      {
        title: "解决方案",
        items: [],
      },
      {
        title: "使用 Rooch",
        items: [{ name: "水龙头", href: "/" }],
      },
      {
        title: "开发者",
        items: [
          {
            name: "GitHub",
            href: "https://github.com/rooch-network?type=source",
          },
          {
            name: "WebApps 漏洞赏金",
            href: "https://github.com/rooch-network/rooch-network.github.io",
          },
          {
            name: "合约漏洞赏金",
            href: "/",
          },
          {
            name: "Discord",
            href: "https://discord.com/invite/dT4DfDvE",
          },
        ],
      },
      {
        title: "社区",
        items: [
          {
            name: "Twitter",
            href: "https://twitter.com/RoochNetwork",
          },
          {
            name: "Youtube",
            href: "https://www.youtube.com/channel/UC2WeEQQsK_PDiARYrSAPaPQ",
          },
          { name: "Discord", href: "https://discord.com/invite/dT4DfDvE" },
          { name: "Telegram", href: "https://t.me/roochnetwork" },
        ],
      },
      {
        title: "条款",
        items: [
          { name: "使用条款", href: "/" },
          { name: "隐私策略", href: "/" },
          { name: "Cookie 策略", href: "/" },
        ],
      },
      {
        title: "其他",
        items: [
          { name: "关于", href: "/" },
          { name: "博客", href: "/" },
          { name: "物料", href: "/" },
        ],
      },
    ],
  ],
  [
    "en-US",
    [
      {
        title: "Solutions",
        items: [],
      },
      {
        title: "Use Rooch",
        items: [{ name: "Faucet", href: "/" }],
      },
      {
        title: "Developer",
        items: [
          {
            name: "GitHub",
            href: "https://github.com/rooch-network?type=source",
          },
          {
            name: "WebApps Bug Bounty",
            href: "https://github.com/rooch-network/rooch-network.github.io",
          },
          {
            name: "Contracts Bug Bounty",
            href: "/",
          },
          {
            name: "Discord",
            href: "https://discord.com/invite/dT4DfDvE",
          },
        ],
      },
      {
        title: "Community",
        items: [
          {
            name: "Twitter",
            href: "https://twitter.com/RoochNetwork",
          },
          {
            name: "Youtube",
            href: "https://www.youtube.com/channel/UC2WeEQQsK_PDiARYrSAPaPQ",
          },
          { name: "Discord", href: "https://discord.com/invite/dT4DfDvE" },
          { name: "Telegram", href: "https://t.me/roochnetwork" },
        ],
      },
      {
        title: "Legal",
        items: [
          { name: "Terms of Use", href: "/" },
          { name: "Privacy Policy", href: "/" },
          { name: "Cookie Policy", href: "/" },
        ],
      },
      {
        title: "General",
        items: [
          { name: "About", href: "/" },
          { name: "Blog", href: "/" },
          { name: "Material", href: "/" },
        ],
      },
    ],
  ],
]);

export function FooterContent() {
  const { locale } = useRouter();
  const nav = navigation.get(locale);

  return (
    <div className="w-full" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="w-full py-8 mx-auto">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-1 gap-8 xl:col-span-2">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 md:gap-8">
              {nav.map((v) => {
                return (
                  <div className="mt-12 md:!mt-0">
                    <FooterHeader>{v.title}</FooterHeader>
                    <ul role="list" className="mt-4 space-y-1.5 list-none ml-0">
                      {v.items.map((item) => (
                        <li key={item.name}>
                          <FooterLink href={item.href}>{item.name}</FooterLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mt-12 xl:!mt-0">
            <FooterHeader>Subscribe to our newsletter</FooterHeader>
            <p className="mt-4 text-sm text-gray-600 dark:text-[#888888]">
              Subscribe to the Turbo newsletter and stay updated on new releases
              and features, guides, and case studies.
            </p>
            <SubmitForm />
          </div>
        </div>

        <div className="pt-8 mt-8 sm:flex sm:items-center sm:justify-between">
          <div>
            <p className="mt-4 text-xs text-gray-500 dark:text-[#888888]">
              &copy; {new Date().getFullYear()} Rooch, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SubmitForm() {
  const [email, setEmail] = useState("");
  const router = useRouter();
  return (
    <form
      className="mt-4 sm:flex sm:max-w-md"
      onSubmit={(e) => {
        fetch("/api/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        })
          .then((res) => res.json())
          .then((res) => {
            return router.push("/confirm");
          });
        e.preventDefault();
      }}
    >
      <label htmlFor="email-address" className="sr-only">
        Email address
      </label>
      <input
        type="email"
        name="email-address"
        id="email-address"
        autoComplete="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border-[#666666] dark:border-[#888888] w-full min-w-0 px-4 py-2 text-base text-gray-900 placeholder-gray-500 bg-white border rounded-md appearance-none dark:text-white sm:text-sm dark:bg-transparent focus:outline-none focus:ring-2 focus:ring-gray-800 dark:focus:border-white focus:placeholder-gray-400"
        placeholder="you@example.com"
      />
      <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
        <button
          type="submit"
          className="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white bg-black border border-transparent rounded-md dark:bg-white dark:text-black sm:text-sm betterhover:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-800 dark:focus:ring-white dark:betterhover:hover:bg-gray-300"
        >
          Subscribe
        </button>
      </div>
    </form>
  );
}

export function Footer({ menu }: { menu?: boolean }): ReactElement {
  const config = useConfig();

  return (
    <footer className="bg-[#FAFAFA] pb-[env(safe-area-inset-bottom)] relative dark:bg-[#111111]">
      <div
        className={cn(
          "mx-auto max-w-[90rem] py-2 px-4 flex gap-2",
          menu ? "flex" : "hidden"
        )}
      >
        <LocaleSwitch options={config.i18n} />
      </div>
      <div
        className={cn(
          "mx-auto max-w-[90rem] py-12 flex justify-center md:justify-center text-black dark:text-white",
          "pl-[max(env(safe-area-inset-left),1.5rem)] pr-[max(env(safe-area-inset-right),1.5rem)]"
        )}
      >
        <FooterContent />
      </div>
    </footer>
  );
}
