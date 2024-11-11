import React from 'react';

function LocationInfo({ onLocationChange }) {
    const handleLocationChange = (event) => {
        onLocationChange(event.target.value);
    };

    return (
        <div>
            <label>
                Location:
                <input type="text" onChange={handleLocationChange} placeholder="Enter location" />
            </label>
        </div>
    );
}

export default LocationInfo;