import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Feed } from './feed/feed';
import { Profile } from './profile/profile';
import { About } from './about/about';
import { AuthState } from './login/authState';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

function App() {
    const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
    const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
    const [authState, setAuthState] = React.useState(currentAuthState);

    return (
        <BrowserRouter>
            <div className='body' style={{ backgroundColor: '#00A86B', color: 'white' }}>
                <header className='container-fluid'>
                    <nav className='navbar fixed-top navbar-dark'>
                        <div className='navbar-brand'>
                            Fishpics<sup>&reg;</sup>
                        </div>
                        <menu className='navbar-nav'>
                            <li className='nav-item'>
                                <NavLink className='nav-link' to=''>
                                    Login
                                </NavLink>
                            </li>
                            {authState === AuthState.Authenticated && (
                                <li className='nav-item'>
                                    <NavLink className='nav-link' to='feed'>
                                        Feed
                                    </NavLink>
                                </li>
                            )}
                            {authState === AuthState.Authenticated && (
                                <li className='nav-item'>
                                    <NavLink className='nav-link' to='profile'>
                                        Profile
                                    </NavLink>
                                </li>
                            )}
                            <li className='nav-item'>
                                <NavLink className='nav-link' to='about'>
                                    About
                                </NavLink>
                            </li>
                        </menu>
                    </nav>
                </header>
            

                <Routes>
                    <Route
                    path='/'
                    element = {
                        <Login 
                        userName={username}
                        authState={authState}
                        onAuthChange={(userName, authState) => {
                            setAuthState(authState);
                            setUserName(userName);
                        }}
                    />
                    }
                    exact
                    />
                    <Route path='/feed' element={<Feed userName={userName} />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/about' element={<About />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
                <footer className='bg-dark text-dark text-muted'>
                    <div className='container-fluid'>
                        <span className='text-reset'>Taft Lakey</span>
                        <a className='text-reset' href='https://github.com/brownerfox/cs260startup'>
                        GitHub
                        </a>
                    </div>
                </footer>
            </div>
        </BrowserRouter>
    );   
}