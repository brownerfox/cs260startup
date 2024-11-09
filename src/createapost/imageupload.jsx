import React, { useState } from 'react';

export function ImageUpload() {
    const [image, setImage] = useState(null);

    const handleImageChange = (event) => {
        setImage(event.target.files[0]);
    };

    return (
        <div>
            <label htmlFor="post-image">Upload an Image:</label>
            <input type="file" id="post-image" name="post-image" accept="image/*" onChange={handleImageChange} required />
        </div>
    );
}

export default ImageUpload;
