import React from 'react';

function ImageUpload({ onImageChange }) {
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        let imageURL = URL.createObjectURL(file);
        onImageChange(imageURL);
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
