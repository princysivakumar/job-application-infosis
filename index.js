$(document).ready(function () {
    // Add Row Button Click Event
    $("#addRowBtn").on("click", function () {
        // Add a new row to the table
        var newRow = '<tr>\
                        <td contenteditable="true"></td>\
                        <td contenteditable="true"></td>\
                        <td>\
                            <button type="button" class="btn btn-sm btn-danger delete-row">\
                                <i class="bi bi-trash"></i>\
                            </button>\
                            <button type="button" class="btn btn-sm btn-primary edit-row">\
                                <i class="bi bi-pencil"></i>\
                            </button>\
                        </td>\
                    </tr>';
        $("#educationalTable tbody").append(newRow);
    });

    // Delete Row Button Click Event
    $("#educationalTable").on("click", ".delete-row", function () {
        // Delete the row
        $(this).closest("tr").remove();
    });

    // Edit Row Button Click Event
    $("#educationalTable").on("click", ".edit-row", function () {
        // Add your edit row logic here
        var row = $(this).closest("tr");
        var educationalValue = row.find("td:eq(0)").text();
        var fieldOfEducationValue = row.find("td:eq(1)").text();

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
    var chipText = prompt("Enter chip text:");
    if (chipText !== null && chipText !== "") {
        // Create a new chip
        var newChip = '<div class="chip">' +
            chipText +
            '<span class="chip-close" onclick="removeChip(this)">×</span>' +
            '</div>';
        $("#chipsContainer").append(newChip);
    }
}

function showMore() {
    alert("View More clicked!"); // Replace this with your logic
}


// Example function for handling Submit button click
function submitForm() {
    alert("Form submitted!"); // Replace this with your logic
}

// Example function for handling Cancel button click
function cancelAction() {
    alert("Action canceled!"); // Replace this with your logic
}

