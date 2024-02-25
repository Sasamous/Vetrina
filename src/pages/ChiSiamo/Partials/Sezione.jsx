const Sezione = (props) => {
  return (
    <section class="sezione-chi-siamo">
      <h1>{props.title}</h1>
      <p>{props.desc}</p>
    </section>
  )
}

export default Sezione