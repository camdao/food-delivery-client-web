'use client'

import { useState } from "react";
import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";

import { css } from "../../../styled-system/css";

export default function LoginPage() {
    const [value, setValue] = useState('');

    return(
        <>
            <div className={loginHeader}>
                <h2>Log In</h2>
                <p>Please sign in to your existing account</p>
            </div>
            <div className={loginCard}>
                <div>Email</div>
                <Input value={value} onChange={setValue} placeholder="example@gmail.com"/>
                <div>Password</div>
                <Input value={value} onChange={setValue} placeholder="**********"/>
                
                <Button color={'orange'} size={'large'}>LOG IN</Button>
            </div>
        </>
    )
}

const loginCard = css({
    background: 'basicColor.white',
    borderRadius: '20px',
    padding: '32px',
    height: '80vh',
    position: 'absolute',
    bottom: '0',
    width: '100%',
    maxWidth: '375px',
})

const loginHeader = css({
    background: '#1E1E2E',
    color: 'white',
    textAlign: 'center',
    padding: '80px 20px',
    height: '25vh',
    borderTopRadius:'20px',
})