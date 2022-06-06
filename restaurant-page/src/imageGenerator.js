// Image Generator
function addImage(imageName) {
    const newImage = new Image();
    newImage.src = imageName;

    return newImage;
}

export { addImage };