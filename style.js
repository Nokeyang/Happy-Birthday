function selectOption(option) {
    if (option === 'yes') {
        // Stop music if playing
        if (player && player.stopVideo) {
            player.stopVideo();
        }

        flashRainbowColors(function() {
            document.getElementById('question').style.display = 'none';
            document.getElementById('options').style.display = 'none';
            displayCatHeart();

            // Show bouquet at the end
            document.getElementById('bouquet').style.display = 'flex';
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

function flashRainbowColors(callback) {
    var colors = ['#ff0000','#ff7f00','#ffff00','#00ff00','#0000ff','#4b0082','#9400d3'];
    var i=0;
    var interval=setInterval(function(){
        document.body.style.backgroundColor = colors[i];
        i=(i+1)%colors.length;
    },200);
    setTimeout(function(){
        clearInterval(interval);
        document.body.style.backgroundColor='';
        if(callback) callback();
    },2000);
}

function displayCat() {
    var imageContainer = document.getElementById('image-container');
    var catImage = new Image();
    catImage.src = 'cat.gif';
    catImage.alt = 'Cat';
    catImage.onload=function(){ imageContainer.appendChild(catImage); };
}

function displayCatHeart() {
    var imageContainer = document.getElementById('image-container');
    imageContainer.innerHTML='';
    var catHeartImage = new Image();
    catHeartImage.src='cat-heart.gif';
    catHeartImage.alt='Cat Heart';
    catHeartImage.onload=function(){ imageContainer.appendChild(catHeartImage); };
}

displayCat();
