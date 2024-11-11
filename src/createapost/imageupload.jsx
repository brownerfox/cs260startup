import React from 'react';

function ImageUpload({ onImageChange }) {
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        onImageChange(file);
    };

    return (
        <div>
            <label>
                Upload Image:
                <input type="file" accept="image/*" onChange={handleImageChange} />
            </label>
        </div>
    );
}

export default ImageUpload;
