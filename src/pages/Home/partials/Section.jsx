import { A } from '@solidjs/router';

const Section = (props) => {
  return (
    <A href={props.link} class="section">
      <h1>{props.title}</h1>
      <img src={props.image} alt="background" />
    </A>
  )
}

export default Section