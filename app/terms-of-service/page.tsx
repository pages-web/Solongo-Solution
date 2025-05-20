import { getKbArticlesByCode } from "@/sdk/queries/kb";
import React from "react";

export const revalidate = 1;

export default async function Terms() {
  const { articles: aboutUsArticles } = await getKbArticlesByCode(
    "terms-of-service"
  );

  return (
    <div
      className="min-h-screen flex flex-col justify-between mt-5"
      style={{ paddingLeft: "12rem" }}
    >
      <div
        dangerouslySetInnerHTML={{ __html: aboutUsArticles[0]?.content }}
      ></div>
    </div>
  );
}
