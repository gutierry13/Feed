import { ThumbsUp, Trash } from "@phosphor-icons/react"
import { CommentsContainer } from "./styles"

export const Comment = () => {
  return (
   <CommentsContainer>
      <img src="https://picsum.photos/200"/>
      <div className="comment-box">
        <div className="comment-content">
          <header>
            <div className="author">
              <strong>Alexandre Gutierry</strong>
              <time title="01 de maio de 2022 as 13:00:00" dateTime="2022-05-01 13:00:00">Cerca de 1h atrás</time>
            </div>
              <button title="Deletar comentário">
                <Trash size={24}/>
              </button>
          </header>
          <p>Lorem ipsum dolor sit amet</p>
        </div>
        <footer>
          <button>
            <ThumbsUp/>Aplaudir 
            <span className="symbol-count">
              20
            </span>
          </button>
        </footer>
      </div>

   </CommentsContainer>
  )
}
