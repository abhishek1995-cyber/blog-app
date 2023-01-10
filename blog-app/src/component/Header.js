import React from 'react'
import {NavLink } from 'react-router-dom'

export default class Header extends React.Component {
    state = {

    }

    render(){
        return (
            <>
            <header className='header' >
                <nav className='container flex'>
                    <ul>
                        <NavLink to='/' id='logo' activeClassName='active' exact>
                        <li>Blog</li>
                        </NavLink>
                    </ul>
                    <ul className='flex'>
                        <NavLink to='/' id='navlink' activeClassName='active' exact>
                        <li>
                            Home
                        </li>
                        </NavLink>
                        <NavLink to='/login' id='navlink' activeClassName='active'>
                        <li>
                            Sign in
                        </li>
                        </NavLink>
                        <NavLink to='/register' id='navlink' activeClassName='active'>
                        <li>
                            Sign up
                        </li>
                        </NavLink>
                    </ul>
                </nav>
            </header>
            </>
        )
    }
}