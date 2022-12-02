import {Link} from 'react-router-dom'
import LogoS from '../../../assets/images/logo-s.png'
import './index.scss'

const Logo = () => {

  return (
    <div className="logo-container" >
      <Link 
        className="logo"
        to="/">
        <img src={LogoS} alt="Logo" />
      </Link>
    </div>
  )
}
export default Logo