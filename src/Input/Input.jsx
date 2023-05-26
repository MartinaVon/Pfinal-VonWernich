import ("./Input.css")

export const Input = ({type, onChange, placeholder, name, label, id}) => {
  return (
    // <label className="label"> {label}
    //         <input className="input"
    //         type= {type}
    //         onChange={onChange}
    //         placeholder={placeholder}
    //         name={name}
    //         />
    // </label>
    <div className="input-container">
        <label htmlFor={id} className="label"> {label} </label>
        <input className="input"
        id={id}
        type= {type}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        />
    </div>

  )
}

