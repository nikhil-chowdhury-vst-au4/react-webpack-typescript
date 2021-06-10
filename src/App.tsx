import './styles.css'
// import IMAGE from '../public/img/react.png'
import { Counter } from './ClickCounter'
import Users from './components/UsersComponent'

export const App = () => {
  return (
    <>
      <h1>welcome to react saga app</h1>

      {/* <img src={IMAGE} alt="React Logo" width="300" height="200"></img> */}

      <Counter />
      <Users />
    </>
  )
}
