import './ChiSiamo.css';
import TM1 from '../../assets/images/TM1.jpg';
import TM2 from '../../assets/images/TM2.jpg';
import Membro from './Partials/Membro';
import Sezione from './Partials/Sezione';

const ChiSiamo = () => {
  return (
    <main>
      <Sezione title="Chi Siamo" desc="Una breve introduzione sull'azienda e i suoi valori." />
      <Sezione title="La Nostra Storia" desc="Una panoramica della storia dell'azienda e dei suoi successi." />
      <Sezione title="La Nostra Missione" desc="Descrizione della missione aziendale, i valori e l'obiettivo principale dell'azienda." />
      <Sezione title="La Nostra Visione" desc="Una descrizione della visione dell'azienda per il futuro e gli obiettivi a lungo termine." />
      <h2>Il Nostro Team</h2>
      <div class="team-container">
        <Membro name="Maria Mariacci" role="CEO" img={TM2} />
        <Membro name="Piero Pieracci" role="CTO" img={TM1} />
      </div>
    </main>
  )
}

export default ChiSiamo