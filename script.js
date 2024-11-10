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

// Initialize the signature count
let signatureCount = localStorage.getItem('signatureCount') ? parseInt(localStorage.getItem('signatureCount')) : 0;
document.getElementById('signature-count').innerText = signatureCount;

// Handle form submission
document.getElementById('petition-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Increment the signature count
    signatureCount++;
    localStorage.setItem('signatureCount', signatureCount); // Store the updated count in localStorage
    document.getElementById('signature-count').innerText = signatureCount; // Update the displayed count

    // Optionally, you can reset the form after submission
    this.reset();
});
