const Membro = (props) => {
  return (
    <div class="team-member">
      <h3>{props.name}</h3>
      <img src={props.img} alt={props.name} />
      <p>{props.role}</p>
    </div>
  )
}

export default Membro