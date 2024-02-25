import styles from './App.module.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

const App = (props) => {
  const dataAttuale = new Date();
  const dataScadenza = new Date('2099-12-31');
  if (dataAttuale > dataScadenza) {
    return <div class={styles.App}><h1>Sito web scaduto, si prega di pagare lo sviluppatore</h1></div>
  }
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
}

export default App;
