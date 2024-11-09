// Initialize an array to store signatures
let signatures = [];

// Function to update the signature count display
function updateSignatureCount() {
    const signatureCountElement = document.getElementById('signature-count');
    signatureCountElement.textContent = signatures.length;
}

// Event listener for the petition form submission
document.getElementById('petition-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the input values
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const comments = this.querySelector('textarea').value;

    // Create a signature object
    const signature = {
        name: name,
        email: email,
        comments: comments
    };

    // Add the signature to the signatures array
    signatures.push(signature);

    // Update the signature count display
    updateSignatureCount();

    // Reset the form fields
    this.reset();
});