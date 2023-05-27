
export const Button = ({funcionalidad, text, clase, icon}) => {
  return (
    <button  className={clase} onClick={funcionalidad}>
        {icon} {text}
    </button>
  )
}



