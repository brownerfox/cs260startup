import React from 'react';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Feed } from './feed/feed';
import { Profile } from './profile/profile';
import { About } from './about/about';
import { AuthState } from './login/authState';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { CreatePost } from './createapost/createapost';

function App() {
    const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
    const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
    const [authState, setAuthState] = React.useState(currentAuthState);

    return (
        <BrowserRouter>
            <div className='body bg-dark text-light'>
                <header className='container-fluid'>
                    <nav className='navbar fixed-top navbar-dark'>
                        <div className='navbar-brand'>
                            Fishpics<sup>&reg;</sup>
                        </div>
                        <menu className='navbar-nav'>
                            <li className='nav-item'>
                                <NavLink className='nav-link' to='/'>
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
                        userName={userName}
                        authState={authState}
                        onAuthChange={(userName, authState) => {
                            setAuthState(authState);
                            setUserName(userName);
                        }}
                    />
                    }
                    />
                    <Route path='/feed' element={<Feed />} />
                    <Route path='/profile' element={<Profile userName={userName} />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/createapost' element={<CreatePost userName={userName} />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>

                
                <footer className='bg-dark'>
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

function NotFound() {
    return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
  }
  
  export default App;