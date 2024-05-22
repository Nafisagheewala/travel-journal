export default function Hero(props) {
    return (
        <div className="hero">
            <img src={props.img} alt="Mount Fuji" className="hero-img" />
            <div className="hero-content">
                <img src="../../assets/location-icon.png" alt="location" className="location-icon" />
                <span className="location-name">{props.location}</span>
                <span><a href={props.googleMapsUrl}>View on Google Maps</a></span>
                <h1>{props.title}</h1>
                <span className="date">{props.date}</span>
                <p className="hero-info">{props.info}</p>
            </div>
        </div>
    )
}