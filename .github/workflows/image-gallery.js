// get the ids of the imgs and group together into an array.

var idArray = [
   "img1", 
   "img2", 
   "img3", 
   "img4", 
   "img5" 
 ];
 
 // match every img id from the array with the specific img source.

 // the For loop will run through every img in the array until the img source is captured, then it ends.

 // the index begins at 0 to start at the beginning of the array.

 // the loop runs while this condition is true: the index counter is a number less than the number of items in the array.

 // will add 1 to the index counter for each complete iteration of the loop.

 for (var i = 0; i < idArray.length; i++) {
   var imgSrc = document.getElementById(idArray[i]).getAttribute("src"); 
   
   // create a new var that will look in the HTML document for the element that is id'd by the array and it saves the value contained inside the img source.

   console.log("The source of " + idArray[i] + " is " + imgSrc); 

   // log each match between an img id and its img source. 
 };
 
 
 // find a placeholder img for the large gallery window.

 var placeholderImgSrc = document.getElementById(idArray[0]).getAttribute("src"); 
 
 // create a new var to search the HTML document for the first item in the array, an element with the id of "img1", and saves its source value.

 console.log("The source of placeholderImgSrc is " + placeholderImgSrc);

// log what the placeholder img source is.
 
 // sssign the placeholder img to the large preview.

 document.getElementById("largeImage").setAttribute("src", placeholderImgSrc); 
 
 // search the HTML document for the element with the id "largeImage" and change the attribute "src" to the new value stored in the var "placeholderImgSrc", which is the img path to "Img1".
 
 var largeImgSrc = document.getElementById("largeImage").getAttribute("src");
 console.log("The source of largeImgSrc is " + largeImgSrc); 
 
 // log the newly added img source of the largeImage gallery window.
 
 
 // swap img in the large gallery window to the img of the thumbnail over which the user is currently hovering.

 // this function is invoked by a mouse event, "onmouseover," as specified inline for each img in the HTML document.
 
 function swapImage(hoveredThumb) {
   console.log("Begnning image swap..."); 
   
   // log when each img swap begins.

   console.log("...The mouse hovered over " + hoveredThumb.getAttribute("src"));
   
   // log the img source of the hovered thumbnail.

   var newImgSrc = hoveredThumb.getAttribute("src"); 
   
   // save the img source of the hovered thumbnail in a new var.

   console.log("...Setting newImgSrc as " + newImgSrc); 
   
   // log the new img source of the large gallery window img.
   
   largeImgSrc = document.getElementById("largeImage").getAttribute("src"); 
   
   // save the old img source of the large gallery window img.

   console.log("...Reporting largeImgSrc is " + largeImgSrc); 
   
   // log what the old img source of the large gallery window img was before the imgs swap.

   if (largeImgSrc != newImgSrc) { 
      
      // perform these tasks to swap imgs when the large image source isn't equal to the new img source.

     console.log("...Replacing old largeImgSrc " + largeImgSrc + " with new newImgSrc " + newImgSrc); 
     
     // log what img source is getting swapped.

     largeImgSrc === newImgSrc; 
     
     // set the value of the large img source to the new img source from the hovered thumbnail.

     document.getElementById("largeImage").setAttribute("src", newImgSrc); 
     
     // implement the actual swap.

     console.log("...Now largeImgSrc is " + largeImgSrc); 
     
     // log confirmation that the large img source now matches the hovered thumbnail img source.

   } else {
     console.log("largeImgSrc didn't change."); 
     
     // log when a swap is not needed because the img source of the large img already matches the img source of the hovererd thumbnail.

   };
   console.log("Image swap complete!"); 
   
   // log when each img swap ends.

 };
 
 // listen for a mouseover on each img id from the array, and on mouseover, start an img swap.

 // this For loop runs through each img in the array until all have obtained an img source, then stops.

 // the index starts at 0 to start at the beginning of the array.

 // the loop runs while this condition is true: the index counter is a number less than the number of items in the array.

 // set to add 1 to the index counter for each complete iteration of the loop.

 // run the function "swapThis" on the current img element with the mouseover.

 for (var i = 0; i < idArray.length; i++) {
   document.getElementById(idArray[i]).addEventListener("mouseover", function() {
     swapImage(this)
   }, false);
 };
 

 // listen for mouseovers on thumbnail imgs, and if mouseover is detected, update the caption.

 // search document for an img id.
 
 // add listener for the mouse event "onmouseover" (or hover), and run an unnamed function.

 // the unnamed function searches the HTML document for the elements id'd "caption," and replaces it with the specified text.

 document.getElementById("img1").addEventListener("mouseover", function() {
   document.getElementById("caption").innerHTML = "Traffic at Night in Tokyo, Japan.";
 }, false);
 document.getElementById("img2").addEventListener("mouseover", function() {
   document.getElementById("caption").innerHTML = "Seoul at Night";
 }, false);
 document.getElementById("img3").addEventListener("mouseover", function() {
   document.getElementById("caption").innerHTML = "Lagos in the Summer!";
 }, false);
 document.getElementById("img4").addEventListener("mouseover", function() {
   document.getElementById("caption").innerHTML = "Pedestrians Alongside Bridge in London.";
 }, false);
 document.getElementById("img5").addEventListener("mouseover", function() {
   document.getElementById("caption").innerHTML = "Beautiful Scenery of the Outer Banks in North Carolina";
 }, false);
 
 

 // removes borders from all thumbnail imgs listed in the array.
 
 // create a new function that instructs the web browser to add the "thumbB" CSS class to the thumbnails.

 // the index starts at 0 to start at the beginning of the array.

 // the loop runs while this condition is true: the index counter is a number less than the number of items in the array.

 // set to add 1 to the index counter for each complete iteration of the loop.

 // the className method inserts whatever CSS class is specified into the element, this function adds it and sets it to "thumbB.

 function removeBorder() {
   for (var i = 0; i < idArray.length; i++) {
     document.getElementById(idArray[i]).className = "thumbB"; 
     
     // find each item from the array in the HTML document and set its CSS class to "thumbB".

     var imageClass = document.getElementById(idArray[i]).getAttribute("class"); 

     // save the current CSS class of the thumbnail as a new var.

     console.log("The class of " + idArray[i] + " is " + imageClass); 
     
     // log confirmation that each thumbnail img received the "thumbB" class.
   };
 };
 
 // remove all thumbnail borders except thumbnail being clicked.

 // search the HTML document for each thumbnail img by its id.
 
 // listen for the mouse event "onclick" and run an unnamed function.

 // the unnamed function applies the "thumbS" CSS class only the thumbnail registering the mouse click.

 for (var i = 0; i < idArray.length; i++) {
   document.getElementById(idArray[i]).addEventListener("click", function() {
     removeBorder();
     this.className = "thumbS";
   }, false);
 };
 
 
 // create a new paragraph containing copyright information.

 var newCopyright = document.createElement("P"); 
 
 // create a new var and its element.

 newCopyright.appendChild(document.createTextNode("Copyright 2023  Ashelyn Montgomery")); 

 // add a text box to the newly created paragraph.

 newCopyright.style.textAlign = "center"; 
 
 // add CSS styling to center the new copyright textbox.

 newCopyright.style.color = "rgb(206, 242, 0)"; 
 
 document.body.appendChild(newCopyright); 
 
 // add and display the new copyright textbox to the end of the HTML document.
 