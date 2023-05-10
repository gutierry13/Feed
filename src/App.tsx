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
      <Post/>
    </div>
    </>
  )
}
export default App
