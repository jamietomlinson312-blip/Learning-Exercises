
// Function to add a new image to the gallery

function newImage(){
    let imgURL = document.querySelector("#image").value; // Retrieve the URL from the input field
    if (imgURL){
        const gridElem = document.createElement('div');  // Create div to hold the image and button
        const newImg = document.createElement('img'); // New image element
        newImg.src = imgURL; // set the src attribute to the user inputted URL
        newImg.setAttribute("class", "mb-2 w-full border-1 shadow-md rounded-sm"); // tailwindCSS styling for the image
        const rmvBtn = document.createElement('button'); // Create new button
        rmvBtn.textContent = "remove image"; // Set button text
        rmvBtn.classList = document.querySelector("#img-btn").classList; // Set button styling to be the same as for the "add image" button
        rmvBtn.onclick = () => { // click property - using remove method to remove the element from the DOM
            gridElem.remove();
        }
       gridElem.appendChild(newImg); // Append both the image and remove button to the new div
       gridElem.appendChild(rmvBtn);
       const currentSection = document.querySelector("#container");
       currentSection.appendChild(gridElem); // Append the new div to the #container div
        imgURL = document.querySelector("#image").value = ""; // Reset the input field  
    } else {
        alert("Please enter an image URL");
    }
};

const addBtn = document.querySelector("#img-btn"); // Event listener for the add image button
addBtn.addEventListener('click', newImage);