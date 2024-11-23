import React, { useState } from 'react';
import ImageUpload from './imageupload';
import LocationInfo from './locationinfo';
import FishingRodSelection from './fishingrodselection';
import BaitSelection from './baitselection';
import './createapost.css';

export function CreatePost({ onAddPost }) {
    const [imageUrl, setImage] = useState(null);
    const [location, setLocation] = useState('');
    const [rodType, setRodType] = useState('');
    const [rodBrand, setRodBrand] = useState('');
    const [baitType, setBaitType] = useState('');
    const [baitColor, setBaitColor] = useState('');
    const [caption, setCaption] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const newPost = { imageUrl, location, rodType, rodBrand, baitType, baitColor, caption, time: new Date().toLocaleString() };
        
        try {
            const response = await fetch('/api/post', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newPost),
            });
    
            if (response.ok) {
                const savedPost = await response.json();
                onAddPost(savedPost);
            }
        } catch (error) {
            console.error("Error creating post:", error);
        }

        setImage(null);
        setLocation('');
        setRodType('');
        setRodBrand('');
        setBaitType('');
        setBaitColor('');
        setCaption('');
    };

    return (
        <div className="create-post">
            <h1>Create a New Post</h1>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <ImageUpload onImageChange={setImage} />
                <LocationInfo onLocationChange={setLocation} />
                <FishingRodSelection onRodTypeChange={setRodType} onRodBrandChange={setRodBrand} />
                <BaitSelection onBaitTypeChange={setBaitType} onBaitColorChange={setBaitColor} />
                <label>
                    Caption:
                    <textarea value={caption} onChange={(e) => setCaption(e.target.value)} required />
                </label>
                <button type="submit">Create Post</button>
            </form>
        </div>
    );
}

export default CreatePost;
