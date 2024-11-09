import React, { useState } from 'react';

export function BaitSelection() {
    const [baitType, setBaitType] = useState('');
    const [baitColor, setBaitColor] = useState('');

    return (
        <div>
            <label htmlFor="bait-type">Type of Bait:</label>
            <select id="bait-type" name="bait-type" value={baitType} onChange={(e) => setBaitType(e.target.value)} required>
                <option value="">Select Bait Type</option>
                <option value="live-bait">Live Bait</option>
                <option value="artificial-bait">Artificial Bait</option>
                <option value="fly-bait">Fly Bait</option>
            </select>

            <label htmlFor="bait-color">Color of Bait:</label>
            <select id="bait-color" name="bait-color" value={baitColor} onChange={(e) => setBaitColor(e.target.value)} required>
                <option value="">Select Bait Color</option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
                <option value="yellow">Yellow</option>
                <option value="black">Black</option>
                <option value="white">White</option>
                <option value="silver">Silver</option>
                <option value="gold">Gold</option>
            </select>
        </div>
    );
}

export default BaitSelection;
