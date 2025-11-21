// ----------------------------
// Handle Yes/No button clicks
// ----------------------------
function selectOption(option) {
    if (option === 'yes') {
        flashRainbowColors(function() {
            document.getElementById('question').style.display = 'none'; // Hide the question
            document.getElementById('options').style.display = 'none';  // Hide buttons
            displayCatHeart();                                         // Show cat-heart GIF
            document.getElementById('bouquet').style.display = 'flex'; // Show bouquet
        });
    } else if (option === 'no') {
        document.getElementById('no-button').innerText = 'You sure?';
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        yesButton.style.fontSize = parseFloat(currentFontSize) * 2 + 'px';
    } else {
        alert('Invalid option!');
    }
}

// ----------------------------
// Rainbow flash function
// ----------------------------
function flashRainbowColors(callback) {
    var colors = ['#ff0000','#ff7f00','#ffff00','#00ff00','#0000ff','#4b0082','#9400d3'];
    var i = 0;
    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200);

    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = '';
        if (callback) callback();
    }, 2000);
}

// ----------------------------
// Display initial cat.gif
// ----------------------------
function displayCat() {
    var imageContainer = document.getElementById('image-container');
    var catImage = new Image();
    catImage.src = 'cat.gif';
    catImage.alt = 'Cat';
    catImage.onload = function() {
        imageContainer.appendChild(catImage);
    };
}

// ----------------------------
// Display cat-heart.gif
// ----------------------------
function displayCatHeart() {
    var imageContainer = document.getElementById('image-container');
    imageContainer.innerHTML = ''; // remove previous cat
    var catHeartImage = new Image();
    catHeartImage.src = 'cat-heart.gif';
    catHeartImage.alt = 'Cat Heart';
    catHeartImage.onload = function() {
        imageContainer.appendChild(catHeartImage);
    };
}

// ----------------------------
// YouTube Music Player
// ----------------------------
var player;

// Called automatically by YouTube API when ready
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        videoId: 'Cj0Tzu7duAE', // Replace with your video ID
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    // Nothing needed here; will play via button
}

// Function to play music
function playMusic() {
    if (!player) {
        alert("Player is not ready yet. Try again in a moment!");
        return;
    }
    player.playVideo();
    player.unMute();
}

// ----------------------------
// Initialize page
// ----------------------------
displayCat();
