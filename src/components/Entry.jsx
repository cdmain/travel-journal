import React, { useState, useRef, useEffect } from "react";
import mapMarkerIcon from "/src/assets/map-marker-icon.png";

export default function Entry(prop) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hasOverflow, setHasOverflow] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current && !isExpanded) {
      const isOverflowing = textRef.current.scrollHeight > textRef.current.clientHeight;
      setHasOverflow(isOverflowing);
    }
  }, [prop.text, isExpanded]);

  return (
    <article className="journal-entry" aria-labelledby={`entry-title-${prop.id}`}>
      <div className="img-container">
        <img 
          className="country-img" 
          src={prop.img.src} 
          alt={prop.img.alt}
          role="img"
          aria-describedby={`desc-${prop.id}`}
        />
        <p id={`desc-${prop.id}`} className="sr-only">{prop.img.alt}</p>
      </div>   

      <div className="country-info">
        <section className="location">
          <img 
            className="map-marker" 
            src={mapMarkerIcon} 
            alt="map marker logo"
            role="presentation"                         
          />
          <span className="country-name">{prop.country}</span>
          <a 
            className="google-maps-link" 
            href={prop.googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${prop.country} on Google Maps`}
          >
            View on Google Maps
          </a>
        </section>

        <h2 className="city-name" id={`entry-title-${prop.id}`}>{prop.title}</h2>

        <p className="trip-date">{prop.dates}</p>
        
        {/* Attach the ref to the paragraph element */}
        <p 
          ref={textRef}
          className={`entry-text ${isExpanded ? "expanded-text" : "truncated-text"}`}
        >
          {prop.text}
        </p>
        
        {/* Show toggle button only if there's an overflow when truncated */}
        {hasOverflow && (
          <button 
            className="toggle-button" 
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        )}
      </div>
    </article>
  );
}
