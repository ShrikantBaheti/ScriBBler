function openCreatePost() {
    document.getElementById("createPostOverlay").style.display = "block";
}

function closeCreatePost() {
    document.getElementById("createPostOverlay").style.display = "none";
}
// Function to handle form submission for creating a post
const postForm = document.getElementById('postForm');

postForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const title = document.getElementById('postTitle').value;
    const content = document.getElementById('postContent').value;

    // Create unique keys for each form entry
    const titleKey = `postTitle_${new Date().getTime()}`;
    const contentKey = `postContent_${new Date().getTime()}`;

    // Store form data in sessionStorage
    sessionStorage.setItem(titleKey, title);
    sessionStorage.setItem(contentKey, content);

    // Reset the form
    postForm.reset();

    // Redirect to postslist.html or perform any other necessary actions
    window.location.href = 'html/postslist.html';
});