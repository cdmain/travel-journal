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
        />
      </div>   

      <div className="country-info">
        <section className="location">
          <img 
            className="map-marker" 
            src={mapMarkerIcon} 
            alt=""
            role="presentation"
          />
          <span className="country-name">{prop.country}</span>
          <a 
            className="google-maps-link" 
            href={prop.googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Link to view ${prop.country}, ${prop.title} on Google Maps`}
          >
            View on Google Maps
          </a>
        </section>

        <h2 className="city-name" id={`entry-title-${prop.id}`}>{prop.title}</h2>

        <p className="trip-date">{prop.dates}</p>
        
        <p 
          ref={textRef}
          className={`entry-text ${isExpanded ? "expanded-text" : "truncated-text"}`}
        >
          {prop.text}
        </p>
        
        {hasOverflow && (
          <button 
            className="toggle-button" 
            onClick={() => setIsExpanded(!isExpanded)}
            aria-label={isExpanded ? "Collapse text" : "Expand text"}
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        )}
      </div>
    </article>
  );
}
