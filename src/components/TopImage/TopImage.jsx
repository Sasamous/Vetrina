import './TopImage.css';
import TopImg from '../../assets/images/Gelati.jpg';

const TopImage = () => {
  return (
    <div class="top-image">
      <img src={TopImg} alt="background" />
    </div>
  )
}

export default TopImage