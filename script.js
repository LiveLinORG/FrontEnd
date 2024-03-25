const imageSources = [
    "src/1.jpeg",
    "src/2.jpeg",
    "src/3.jpeg",
    "src/4.jpeg",
    "src/5.jpeg",
    "src/6.jpeg"
];

let currentIndex = 0;

function rotateImages() {
    const images = document.querySelectorAll('.imagenlanding > div');
    images.forEach((imageDiv, index) => {
        const nextIndex = (currentIndex + index) % imageSources.length;
        const img = document.createElement('img');
        img.src = imageSources[nextIndex];
        img.alt = `imagen${index + 1}`;
        imageDiv.innerHTML = ''; 
        imageDiv.appendChild(img);
        if (index === 0) {
            imageDiv.classList.remove('transparent-left', 'center', 'transparent-right');
            imageDiv.classList.add('transparent-left');
        } else if (index === 1) {
            imageDiv.classList.remove('transparent-left', 'center', 'transparent-right');
            imageDiv.classList.add('center');
        } else {
            imageDiv.classList.remove('transparent-left', 'center', 'transparent-right');
            imageDiv.classList.add('transparent-right');
        }
        img.classList.add('rotate-in');

    });
    currentIndex = (currentIndex + 1) % imageSources.length;
}
setTimeout(rotateImages, 0); 
setInterval(rotateImages, 3000);
