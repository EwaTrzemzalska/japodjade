import React from "react"
import Modal from 'styled-react-modal'

const PostLink = ({ post }) => {

  const [isOpen, setIsOpen] = React.useState(false)

  function toggleModal(e) {
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

  return (
    <div>
      <article className="card">
        <div className="img-container">
          <img src={post.data.Logo.localFiles[0].publicURL} alt="Logo"></img>
        </div>
        <header>
          <h2 className="post-title">{post.data.Nazwa}</h2>
          <div className="post-meta">
            {post.data.MiastoTrimmed}
          </div>
        </header>
        <p>{post.data.Opis}</p>
        <div>
          <button onClick={toggleModal}>Jak zamawiać?</button>
          <StyledModal
            isOpen={isOpen}
            onBackgroundClick={toggleModal}
            onEscapeKeydown={toggleModal} className="card">
            <button onClick={toggleModal} aria-label="Close" className="close">&times;</button>
            <div className="img-container">
              <img src={post.data.Logo.localFiles[0].publicURL} alt="Logo"></img>
            </div>
            <h2 className="mb-5">Jak zamawiać z {post.data.Nazwa}?</h2>
            <p className="mb-30">{post.data.Kontakt}</p>
            <p className="grey-bg mb-30">Nie zapomnij wspomnieć, że znalazłeś {post.data.Nazwa} na <b>japodjade.pl</b> podczas składania zamówienia!</p>
            <p className="mb-0"><b>Pozostałe informacje:</b></p>
            <p><b>Strona www: </b><a href={post.data.Link} target="_blank">{post.data.Link}</a></p>
          </StyledModal>
        </div>
        <div>
          <a href={post.data.Link} target="_blank">{post.data.Link}</a>
        </div>
      </article>
    </div>
  )
}
export default PostLink