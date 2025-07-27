'use client'

import { useState } from "react";
import Button from "@/components/Button/Button";
import Icon from "@/components/Icon";
import Input from "@/components/Input/Input";

import { css } from "../../../styled-system/css";

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginButton = () => {
        alert("dangnhap")
    };

    return(
        <>
            <div className={loginHeader}>
                <h2 className={headerLogin}>Log In</h2>
                <p className={describeLogin}>Please sign in to your existing account</p>
            </div>
            <div className={loginCard}>
                <Input headerType= 'icon' name ={"EMAIL"} bgColor={"#F0F5FA"} value={email} onChange={setEmail} placeholder="example@gmail.com"/>
                <Input headerType= 'password' type = 'password' name ={"PASSWORD"} bgColor={"#F0F5FA"} value={password} onChange={setPassword} placeholder="**********"/>
                <div className={loginFooter}>
                    <label className={rememberMe}>
                        <input type="checkbox" color="#7E8A97"/>
                        Remember me
                    </label>
                    <button className={forgotPassword} type="button">
                        Forgot Password
                    </button>
                </div>
                <div className={buttonCss}>
                    <Button color={'orange'} size={'large'} onClick={loginButton}>LOG IN</Button>
                </div>
                <div className={signUpSection}>
                    <div>
                        <span className={signUpText}>Don’t have an account?</span>
                        <span className={signUpLink}>SIGN UP</span>
                    </div>
                    <div className={orDivider}>Or</div>
                    <div className={containerIcon}>
                        <Icon 
                            name="facebook" 
                            className={css({ cursor: 'pointer' })} 
                        />
                        <Icon 
                            name="twitter" 
                            className={css({ cursor: 'pointer' })} 
                        />
                        <Icon 
                            name="apple" 
                            className={css({ cursor: 'pointer' })} 
                        />
                    </div>
                </div>
                
            </div>
        </>
    )
}
const buttonCss = css({
    margin:'15px 0'
})
const describeLogin = css({
    fontSize:'16px',
})
const containerIcon = css({
    display:'flex',
    gap:'20px',
    justifyContent: 'center',
})
const headerLogin = css({
  fontSize:'30px',
  fontWeight: 'bold'
})
const signUpSection = css({
    paddingBottom:'10px',
    textAlign:'center',
    display:'flex',
    flexDirection:'column',
    gap:'15px',
})

const signUpText =css({
    color:'#646982',
    fontFamily:'sen',
    fontSize:'14px',
})
const signUpLink =css({
    paddingLeft:'5px',
    color:'orange.orange400',
    fontFamily:'sen',
    fontSize:'14px',
    cursor: 'pointer',
})
const orDivider =css({
    color:'#646982'
})
const forgotPassword = css({
    color:'orange.orange400',
    fontFamily:'sen',
    fontSize:'14px',
    cursor: 'pointer',
})
const rememberMe = css({
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    cursor: 'pointer',
    color:'#7E8A97',
    fontFamily:'sen',
    fontSize:'13px',
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
    padding: '0 20px',
    fontFamily:'sen'
})