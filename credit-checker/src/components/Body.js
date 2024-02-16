import React from 'react'

import Form from "./Form"
import Csv from "./Csv"
import Or from "./Or"

export default function Body() {
    return (
        <>
            <div className="container my-5">
                <Form/>
                <Or/>
                <Csv/>
            </div>

        </>
    )
}
