import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
    return (
        <nav className="navbar navbar-default">
            <div className="container">                                            
                <ul className="nav navbar-nav pull-xs-right" show-authed="false">
                    <li className="nav-item">                        
                        <NavLink exact className="nav-link" activeClassName='active' to='/'>
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">                        
                        <NavLink className="nav-link" activeClassName='active' to='/cart'>
                            Cart
                        </NavLink>
                    </li>
                    <li className="nav-item">                        
                        <NavLink className="nav-link" activeClassName='active' to='/order'>
                            Order
                        </NavLink>
                    </li>
                </ul>            
            </div>
        </nav>
  
    )
}