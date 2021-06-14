import './styles/card-style.scss'
import { User } from '../redux/reducers/users'
const Card = (props: { user: User; key: number }) => {
  return (
    <div className="social_card">
      <img src={props.user.profileImage || ''} alt="Sample image" />
      <div className="social_card_body">
        <div>
          <p>Name: {props.user.name}</p>
          <br />
        </div>
        <div>
          <p>Number: {props.user.number}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
