import styles from './ServiceBox.module.css';

const ServiceBox = (props) => {
  const classNames = [
    styles['service-box'],
    props.imageRight && styles['service-box-reverse']
  ];

  return (
    <div class={classNames.join(' ')}>
      <div class={styles.image}>
        <img src={props.image} alt="Servizio" />
      </div>
      <div class={styles['text-container']}>
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
      </div>
    </div>
  );
}

export default ServiceBox;
