export default function Entry({img, title, country, googleMapsLink, dates, text}) {
    return (
        <article className="journal-entry">
            <div className="img-container">
                <img className="country-img" src={img.src} alt={img.alt} />
            </div>   

            <div className="country-info">
                <section className="location">
                    <img className="map-marker" src="src\assets\Fill 219.png" alt="map marker logo" />
                    <span className="country-name">{country}</span>
                    <a className="google-maps-link" href={googleMapsLink}>View on Google Maps</a>
                </section>

                <h2 className="city-name">{title}</h2>

                <p className="trip-date">{dates}</p>
                
                <p className="entry-text">{text}</p>
            </div>
        </article>
    )
}