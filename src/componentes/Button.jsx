
export const Button = ({funcionalidad, text}) => {
  return (
    <button  className="button" onClick={funcionalidad}>
        {text}
    </button>
  )
}



