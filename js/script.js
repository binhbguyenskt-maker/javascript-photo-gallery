// Runs when a thumbnail is hovered over (or focused with the keyboard).
function upDate(previewPic) {
    console.log('Mouse over or focus on image');
    console.log('alt:', previewPic.alt);
    console.log('src:', previewPic.src);

    const preview = document.getElementById('image');
    preview.textContent = previewPic.alt;
    preview.style.backgroundImage = "url('" + previewPic.src + "')";
}

// Runs when the pointer leaves a thumbnail (or keyboard focus leaves it).
function undo() {
    const preview = document.getElementById('image');
    preview.style.backgroundImage = "url('')";
    preview.textContent = 'Hover over an image below to display here.';
}
