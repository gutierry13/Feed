import { useState, FormEvent, ChangeEvent, InvalidEvent } from 'react'
import { Comment } from '../comments/Comment'
import { Container, Form } from './styles'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
export interface PostProps {
  id: number
  author: {
    avatar: string
    name: string
    role: string
  }
  content: { type: string; content: string }[]
  publishedAt: Date
}
export function Post({ author, content, publishedAt }: PostProps) {
  // const publishedDateFormat = Intl.DateTimeFormat('pt-BR',{
  //   day:'2-digit',
  //   month:'long',
  //   year:'numeric',
  //   hour:'2-digit',
  //   minute:'2-digit'
  // }).format(publishedAt)
  const publishedDateFormat = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  })
  const publishedDateRelative = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  const [comments, setComments] = useState(['Post muito bacana 👏'])
  const [newCommentText, setNewCommentText] = useState('')
  function handleSubmitComment(event: FormEvent) {
    event.preventDefault()
    setComments([...comments, newCommentText])
    setNewCommentText('')
  }
  function handleNewCommentText(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('')
    setNewCommentText(event.target?.value)
  }
  function handleInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório')
  }
  function deleteComment(deletedComment: string) {
    const newCommentListWithoutDeletedeOne = comments.filter((comment) => {
      return comment !== deletedComment
    })
    setComments(newCommentListWithoutDeletedeOne)
    // console.log(`Deletar o comentário ${deletedComment}`)
  }

  return (
    <Container>
      <header>
        <div className="author">
          <img
            src={author.avatar}
            alt=""
          />
          <div className="author-info">
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time
          title={publishedDateFormat}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelative}
        </time>
      </header>
      <div className="content">
        {content.map((line) => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>
          } else if (line.type === 'link') {
            return (
              <p key={line.content}>
                <a href="">{line.content}</a>
              </p>
            )
          }
        })}
      </div>
      <Form onSubmit={handleSubmitComment}>
        <strong>Deixe sua mensagem</strong>
        <textarea
          onChange={handleNewCommentText}
          value={newCommentText}
          required
          onInvalid={handleInvalid}
          name="comment"
          placeholder="Deixe seu comentário"
        ></textarea>
        <footer>
          <button
            type="submit"
            disabled={newCommentText.length === 0}
          >
            Publicar
          </button>
        </footer>
      </Form>
      <div className="comment-list">
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              deleteComment={deleteComment}
            />
          )
        })}
      </div>
    </Container>
  )
}
