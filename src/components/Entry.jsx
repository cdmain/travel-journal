export default function Entry(prop) {
    return (
        <article className="journal-entry">
            <div className="img-container">
                <img className="country-img" src={prop.entry.img.src} alt={prop.entry.img.alt} />
            </div>   

            <div className="country-info">
                <section className="location">
                    <img className="map-marker" src="src\assets\Fill 219.png" alt="map marker logo" />
                    <span className="country-name">{prop.entry.country}</span>
                    <a className="google-maps-link" href={prop.entry.googleMapsLink}>View on Google Maps</a>
                </section>

                <h2 className="city-name">{prop.entry.title}</h2>

                <p className="trip-date">{prop.entry.dates}</p>
                
                <p className="entry-text">{prop.entry.text}</p>
            </div>
        </article>
    )
}