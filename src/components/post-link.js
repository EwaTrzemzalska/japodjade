import React from "react"

const PostLink = ({ post }) => (
  
  <article className="card ">
    <div class="img-container">
      <img src={post.data.Logo[0].url} alt="Logo"></img>
    </div>
    <header>
      <h2 className="post-title">{post.data.Nazwa}</h2>
      <div className="post-meta">
        {post.data.Miasto}
      </div>
    </header>
    <p>{post.data.Opis}</p>
    <h4 className="subtitle">Zamówienia</h4>
    <p>{post.data.Kontakt}</p>
    <a href={post.data.Link} target="_blank">{post.data.Link}</a>
  </article>
)
export default PostLink