import React from 'react';

function BaitSelection({ onBaitTypeChange, onBaitColorChange }) {
    const handleBaitTypeChange = (event) => {
        onBaitTypeChange(event.target.value);
    };

    const handleBaitColorChange = (event) => {
        onBaitColorChange(event.target.value);
    };

    return (
        <div>
            <label>
                Bait Type:
                <input type="text" onChange={handleBaitTypeChange} placeholder="Enter bait type" />
            </label>
            <br />
            <label>
                Bait Color:
                <input type="text" onChange={handleBaitColorChange} placeholder="Enter bait color" />
            </label>
        </div>
    );
}

export default BaitSelection;