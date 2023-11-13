$(document).ready(function () {
    // Add Row Button Click Event
    $("#addRowBtn").on("click", function () { 
        // Add a new row to the table 
        const newRow = '<tr class="tr-hover">\
        <td contenteditable="true" style=" font-size: 14px;">Masters</td>\
        <td contenteditable="true" style=" font-size: 14px;">Computer Science</td>\
        <td class=" d-flex">\ <div class="edit-row ">\
        <img src="./images/icon-edit.png" alt="edit icon">\
        </div>\ <div class=" delete-row pl-3">\
        <img src="./images/icon-trash.png" alt="delete icon">\
        </div>\
        </td>\
        </tr>';
         $("#educationalTable tbody").append(newRow); });

    // Delete Row Button Click Event
    $("#educationalTable").on("click", ".delete-row", function () {
        // Delete the row
        $(this).closest("tr").remove();
    });

    // Edit Row Button Click Event
    $("#educationalTable").on("click", ".edit-row", function () {
        // Add your edit row logic here
        const row = $(this).closest("tr");
        const educationalValue = row.find("td:eq(0)").text();
        const fieldOfEducationValue = row.find("td:eq(1)").text();

        // You can use these values for editing
        console.log("Edit button clicked for Educational: " + educationalValue + ", Field of Education: " + fieldOfEducationValue);
    });
});



$(document).ready(function () {
    // Toggle Button Change Event
    $("#channelToggle").change(function () {
        if ($(this).prop("checked")) {
            // Toggle is active, enable close buttons
            $(".chip-close").show();
        } else {
            // Toggle is inactive, hide close buttons
            $(".chip-close").hide();
        }
    });
});

// Function to remove a chip
function removeChip(closeButton) {
    if ($("#channelToggle").prop("checked")) {
        // Toggle is active, remove the chip
        $(closeButton).parent().remove();
    }
}

// Function to add a new chip
function addChip() {
    const chipText = prompt("Enter chip text:");
    if (chipText !== null && chipText !== "") {
        // Create a new chip
        const newChip = '<div class="chip">' +
            chipText +
            '<img class="chip-close"  onclick="removeChip(this)" src="../job-application-infosis/images/icon-close.png" alt=""></img>' +
            '</div>';
        $("#chipsContainer").append(newChip);

    }
}

function showMore() {
    alert("View More clicked!"); // Replace this with your logic
}


// Example function for handling Submit button click
function submitForm() {
      // Create a JavaScript object with form values
      const formData = {
        jobTitle: document.getElementById("jobTitle").value,
        email: document.getElementById("email").value,
        requestDate: document.getElementById("requestDate").value,
        requestTime: document.getElementById("requestTime").value,
        location: document.getElementById("location").value,
        quarter: document.getElementById("quarter").value,
        primarySkills: document.getElementById("primarySkills").value
    };

    // Convert the object to JSON
    var jsonData = JSON.stringify(formData);
    // Log or send the JSON data as needed
    console.log(jsonData);
    alert("Form submitted!"); // Replace this with your logic
   
}

// Example function for handling Cancel button click
function cancelAction() {
    alert("Action canceled!"); // Replace this with your logic
}


function validateJobDetailsForm() {
    const jobTitle = document.getElementById("jobTitle").value;
    const email = document.getElementById("email").value;
    const requestDate = document.getElementById("requestDate").value;
    const requestTime = document.getElementById("requestTime").value;
    const location = document.getElementById("location").value;
    const quarter = document.getElementById("quarter").value;
    const primarySkills = document.getElementById("primarySkills").value;

    // Simple validation, you can add more complex validation as needed
    if (jobTitle.trim() === "" || email.trim() === "" || requestDate.trim() === "" ||
        requestTime.trim() === "" || location.trim() === "" || quarter.trim() === "" || primarySkills.trim() === "") {
        document.getElementById("jobDetailsErrorMessage").innerText = "All fields are required!";
        return false;
    }
    
    submitForm();
   

}

function toggleEdit() {
    var editableContent = document.getElementById('editableContent');
    
    // Toggle the contentEditable attribute
    var isEditable = editableContent.contentEditable === 'true';
    editableContent.contentEditable = isEditable ? 'false' : 'true';
    
    // You can also add styles or perform other actions based on the edit state
    if (isEditable) {
        // Add styles when in edit mode
        editableContent.style.backgroundColor = '#D3D3D3';
    } else {
        // Remove styles when not in edit mode
        editableContent.style.backgroundColor = 'white';
    }
}

