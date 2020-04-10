import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post }) => (
  <article className="card ">
    <h1>{post.data.Nazwa}</h1>
    <h2>{post.data.Miasto}</h2>
    <h2>{post.data.Opis}</h2>
    <a href={post.data.Link}>{post.data.Link}</a>
  </article>
)
export default PostLink