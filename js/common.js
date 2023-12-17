function openSignUp() {
    document.getElementById("signupOverlay").style.display = "block";
}

function closeSignUp() {
    document.getElementById("signupOverlay").style.display = "none";
}

function openSignIn() {
    document.getElementById("signinOverlay").style.display = "block";
}

function closeSignIn() {
    document.getElementById("signinOverlay").style.display = "none";
}


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("signupForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission
        // Get form data and send it to postslist.html (you can use fetch or any other method here)
        let formData = new FormData(this);
        sendDataToServer(formData);

        // Reset the form after submission
        this.reset();
    });

    document.getElementById("signInForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission
        // Get form data and send it to postslist.html (you can use fetch or any other method here)
        let formData = new FormData(this);
        sendDataToServer(formData);

        // Reset the form after submission
        this.reset();
    });

    document.getElementById("postForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission
        // Get form data and send it to postslist.html (you can use fetch or any other method here)
        let formData = new FormData(this);
        sendDataToServer(formData);

        // Reset the form after submission
        this.reset();
    });
});

function sendDataToServer(formData) {
    // Use fetch or other methods to send data to postslist.html
    // Example using fetch:
    fetch('postslist.html', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            // Handle response as needed
            console.log('Data sent successfully!');
        })
        .catch(error => {
            // Handle errors
            console.error('Error sending data:', error);
        });
}