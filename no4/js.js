document.addEventListener('DOMContentLoaded', function() {
    const imageSelect = document.getElementById('image-select');
    const opacitySelect = document.getElementById('opacity-select');
    const displayImage = document.getElementById('display-image');

    imageSelect.addEventListener('change', function() {
        displayImage.src = imageSelect.value;
    });

    opacitySelect.addEventListener('change', function() {
        displayImage.style.opacity = opacitySelect.value;
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const imageSelect2 = document.getElementById('image-select2');
    const opacitySelect2 = document.getElementById('opacity-select2');
    const displayImage2 = document.getElementById('display-image2');

    imageSelect2.addEventListener('change', function() {
        displayImage2.src = imageSelect2.value;
    });

    opacitySelect2.addEventListener('change', function() {
        displayImage2.style.opacity = opacitySelect2.value;
    });
});
