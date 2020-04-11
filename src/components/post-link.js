import React from "react"

const PostLink = ({ post }) => (
  <article className="card ">
    <img src={post.data.Logo[0].url} alt="Logo"></img>
    <h1>{post.data.Nazwa}</h1>
    <h2>{post.data.Miasto}</h2>
    <p>{post.data.Opis}</p>
    <a href={post.data.Link}>{post.data.Link}</a>
  </article>
)
export default PostLink