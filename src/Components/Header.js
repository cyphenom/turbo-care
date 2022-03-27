import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import Menu from '../Assets/menu.png';
import Logo from '../Assets/logo.png';
import Search from '../Assets/search.png';

import Grid from '@mui/material/Grid';

const Header = () => {
    const navigate = useNavigate();
    const [query, setQuery] = useState("");

    return (
        <>
            <div className="overlay"></div>
            <Grid>
                <nav className="flex-div">
                    <Grid item xs={2}>
                        <div className="nav-left flex-div">
                            <img src={Menu} className="menu-icon" />
                            <Link to='/'><img src={Logo} className="logo" /></Link>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className="nav-middle flex-div">
                            <div className="search-box flex-div">
                                <input type="text" placeholder="Search" onChange={(e) => {
                                    setQuery(e.target.value);
                                }} onKeyUp={(e) => {
                                    if (e.key === "Enter") {
                                        navigate("/results?q=" + query);
                                    }
                                }} />
                                <Link to={"/results?q=" + query}><img src={Search} /></Link>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={2}>
                        <div className="nav-right flex-div">

                        </div>
                    </Grid>
                </nav>
            </Grid>
        </>
    )
}

export default Header