// Load the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let queue = ['F6OHq9BHt1k'];

//var input = prompt("Input YouTube URL: ");
//var url = input.substring(32, 43);

// Create the YouTube player

var player;
function onYouTubeIframeAPIReady() {
     player = new YT.Player('player', {
          height: '390',
          width: '640',
          videoId: 'GY3HJejPz1o',
          playerVars: {
            'playsinline': 1
          },
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
     });
}

//this function is used to save the inputs
function saveInput(){
     var userInput = document.getElementById('inputBox').value;

     console.log("Saved URL" + userInput);
     var url = userInput.substring(32, 43);
     console.log("Video ID: " + url);
     queue.push(url);     

}

// The API will call this function when the video player is ready.
function onPlayerReady(event) {
    // Bind play and pause button
    document.getElementById('playButton').addEventListener('click', function() {
        player.playVideo();
    });

    document.getElementById('pauseButton').addEventListener('click', function() {
        player.pauseVideo();
    });
     document.getElementById('prevButton').addEventListener('click', function(){
          player.previousVideo();
     });


    document.getElementById('nextButton').addEventListener('click', function() {
        playNextVideo();
    });
}

// Play the next video when the current one ends
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.ENDED) {
        playNextVideo();
    }
}

// Function to load and play the next video in the queue
function playNextVideo() {
    // Logic to get the next video ID from your queue
    var nextVideoId = getNextVideoIdFromQueue();

    if (nextVideoId) {
        player.loadVideoById(nextVideoId);
    }
}

var queueNum = 0;

function getNextVideoIdFromQueue() {
    // Check if there is a next video in the queue
    if (queueNum < queue.length) {
        // Get the next video ID
        var nextVideoId = queue[queueNum];

        // Increment the queue number for the next call
        queueNum++;

        // Log for debugging
        console.log("Queue Number: " + queueNum + " Video ID: " + nextVideoId);

        // Return the next video ID
        return nextVideoId;
    } else {
        // Reset the queue number or handle the end of the queue scenario
        queueNum = 0; // Or any other logic you wish to implement
        return null; // Indicates no more videos in the queue
    }
}



// Example function to get the next video ID from your queue
// function getNextVideoIdFromQueue() {
//     // Implement your logic to retrieve the next video ID from the queue
//     // For now, we'll return a placeholder value
//     //return 'nextVideoId'; is this
//      if(queueNum == 0){
//           return queue[0];
//      }
//      else{
//           queueNum++;
//           console.log("Queue Number: " + queueNum + " Video ID: " + queue[queueNum]);
//           return queue[queueNum];
          
//      }

//      //return 'F6OHq9BHt1k'; // Replace with actual logic
// }

// You can add more functions to manage the queue, like adding or removing videos

