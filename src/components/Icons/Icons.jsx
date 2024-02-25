import FB from '../../assets/icons/square-facebook.svg';
import X from '../../assets/icons/square-x-twitter.svg'
import IG from '../../assets/icons/square-instagram.svg'

import './Icons.css';

const Icon = (props) => {
  return (
    <img class="icon" src={props.icon} alt={props.alt ?? ""} />
  )
}

export const FacebookIcon = () => {
  return (
    <Icon icon={FB} alt="Facebook" />
  )
}

export const XIcon = () => {
  return (
    <Icon icon={X} alt="X Twitter" />
  )
}

export const InstagramIcon = () => {
  return (
    <Icon icon={IG} alt="Instagram" />
  )
}