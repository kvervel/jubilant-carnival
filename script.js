var upImg, myCanvas;

function setup() {
  myCanvas = createCanvas(800, 800);

  function imgUploaded(f) {
      upImg = loadImage(f.data, imgCallback);
  }

  function imgCallback() {

    var imgWidth, imgHeight;
    var aspectRatio = upImg.width / upImg.height;
    var maxWidth = width;
    var maxHeight = height;

    //if image is smaller than max, display it as it is, if it's taller than max, make it max height and constrain proportions
    if (upImg.width <= maxWidth && upImg.height <= maxHeight) {
        imgWidth = upImg.width;
        imgHeight = upImg.height;
    } else if (upImg.height > maxHeight) {
        imgHeight = maxHeight;
        imgWidth = imgHeight * aspectRatio;
    }

    //if image is still too wide, make it max width and constrain proportions
    if (upImg.width > maxWidth) {
        imgHeight = imgWidth / aspectRatio;
    }

    console.log(imgWidth);
    console.log(imgHeight);
    image(upImg, 0, 0, imgWidth, imgHeight);
  }

  var uploadButton = createFileInput(imgUploaded);
  uploadButton.id("button");

  $("#button").css("display", "none");

  myCanvas.mouseClicked(function () {
    $("#button").click();
  });

  var tracker = new tracking.ObjectTracker('face');
  console.log(tracker);



  tracker.on('track', function(event) {
    event.data.forEach(function(rect) {
      window.plot(rect.x, rect.y, rect.width, rect.height);
    });
  });

  tracking.track(upImg, tracker);

}

function draw() {
}
