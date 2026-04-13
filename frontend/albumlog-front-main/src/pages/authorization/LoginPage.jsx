import React, { useState } from 'react'
import HeaderSite from '../../components/HeaderSite'
import fetchSignIn from '../../tools/FetchProfile/fetchSignIn';
import FooterSite from '../../components/FooterSite';

export default function LoginPage() {
    
    const [authError, setAuthError] = useState(null)
    const token = localStorage.getItem('token')


    const submitData = async () => {
        const email = document.querySelector('#Email').value;
        const password = document.querySelector('#password').value;
        
        const object = {
            email: email,
            password: password
        }

        const jsonObject = JSON.stringify(object);

        const res = await fetchSignIn(jsonObject, 'login')

        console.log(res)

        if (res[0].status === 400) {
            setAuthError(res[1].message)
        }

        if (res[0].status === 200) {
            setAuthError('Successful login! Redirecting now...')
            const tokenLocalStorage = res[1].token
            localStorage.setItem('token', tokenLocalStorage);
            window.location.href = '/'
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
                    <h1>Log in</h1>
                <form action="" method="get" className="authForm">
                <div className="authForm">
                    <h3>Email</h3>
                    <input type="email" name="Email" id="Email" required />
                </div>
                <div className="authForm">
                    <h3>Password</h3>
                    <input type="password" name="password" id="password" required />
                </div>
                </form>
                <div className="authForm">
                    <button onClick={() => {submitData()}}>
                        Log in
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
