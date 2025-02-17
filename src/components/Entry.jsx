export default function Entry(prop) {
    return (
        <article className="journal-entry">
            <div className="img-container">
                <img className="country-img" src={prop.img.src} alt={prop.img.alt} />
            </div>   

            <div className="country-info">
                <section className="location">
                    <img className="map-marker" src="src\assets\Fill 219.png" alt="map marker logo" />
                    <span className="country-name">{prop.country}</span>
                    <a className="google-maps-link" href={prop.googleMapsLink}>View on Google Maps</a>
                </section>

                <h2 className="city-name">{prop.title}</h2>

                <p className="trip-date">{prop.dates}</p>
                
                <p className="entry-text">{prop.text}</p>
            </div>
        </article>
    )
}