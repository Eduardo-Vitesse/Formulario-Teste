import React, { useEffect, useState } from 'react'

import {Wrapper, FormFields, InputTop, InputBotton, Button, IconBotton } from './style'

import assetBotton  from '../../assets/rectangle-3.png'
import assetTop  from '../../assets/rectangle-4.png'

function Form() {

    const [activeEmail, setActiveEmail] = useState(false)
    const [activePas, setActivePass] = useState(false)

    function HandleStyleEmail(){
        setActiveEmail(true)
    }

    function HandleStylePass(){
        setActivePass(true)
    }

    useEffect(()=> {
        if(activeEmail === true){
            document.getElementById('email').style.border = "1px solid #DA7F16";
            document.getElementById('email').style.backgroundColor = "#3A3A3A;";
            document.getElementById('email').style.color = "#DA7F16";
        }

        if(activePas === true){
            document.getElementById('password').style.border = "1px solid #DA7F16";
            document.getElementById('password').style.backgroundColor = "#3A3A3A;";
            document.getElementById('password').style.color = "#DA7F16";
        }
    }, [activeEmail, activePas])

    return (
        <>
        <Wrapper>
            <IconBotton src={assetTop}/>
            <FormFields autoComplete="off">
                <InputTop type="email" id="email" placeholder="EMAIL" onClick={HandleStyleEmail}/>
                <InputBotton type="password" id="password" placeholder="SENHA" onClick={HandleStylePass}/>
                <Button type="submit" color="secondary">FAZER LOGIN</Button>
            </FormFields>
        </Wrapper>
        <IconBotton src={assetBotton}/>
        </>
    )
}


export default Form
