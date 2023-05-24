import { ThumbsUp, Trash } from '@phosphor-icons/react'
import { CommentsContainer } from './styles'
import { useState } from 'react'
interface CommentProps {
  content: string
  deleteComment: (comment: string) => void
}
export const Comment = ({ content, deleteComment }: CommentProps) => {
  const [likesCount, setLikesCount] = useState(0)
  function handleDeleteComment() {
    deleteComment(content)
  }
  function handleLikeComment() {
    setLikesCount((state) => {
      return state + 1
    })
  }
  return (
    <CommentsContainer>
      <img src="https://picsum.photos/200" />
      <div className="comment-box">
        <div className="comment-content">
          <header>
            <div className="author">
              <strong>Alexandre Gutierry</strong>
              <time
                title="01 de maio de 2022 as 13:00:00"
                dateTime="2022-05-01 13:00:00"
              >
                Cerca de 1h atrás
              </time>
            </div>
            <button
              onClick={handleDeleteComment}
              title="Deletar comentário"
            >
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir
            <span className="symbol-count">{likesCount}</span>
          </button>
        </footer>
      </div>
    </CommentsContainer>
  )
}
