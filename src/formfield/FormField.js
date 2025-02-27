import 'bulma/css/bulma.css'

import React from "react"


const FormField = (props) => {
    return (
    <div className='field'>
        <label className='label'>{props.label}</label>
        <input className="label" type={props.type} placeholder={props.placeholder} />
    </div>
    )
}

export default FormField
