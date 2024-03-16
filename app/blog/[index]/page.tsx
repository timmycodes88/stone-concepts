import React from "react"
import { articles } from "../page"
import RedirectClient from "../RedirectClient"

export default function Index({ params: { index } }: any) {
  let num = Number(index)
  if (Number.isNaN(num)) num = 1
  const article = articles[num % articles.length]
  if (!article) return <RedirectClient />
  return (
    <div>
      <RedirectClient />
      <article className="opacity-0">
        <h1>{article.title}</h1>
        <p>{article.body}</p>
      </article>
    </div>
  )
}
