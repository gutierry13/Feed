import { Header } from './components/header/Header'
import { Post, PostProps } from './components/post/Post'
import { Sidebar } from './components/sidebar/Sidebar'
import './global.css'

const posts: PostProps[] = [
  {
    id: 2,
    author: {
      avatar: 'https://github.com/diego3g.png',
      name: 'Diego ',
      role: 'Fullstack Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
      },
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date('2023-02-20 10:30:00')
  },
  {
    id: 1,
    author: {
      avatar: 'https://github.com/gutierry13.png',
      name: 'Alexandre Gutierry',
      role: 'Fullstack Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
      },
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date('2023-05-11 10:30:00')
  }
]
function App() {
  return (
    <>
      <Header />
      <div className="wrapper">
        <Sidebar />
        <div className="post">
          {posts.map((post) => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
                key={post.id}
                id={post.id}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}
export default App
