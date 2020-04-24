import React from "react"
import Modal from 'styled-react-modal'
import Linkify from 'linkifyjs/react';


const PostLink = ({ post }) => {

  const [isOpen, setIsOpen] = React.useState(false)

  function toggleModal(e) {
    e.preventDefault();
    setIsOpen(!isOpen)
  }


  const StyledModal = Modal.styled`
    width: 40rem;
    border-radius: 9px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: white;
    position: relative;
  `

  const linkifyOptions = {
    attributes: {rel: "noopener norefferer"}
  } 

  return (
    <div>
      <article className="card" onClick={toggleModal}>
        <div className="img-container">
          <img src={post.data.Logo.localFiles[0].publicURL} alt="Logo"></img>
        </div>
        <header>
          <h2 className="post-title">{post.data.Nazwa}</h2>
          <div className="post-meta">
            {post.data.MiastoTrimmed}
          </div>
        </header>
      </article>
      <StyledModal
        isOpen={isOpen}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
        backgroundProps={{ className: "modal-overflow" }}
        className="card no-shadow m-50-auto">
        <button onClick={toggleModal} aria-label="Close" className="close">&times;</button>
        <div className="img-container">
          <img src={post.data.Logo.localFiles[0].publicURL} alt="Logo"></img>
        </div>
        <h2 className="mb-5">Jak zamawiać z {post.data.Nazwa}?</h2>
        <Linkify options={linkifyOptions}>
          <p className="mb-30">{post.data.Kontakt}</p>
        </Linkify>
        <p className="grey-bg mb-30">Nie zapomnij wspomnieć, że znalazłeś {post.data.Nazwa} na <b>japodjade.pl</b> podczas składania zamówienia!</p>
        <Linkify options={linkifyOptions}>
          <p className="mb-0"><b>Informacje:</b></p>
          <p>{post.data.Opis}</p>
        </Linkify>
        <p><b>Strona www: </b><a href={post.data.Link} target="_blank" rel="noopener noreferrer">{post.data.Link}</a></p>
      </StyledModal>
    </div >

  )
}
export default PostLink