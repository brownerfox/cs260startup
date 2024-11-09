import React, { useState } from 'react';

export function FishingRodSelection() {
    const [rodType, setRodType] = useState('');
    const [rodBrand, setRodBrand] = useState('');

    return (
        <div>
            <label htmlFor="fishing-rod-reel">Type of Fishing Rod Reel:</label>
            <select id="fishing-rod-reel" name="fishing-rod-reel" value={rodType} onChange={(e) => setRodType(e.target.value)} required>
                <option value="">Select Reel Type</option>
                <option value="spinning">Spinning Reel</option>
                <option value="baitcasting">Baitcasting Reel</option>
                <option value="fly">Fly Reel</option>
            </select>

            <label htmlFor="fishing-rod-brand">Fishing Rod Brand:</label>
            <input type="text" id="fishing-rod-brand" name="fishing-rod-brand" value={rodBrand} onChange={(e) => setRodBrand(e.target.value)} placeholder="Enter brand name" required />
        </div>
    );
}

export default FishingRodSelection;
