// Collapsible sections
var coll = document.getElementsByClassName("collapsible");
for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}

// Function to initialize the signature count from local storage
function initializeSignatureCount() {
    // Get the count from local storage, or default to 0 if not found
    let count = localStorage.getItem('signatureCount') || 0;
    document.getElementById('signature-count').innerText = count;
}

// Function to handle form submission
document.getElementById('petition-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Increment the signature count
    let countElement = document.getElementById('signature-count');
    let currentCount = parseInt(countElement.innerText);
    currentCount += 1;

    // Update the displayed count
    countElement.innerText = currentCount;

    // Store the updated count in local storage
    localStorage.setItem('signatureCount', currentCount);

    // Clear the form fields
    this.reset();
    
    // Optionally, display a success message
    alert('Thank you for signing the petition!');
});

// Initialize the signature count when the page loads
window.onload = initializeSignatureCount;
