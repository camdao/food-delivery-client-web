'use client'

import { useState } from "react";
import Button from "@/components/Button/Button";
import Icon from "@/components/Icon";
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
                <Input name ={"Email"} bgColor={"#F0F5FA"} value={value} onChange={setValue} placeholder="example@gmail.com"/>
                <Input name ={"Password"} bgColor={"#F0F5FA"} value={value} onChange={setValue} placeholder="**********"/>
                <div className={loginFooter}>
                    <label className={rememberMe}>
                        <input type="checkbox" color="#7E8A97"/>
                        Remember me
                    </label>
                    <button className={forgotPassword} type="button">
                        Forgot Password
                    </button>
                </div>
                <Button color={'orange'} size={'large'}>LOG IN</Button>
                <div className={signUpSection}>
                    <div>
                        <span className={signUpText}>Don’t have an account?</span>
                        <span className={signUpLink}>Sign Up</span>
                    </div>
                    <div className={orDivider}>Or</div>
                    <div className={containerIcon}>
                        <Icon name='facebook'/>
                        <Icon name='twitter'/>
                        <Icon name='apple'/>
                    </div>
                </div>
                
            </div>
        </>
    )
}
const containerIcon = css({
    display:'flex',
    gap:'10px',
    justifyContent: 'center',
})

const signUpSection = css({
    paddingBottom:'10px',
    textAlign:'center',
    display:'flex',
    flexDirection:'column',
    gap:'15px'
})

const signUpText =css({
    color:'#646982'
})
const signUpLink =css({
    paddingLeft:'5px',
    color:'orange.orange400'
})
const orDivider =css({
    color:'#646982'
})
const forgotPassword = css({
    color:'orange.orange400'
})
const rememberMe = css({
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    cursor: 'pointer',
    color:'#7E8A97'
})
const loginFooter = css({
    display:'flex',
    justifyContent:'space-between'
})
const loginCard = css({
    background: 'basicColor.white',
    borderRadius: '20px',
    padding: '24px',
    height: '75vh',
    position: 'absolute',
    bottom: '0',
    width: '100%',
    maxWidth: '375px',
    display:'flex',
    flexDirection:'column',
    gap:'8px'
})

const loginHeader = css({
    background: 'gray.gray100',
    color: 'white',
    textAlign: 'center',
    height: '30vh',
    borderTopRadius: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', 
    padding: '0 20px'
})