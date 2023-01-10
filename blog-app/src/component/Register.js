import React from 'react'
import {NavLink,Link } from 'react-router-dom'

export default class Register extends React.Component {
    state = {

    }

    render(){
        return (
            <>
            <section className='sign'>
             <h1 className='sign-heading'>Sign UP</h1>
            <Link to='/login' className='sign-link'>
                Have an account
            </Link>
            <form className='sign-form'>
            <input className='sign-input'
                type='text'
                placeholder='Username'
                />
                <input className='sign-input'
                 type='email'
                placeholder='Email'
                />
                <input className='sign-input'
                 type='password'
                placeholder='Password'
                
                />
                <div className='sign-button'>
                    <input className='sign-btn'
                    type='submit'
                    value='Sign Up'
                     />
                </div>
            </form>
            </section>
            </>
        )
    }
}