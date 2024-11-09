export function collectPostData() {
    const image = document.getElementById('post-image').files[0];
    const enableLocation = document.getElementById('enable-location').checked;
    const rodType = document.getElementById('fishing-rod-reel').value;
    const rodBrand = document.getElementById('fishing-rod-brand').value;
    const baitType = document.getElementById('bait-type').value;
    const baitColor = document.getElementById('bait-color').value;

    return {
        image,
        enableLocation,
        rodType,
        rodBrand,
        baitType,
        baitColor,
    };
}
