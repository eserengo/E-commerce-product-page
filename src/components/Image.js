const Image = (props) => (
  <img className={props.className} id={props.id} src={props.src} alt={props.alt} onClick={props.onClick} />
)

export default Image;