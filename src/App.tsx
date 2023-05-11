import {Header} from './components/header/Header'
import { Post } from './components/post/Post'
import { Sidebar } from './components/sidebar/Sidebar'
import './global.css'
function App() {


  return (
    <>
    <Header/>
    <div className='wrapper'>
      <Sidebar/>
      <div className="post">
      <Post/>
      <Post/>
      </div>

    </div>
    </>
  )
}
export default App
