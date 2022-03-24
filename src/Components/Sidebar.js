import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

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

const Sidebar = ({ fetchVideos, setFoundVideos }) => {
    const location = useLocation();
    const [values, setValues] = useState(
        new Array(false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false)
    );
    const [videos, setVideos] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getVideos = async () => {
            const serverVideos = await fetchVideos();
            setVideos(serverVideos);
            setLoading(false);
        }

        getVideos();
    }, []);

    return (
        <>
            {
                loading || !videos ? (
                    ''
                ) : (
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
                                    }}></Search>
                                    <Grid container spacing={2} className="button-group">
                                        <Grid item xs>
                                            <Button variant="outlined">Reset</Button>
                                        </Grid>
                                        <Grid item xs>
                                            <Link to={"/results?type=advanced"}><Button variant="outlined" onClick={() => {
                                                var foundVideos = [];
                                                for (var i = 0; i < values.filter(value => value).length; i++) {
                                                    var filtered = videos.filter(video => video.tags.includes(values.filter(value => value)[i]));
                                                    var foundVideos = [...foundVideos, ...filtered];
                                                }

                                                setFoundVideos(foundVideos);
                                            }}>Search</Button></Link>
                                        </Grid>
                                    </Grid>
                                    <Accordian values={values} setValues={setValues}></Accordian>
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
                                        }}></Search>
                                        <Grid container spacing={2} className="button-group">
                                            <Grid item xs>
                                                <Button variant="outlined">Reset</Button>
                                            </Grid>
                                            <Grid item xs>
                                                <Button variant="outlined" onClick={() => {
                                                    console.log(values);
                                                }}>Search</Button>
                                            </Grid>
                                        </Grid>
                                        <Accordian values={values} setValues={setValues}></Accordian>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
        </>
    )
}

export default Sidebar