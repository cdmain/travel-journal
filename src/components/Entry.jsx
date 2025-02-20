import mapMarkerIcon from "/src/assets/map-marker-icon.png"

export default function Entry(prop) {
    return (
        <article className="journal-entry" aria-labelledby={`entry-${prop.country}-${prop.title}-${prop.id}`}>
            <div className="img-container">
                <img 
                    className="country-img" 
                    src={prop.img.src} 
                    alt={prop.img.alt}
                    role="img"
                    aria-describedby={`${prop.alt}`}
                />
            </div>   

            <div className="country-info">
                <section className="location">
                    <img 
                        className="map-marker" 
                        src={mapMarkerIcon} 
                        alt="map marker logo"
                        aria-hidden="true"                         
                    />
                    <span className="country-name">{prop.country}</span>
                    <a 
                        className="google-maps-link" 
                        href={prop.googleMapsLink}
                        target="_black"
                        rel="noopener noreferrer"
                        aria-label={`View ${prop.country} on Google Maps`}
                    >
                        View on Google Maps
                    </a>
                </section>

                <h2 className="city-name">{prop.title}</h2>

                <p className="trip-date">{prop.dates}</p>
                
                <p className="entry-text">{prop.text}</p>
            </div>
        </article>
    )
}