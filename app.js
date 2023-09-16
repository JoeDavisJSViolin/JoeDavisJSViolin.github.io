const container = document.getElementById("bubbles2");
const buttonOne = document.getElementById("expand-header");
const buttonTwo = document.getElementById("expand-header-two");

function photoExpand() {
    container.classList.toggle("unhide")
    buttonOne.classList.toggle("hide")
    buttonTwo.classList.toggle("unhide")
}

function collapseFunc() {
    container.classList.toggle("unhide");
    buttonOne.classList.toggle("hide")
    buttonTwo.classList.toggle("unhide")
}

document.getElementById('collapse').addEventListener('click', function() {
    var element = document.getElementById('expand-header');
    element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
});




/*
const button = document.getElementById('drop-down');
const secondDiv = document.getElementById('expand-header-two');

button.addEventListener('click', moveButton);

function moveButton() {
    secondDiv.appendChild(button)
}
 */


/* basically: will need a button to submit the data on HTML page. Look for something in JS that can find the data of the new img or
video src, then apply it to the correct container permanently. Hopefully this can be done without SQL, a server or PHP, we will see.

declare variables for each container, possibly create an array and make each bubble changeable by looping through the array on function 
with foreaxch =>

create a function when click the submit button. this function:
 finds the url/path of the new image.
 stores this path as data
 uploads it to github file path?
 finds the container to insert the new image or video path.
 deletes the old content
 inserts the new path into the HTML src slot
 changes the HTML page

 'when click "upload image" it stores the value of the image selected as a variable...? then it 

Look into:
-image uploader HTML
-uploading data inserted on one HTML page to another
-Possibly look into SQL and hosting a local server environment for testing.
-


Things Jake will have to know/have access to/things to keep in mind:

-Name all the images consistently so Jake can change them easily.
-Make sure videos are locally downloaded and stored.
-Github backend to upload files to the folder
-Make a page that is a tool that all he has to do is press a button and it does the work for him, or better yet, name all the image files
the same thing so all he has to do is upload the new file, and rename it to the same thing as the old file. No need for fancy JS.


https://www.youtube.com/watch?v=EaBSeNSc-2c&t=1165s
*/

