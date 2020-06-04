import React from 'react'
import Form from '../../components/Form'
import { Section } from './style'

// TODO Form não deve ser um componente pois não é algo que vai ficar se repetindo.
function Login() {

    return (
        <Section>
            <Form/>
        </Section>
    )
}

export default Login
