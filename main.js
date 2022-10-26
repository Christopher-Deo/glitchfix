class Glitch{
    constructor(){
      this.project = document.getElementById('projectNameInput').value;
      this.message = document.getElementById('errorMessageInput').value;
      this.description = document.getElementById('glitchDescriptionInput').value;
      this.severity = document.getElementById('glitchSeverityInput').value;
      this.assignedTo = document.getElementById('glitchAssignedToInput').value;
      this.id = id++
    }
addGlitch(){
    // pull in data from constructor
    // generate HTML for issue dynamically
    // add constructor data to issue card in glitch list div
}

updateGlitch(){
    // find item id
    // retrieve item data from storage
    // push data back to the form fields
    // check if id is null
    // update data on submit button
    // display updated info in original location in the list
}

deleteGlithc(){
    // grab the item id
    // identify the parent Node
    // parent.appendChild().remove() to delete item from DOM
}

markGlitchClosed(){
    // determine if checkbox is checked
    // if true, update status to closed
}

} //end of Glicth Class

// create new Glitch

// store data to local memory/mockAPI integration

// pull data from memory and display the glitch list on page load


//event listeners
    // submit button
    // edit icon/button
    //delete icon/button
    //checkbox for closing issue

// MockAPI integration instead of local storage????