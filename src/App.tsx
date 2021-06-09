import './styles.css'
import IMAGE from './react.png'
import { Counter } from './ClickCounter'

export const App = () => {
  return (
    <>
      <h1>welcome to react saga app</h1>

      <img src={IMAGE} alt="React Logo" width="300" height="200"></img>

      <Counter />
    </>
  )
}
