import React from 'react'
import {NavLink, Link } from 'react-router-dom'

export default class Login extends React.Component {
    state = {

    }

    render(){
        return (
            <>
            <section className='sign'>
            <h1 className='sign-heading'>Sign In</h1>
            <Link to='/register' className='sign-link'>
                Need an account
            </Link>
            <form className='sign-form'>
                <input className='sign-input' type='email'
                placeholder='Email'
                />
                <input className='sign-input' type='password'
                placeholder='Password'
                
                />
                <div className='sign-button'>
                    <input className='sign-btn'
                    type='submit'
                    value='Sign In'
                     />
                </div>
            </form>
            </section>
            </>
        )
    }
}