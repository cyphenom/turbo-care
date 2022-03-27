import { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';

import Home from '../Assets/home.png';
import KitchenIcon from '@mui/icons-material/Kitchen';
import Subscription from '../Assets/subscription.png';
import Library from '../Assets/library.png';
import History from '../Assets/history.png';
import Playlist from '../Assets/playlist.png';
import Messages from '../Assets/messages.png';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Accordian from './Accordian';
import Search from './Search';

const Sidebar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [values, setValues] = useState(
        new Array(false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false)
    );
    const [search, setSearch] = useState("");
    const [reset, setReset] = useState(false);

    return (
        <>
            <div className={location.pathname === '/' || location.pathname === '/results' || location.pathname === '/warranty_claim' ? 'sidebar' : 'disabled-sidebar'}>
                <div className="shortcut-links">
                    <a href=""><img src={Home} /><p>Home</p></a>
                    {/* <a href=""><KitchenIcon></KitchenIcon><p>Products</p></a> */}
                    <a href=""><img src={Subscription} /><p>Parts</p></a>
                    <Link to="/warranty_claim"><img src={Library} /><p>Warranty Claim</p></Link>
                    <a href=""><img src={History} /><p>Troubleshooter</p></a>
                    <a href=""><img src={Playlist} /><p>Q & A</p></a>
                    <a href=""><img src={Messages} /><p>Support</p></a>
                    <hr />
                </div>
                <div className="subscribed-list">
                    <h3>ADVANCED SEARCH</h3>
                    <div className="tags-list">
                        <Search sx={{
                            paddingRight: '100px'
                        }} onChange={(e) => setSearch(e.target.value)} onKeyUp={(e) => {
                            if (e.key === "Enter") {
                                navigate(search ? `/results?q=${search}&type=advanced&tags=${new String(values)}` : `results?type=advanced&tags=${new String(values)}`);
                            }
                        }}></Search>
                        <Grid container spacing={2} className="button-group">
                            <Grid item xs>
                                <Button variant="outlined" onClick={() => {
                                    window.location.reload();
                                }}>Reset</Button>
                            </Grid>
                            <Grid item xs>
                                <Button variant="outlined" onClick={() => {
                                    navigate(search ? `/results?q=${search}&type=advanced&tags=${new String(values)}` : `results?type=advanced&tags=${new String(values)}`);
                                }}>Search</Button>
                            </Grid>
                        </Grid>
                        <Accordian values={values} setValues={setValues} reset={reset}></Accordian>
                    </div>
                </div>
            </div>
            <div className="mobile-sidebar">
                <div id="dismiss">
                    <i className="fas fa-window-close fa-2x text-white"></i>
                </div>
                <div>
                    <h3 className="text-light text-center p-2">&nbsp;&nbsp;&nbsp;</h3>
                    <h5 href="#" className="text-light text-center"></h5>
                </div>
                <div className="list-group list-group-flush">
                    <div className="shortcut-links">
                        <a href=""><img src={Home} /><p>Home</p></a>
                        {/* <a href=""><KitchenIcon></KitchenIcon><p>Products</p></a> */}
                        <a href=""><img src={Subscription} /><p>Parts</p></a>
                        <Link to="/warranty_claim"><img src={Library} /><p>Warranty Claim</p></Link>
                        <a href=""><img src={History} /><p>Troubleshooter</p></a>
                        <a href=""><img src={Playlist} /><p>Q & A</p></a>
                        <a href=""><img src={Messages} /><p>Support</p></a>
                    </div>
                    <div className="subscribed-list">
                        <h3>ADVANCED SEARCH</h3>
                        <div className="tags-list">
                            <Search sx={{
                                paddingRight: '100px'
                            }} onChange={(e) => setSearch(e.target.value)} onKeyUp={(e) => {
                                if (e.key === "Enter") {
                                    navigate(search ? `/results?q=${search}&type=advanced&tags=${new String(values)}` : `results?type=advanced&tags=${new String(values)}`);
                                }
                            }}></Search>
                            <Grid container spacing={2} className="button-group">
                                <Grid item xs>
                                    <Button variant="outlined" onClick={() => {
                                        window.location.reload();
                                    }}>Reset</Button>
                                </Grid>
                                <Grid item xs>
                                    <Button variant="outlined" onClick={() => {
                                        navigate(search ? `/results?q=${search}&type=advanced&tags=${new String(values)}` : `results?type=advanced&tags=${new String(values)}`);
                                    }}>Search</Button>
                                </Grid>
                            </Grid>
                            <Accordian values={values} setValues={setValues} reset={reset}></Accordian>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar