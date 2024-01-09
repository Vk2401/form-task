document.addEventListener('DOMContentLoaded', () => {
    // Regex to check if the input is a valid YouTube URL
    const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com\/(.*\/)?|youtu\.be\/)([^\?&"'>]+)/;

    const form = document.querySelector('form');
    const input = document.querySelector('input');
    const thumbnailImg = document.getElementById('thumbnailImg');
    const errMess = document.getElementById('errMess');
    const errMessTxt = document.getElementById('errMessTxt');
    const downloadBtn = document.getElementById('downloadBtn');
    const vdoPrev = document.getElementById('vdoPrev');


    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const url = input.value.trim();

        if (url && youtubeRegex.test(url)) {
            // Extract video ID from the YouTube URL using URLSearchParams
            const urlParams = new URLSearchParams(new URL(url).search);
            const videoId = urlParams.get('v');

            if (videoId) {
                // Set the thumbnail image source using the extracted video ID
                const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
                thumbnailImg.src = thumbnailUrl;

                // Update the download button
                downloadBtn.href = thumbnailUrl;
                downloadBtn.download = `thumbnail_${videoId}.jpg`;

                // Hide the error message
                errMess.style.display = 'none';
                vdoPrev.style.display = 'block';
            } else {
                // Show error message for missing video ID in the URL
                errMess.style.display = 'block';
                vdoPrev.style.display = 'none';
                errMessTxt.innerHTML = `🔴 Invalid YouTube URL. Missing video ID.`;
            }
        } else {
            // Show error message for invalid URL
            errMess.style.display = 'block';
            vdoPrev.style.display = 'none';
            errMessTxt.innerHTML = `🔴 Please enter a valid YouTube URL`;
        }
    });
});
