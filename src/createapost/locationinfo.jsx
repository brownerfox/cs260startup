import React, { useState } from 'react';

export function LocationInfo() {
    const [enableLocation, setEnableLocation] = useState(false);

    const handleCheckboxChange = () => {
        setEnableLocation(!enableLocation);
    };

    return (
        <div>
            <p><strong>Location:</strong> Deer Creek Reservoir <i>(provided by Geolocation API)</i></p>
            <label htmlFor="enable-location">
                <input type="checkbox" id="enable-location" name="enable-location" checked={enableLocation} onChange={handleCheckboxChange} />
                Enable Location on Post
            </label>
        </div>
    );
}

export default LocationInfo;
