import 'bulma/css/bulma.css'

import React from "react"

const CoolButton = (props) => {
    let btns = "button "

    if (props.isSmall) {
        btns +="is-small "
    }

    if (props.isDanger) {
        btns +="is-danger "
    }

    if (props.isSuccess) {
        btns +="is-success "
    }

    if (props.className) {
        btns += props.className
    }

    return (
        <button className={btns}>
        {props.children}</button>
    
    )
}

export default CoolButton

