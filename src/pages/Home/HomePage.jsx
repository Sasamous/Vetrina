import bgImage from '../../assets/images/Gelati.jpg';
import './HomePage.css';
import Section from './partials/Section';

const HomePage = () => {
  return (
    <>
      <img src={bgImage} class="cover-image" alt="background" />
      <div class="section-container">
        <Section link="/chi-siamo" image={bgImage} title="Chi Siamo" />
        <Section link="/servizi" image={bgImage} title="Servizi" />
        <Section link="/contatti" image={bgImage} title="Contatti" />
      </div>
    </>
  )
}

export default HomePage;