
export const Button = ({funcionalidad, text, clase}) => {
  return (
    <button  className={clase} onClick={funcionalidad}>
        {text}
    </button>
  )
}



