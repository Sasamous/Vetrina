import './Logo.css';
import ImgLogo from '../../assets/images/Logo.png';

const Logo = () => {
  return (
    <div class="logo">
      <img src={ImgLogo} alt="Logo" />
    </div>
  );
}

export default Logo;