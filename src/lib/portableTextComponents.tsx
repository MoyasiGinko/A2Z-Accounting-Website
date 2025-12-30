import Image from "next/image";
import { PortableTextComponents } from "@portabletext/react";
import { urlFor } from "./imageBuilder";

export const portableTextComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="my-4 text-lg font-medium font-sans leading-7 text-primary">
        {children}
      </p>
    ),
    h1: ({ children }) => (
      <h1 className="mt-8 mb-4 text-4xl font-serif font-semibold text-primary">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="mt-7 mb-3 text-3xl font-serif font-semibold text-primary">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-6 mb-3 text-2xl font-serif font-semibold text-primary">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="mt-6 mb-2 text-xl font-serif font-semibold text-primary">
        {children}
      </h4>
    ),
    h5: ({ children }) => (
      <h5 className="mt-5 mb-2 text-lg font-serif font-semibold text-primary">
        {children}
      </h5>
    ),
    h6: ({ children }) => (
      <h6 className="mt-4 mb-2 text-base font-serif font-semibold text-primary">
        {children}
      </h6>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-6 border-l-4 border-secondary bg-secondary/5 px-4 py-3 text-lg italic font-serif text-slate-800">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="my-4 ml-6 list-disc space-y-2 text-base leading-7 text-slate-800">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="my-4 ml-6 list-decimal space-y-2 text-base leading-7 text-slate-800">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="pl-2 text-slate-800">{children}</li>
    ),
    number: ({ children }) => (
      <li className="pl-2 text-slate-800">{children}</li>
    ),
  },
  types: {
    image: ({ value }) => {
      const url = value ? urlFor(value).width(1200).url() : "";
      if (!url) return null;
      return (
        <div className="my-6">
          <Image
            src={url}
            alt={value?.alt || ""}
            width={1200}
            height={720}
            className="w-full h-auto rounded-lg"
          />
          {value?.caption ? (
            <p className="mt-2 text-sm text-gray-500 text-center">
              {value.caption}
            </p>
          ) : null}
        </div>
      );
    },
    tableBlock: ({ value }) => {
      const rows = value?.rows || [];
      if (!rows.length) return null;
      return (
        <div className="my-6 overflow-x-auto">
          <table className="min-w-full border border-gray-200 text-sm">
            <tbody>
              {rows.map((row: { cells: string[] }, rowIdx: number) => (
                <tr key={rowIdx} className="border-b border-gray-200">
                  {row.cells?.map((cell: string, cellIdx: number) => (
                    <td
                      key={cellIdx}
                      className="px-3 py-2 align-top text-gray-800"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    },
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-primary">{children}</strong>
    ),
    em: ({ children }) => <em className="italic text-primary">{children}</em>,
    code: ({ children }) => (
      <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm text-slate-800">
        {children}
      </code>
    ),
    link: ({ children, value }) => {
      const rel = value?.openInNewTab ? "noreferrer noopener" : undefined;
      return (
        <a
          href={value?.href}
          rel={rel}
          target={value?.openInNewTab ? "_blank" : undefined}
          className="text-secondary underline underline-offset-2 hover:text-primary"
        >
          {children}
        </a>
      );
    },
  },
};
