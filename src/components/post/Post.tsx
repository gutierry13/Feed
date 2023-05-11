import { Comment } from "../comments/Comment";
import { Container, Form } from "./styles";

export function Post (){
  return (
    <Container>
      <header>
        <div className="author">
          <img src="https://github.com/gutierry13.png" alt="" />
          <div className="author-info">
          <strong>Alexandre Gutierry</strong>
          <span>FullStack Developer</span>
          </div>
        </div>
        <time title="01 de maio de 2022 as 13:00:00" dateTime="2022-05-01 13:00:00">Publicado há 1h</time>
      </header>
      <div className="content">
        <p>Fala galera, tudo bem?</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare</p>
        <p><a href="#">jane.design/doctorcare</a></p>
        <p>
          <a href="#">#projeto </a>
          <a href="#">#nwl</a>
        </p>
      </div>
      <Form>
        <strong>Deixe sua mensagem</strong>
        <textarea placeholder="Deixe seu comentário">

        </textarea>
        <footer>

        <button type="submit">Publicar</button>
        </footer>
      </Form>
      <div className="comment-list">
        <Comment/>
        <Comment/>
        <Comment/>
      </div>
    </Container>
  )
}