import { Aside } from "./styles";
import {PencilLine} from '@phosphor-icons/react'
export function Sidebar() {
  return (
    <Aside>
      <img src="https://images.unsplash.com/photo-1612627267405-fda9599f9522?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60"/>
      <div className="profile">
        <img src="https://github.com/gutierry13.png" />
        <strong>Alexandre Gutierry</strong>
        <span>Fullstack Developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar seu perfil
          </a>
      </footer>
    </Aside>
  )
}