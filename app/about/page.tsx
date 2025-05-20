import { getKbArticlesByCode } from "@/sdk/queries/kb";
import React from "react";

export const revalidate = 1;

export default async function AboutUs() {
  const { articles: aboutUsArticles } = await getKbArticlesByCode("about_us");

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
//terms-of-service
