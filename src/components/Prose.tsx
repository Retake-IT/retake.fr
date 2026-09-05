import React from "react";
import { Container } from "@/components/Container";

interface ProseProps {
  title: string;
  updatedAt?: string;
  children: React.ReactNode;
}

/**
 * Shared wrapper for legal / text pages (mentions légales, CGV, …).
 * Styles raw HTML children so pages stay plain JSX without a typography plugin.
 */
export function Prose({ title, updatedAt, children }: Readonly<ProseProps>) {
  return (
    <Container className="max-w-3xl">
      <article
        className="
          py-10
          text-gray-600 dark:text-gray-300
          [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:text-gray-900 [&_h1]:dark:text-white [&_h1]:mb-2
          [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-gray-900 [&_h2]:dark:text-white [&_h2]:mt-10 [&_h2]:mb-3
          [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-gray-800 [&_h3]:dark:text-gray-100 [&_h3]:mt-6 [&_h3]:mb-2
          [&_p]:my-4 [&_p]:leading-relaxed
          [&_ul]:my-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1
          [&_ol]:my-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-1
          [&_a]:text-[#7ed957] [&_a]:underline hover:[&_a]:text-indigo-500
          [&_blockquote]:border-l-4 [&_blockquote]:border-gray-200 [&_blockquote]:dark:border-trueGray-700 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-gray-500
          [&_address]:not-italic
        "
      >
        <h1>{title}</h1>
        {updatedAt && (
          <p className="!mt-0 text-sm text-gray-400">
            Dernière mise à jour : {updatedAt}
          </p>
        )}
        {children}
      </article>
    </Container>
  );
}
