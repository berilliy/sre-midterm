import React, { useState } from 'react'
import HeaderSite from '../../components/HeaderSite'
import fetchSignIn from '../../tools/FetchProfile/fetchSignIn';
import { redirect, redirectDocument } from 'react-router-dom';
import FooterSite from '../../components/FooterSite';

export default function SigninPage() {
    
    const [authError, setAuthError] = useState(null)
    const token = localStorage.getItem('token')

    const submitData = async () => {
        const email = document.querySelector('#Email').value;
        const nickname = document.querySelector('#nickname').value;
        const password = document.querySelector('#password').value;
        
        const object = {
            email: email,
            nickname: nickname,
            password: password
        }

        const jsonObject = JSON.stringify(object);

        const res = await fetchSignIn(jsonObject, 'register')

        console.log(res)

        if (res[0].status === 400) {
            setAuthError(res[1][0].msg)
        }

        if (res[0].status === 200) {
            setAuthError('Successfully registered! Go to login page now.')
        }

        if (res[0].status === 500) {
            setAuthError('Unable to register. Try changing email or nickname')
        }
    }

    return (
    <>
        <HeaderSite /> 
        <div className="content">
            <div className="authPage">
                {token ? (<h1>You're already authorized</h1>) : (<>
                    <h1>Sign in</h1>
                <form action="" method="get" className="authForm">
                <div className="authForm">
                    <h3>Email</h3>
                    <input type="email" name="Email" id="Email" required />
                </div>
                <div className="authForm">
                    <h3>Nickname</h3>
                    <input type="text" name="nickname" id="nickname" required />
                </div>
                <div className="authForm">
                    <h3>Password</h3>
                    <input type="password" name="password" id="password" required />
                </div>
                </form>
                <div className="authForm">
                    <button onClick={() => {submitData()}}>
                        Sign in
                    </button>

                    {authError ? <p>{authError}</p> : <p></p>}

                </div>
                </>)}
                
            </div>
        </div>
        <FooterSite />
    </>
  )
}
