import Image from "next/image";
import { PortableTextComponents } from "@portabletext/react";
import { urlFor } from "./imageBuilder";

export const portableTextComponents: PortableTextComponents = {
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
    link: ({ children, value }) => {
      const rel = value?.openInNewTab ? "noreferrer noopener" : undefined;
      return (
        <a
          href={value?.href}
          rel={rel}
          target={value?.openInNewTab ? "_blank" : undefined}
          className="text-blue-600 underline"
        >
          {children}
        </a>
      );
    },
  },
};
