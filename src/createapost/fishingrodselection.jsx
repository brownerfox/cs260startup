import React from 'react';

function FishingRodSelection({ onRodTypeChange, onRodBrandChange }) {
    const handleRodTypeChange = (event) => {
        onRodTypeChange(event.target.value);
    };

    const handleRodBrandChange = (event) => {
        onRodBrandChange(event.target.value);
    };

    return (
        <div>
            <label>
                Rod Type:
                <input type="text" onChange={handleRodTypeChange} placeholder="Enter rod type" />
            </label>
            <br />
            <label>
                Rod Brand:
                <input type="text" onChange={handleRodBrandChange} placeholder="Enter rod brand" />
            </label>
        </div>
    );
}

export default FishingRodSelection;
