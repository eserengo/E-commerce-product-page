const Button = (props) => (
  <button onClick={props.buttonOnClick} type={props.buttonType} className={props.buttonClassName}><img className={props.imageClassName} src={props.imageSrc} alt={props.imageAlt} /> {props.buttonContent}</button>
)

export default Button;