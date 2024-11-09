import React from 'react';
import ImageUpload from './imageupload';
import LocationInfo from './locationinfo';
import FishingRodSelection from './fishingrodselection';
import BaitSelection from './baitselection';
import { collectPostData } from './posthelpers.jsx';

export function CreatePost() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const postData = collectPostData();
        console.log(postData);  // Here you’d handle the submission, e.g., send it to an API
    };

    return (
        <div className="create-post">
            <h1>Create a New Post</h1>
            <hr />
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <ImageUpload />
                <LocationInfo />
                <FishingRodSelection />
                <BaitSelection />
                <button type="submit">Create Post</button>
            </form>
        </div>
    );
}

export default CreatePost;
