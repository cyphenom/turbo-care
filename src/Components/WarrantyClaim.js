import Banner from '../Assets/banner.png';

const WarrantyClaim = () => {
    return (
        <div className="container">
            <div className="banner">
                <img src={Banner} alt="banner" />
            </div>
            <iframe frameBorder="0" width="100%" height="450" src="https://so.turboairinc.com/Turbo_WebWarrantySVC/OpenApis/WarrantyRegistrationAndClaim/iframe_claim_tai.html"></iframe>
        </div>
    )
}

export default WarrantyClaim