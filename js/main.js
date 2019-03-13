var openFile = function(event) {
    var input = event.target;

    var reader = new FileReader();
    reader.onload = function(){
      var dataURL = reader.result;
	  var imageContainer=document.getElementById('image-container');
	  imageContainer.src=dataURL;
	  cutImageBlocks(imageContainer);
    };
		
    reader.readAsDataURL(input.files[0]);
};

widthOfOnePiece=480;
heightOfOnePiece=320;

var cutImageBlocks = function(imageContainer) {
	for(var i=1 ; i<=10; i++){
		for(var j=1; j<=10 ;j++){
			var canvas= document.createElement('canvas');
			canvas.width = 48;
			canvas.height = 32;
			var context = canvas.getContext('2d');
			context.drawImage(imageContainer, i * widthOfOnePiece, j * heightOfOnePiece, widthOfOnePiece, heightOfOnePiece, 0, 0, canvas.width, canvas.height);
			var anImageElement = document.createElement("IMG");
			anImageElement.src = canvas.toDataURL();
			anImageElement.className="image-output";
			document.getElementById("output").appendChild(anImageElement);
		}
	}
}