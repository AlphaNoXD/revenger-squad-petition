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

// Form submission handling
document.getElementById("petition-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the current signature count
    let signatureCount = parseInt(document.getElementById("signature-count").innerText);
    
    // Increment the signature count
    signatureCount += 1;
    
    // Update the displayed signature count
    document.getElementById("signature-count").innerText = signatureCount;

    // Optionally, you can clear the form fields after submission
    this.reset();
});
