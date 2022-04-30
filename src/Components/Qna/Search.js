import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const navigate = useNavigate();
    const [query, setQuery] = useState("");

    return (
        <div className="input-group">
            <div className="dropdown">
                <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Navigate
                </button>&nbsp;&nbsp;&nbsp;
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="http://localhost:3000">Turbo Care</a>
                    <a className="dropdown-item" href="http://localhost:3000/warranty_claim">Warranty</a>
                </div>
            </div>
            <input className="form-control" type="search" placeholder="Search" onChange={(e) => {
                setQuery(e.target.value);
            }} onKeyUp={(e) => {
                if (e.key === "Enter") {
                    navigate("/results?q=" + query);
                }
            }}></input>&nbsp;&nbsp;&nbsp;
            <a href={"/results?q=" + query} className="btn btn-outline-success" type="submit">Search</a>
        </div>
    )
}

export default Search