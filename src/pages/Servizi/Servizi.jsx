import './Servizi.css';
import TM1 from '../../assets/images/TM1.jpg';
import TM2 from '../../assets/images/TM2.jpg';
import ServiceBox from './Partials/ServiceBox/ServiceBox';

const Servizi = () => {
  return (
    <div class="servizi">
      <ServiceBox title="Servizio 1" image={TM1} desc="Una breve introduzione sul questo servizio." />
      <ServiceBox title="Servizio 2" image={TM2} desc="Una breve introduzione sul questo servizio." imageRight={true} />
      <ServiceBox title="Servizio 3" image={TM1} desc="Una breve introduzione sul questo servizio." />
      <ServiceBox title="Servizio 4" image={TM2} desc="Una breve introduzione sul questo servizio." imageRight={true} />
    </div>
  )
}

export default Servizi