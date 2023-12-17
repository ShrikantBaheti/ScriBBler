document.addEventListener('DOMContentLoaded', function() {
    const postDescription = sessionStorage.getItem('postDescription');
    const descriptionElement = document.getElementById('postDescription');

    if (postDescription) {
        descriptionElement.textContent = postDescription;
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const postTitle = sessionStorage.getItem('postTitle');
    const postContent = sessionStorage.getItem('postContent');

    document.getElementById('postTitle').textContent = postTitle;

    if (postContent) {
        document.querySelector('.s3 p').textContent = postContent;
    }
});

// Get the button and count elements
const likeButton = document.getElementById('likeButton');
const likeCount = document.getElementById('likeCount');

// Initial count value
let count = 1;

// Event listener for the button click
likeButton.addEventListener('click', function() {
    count++; // Increment the count
    likeCount.textContent = count === 1 ? count + ' person Likes This' : count + ' people Like This';
});
document.addEventListener('DOMContentLoaded', function() {
    // Retrieving the current like count from session storage or setting it to a default value
    let count = sessionStorage.getItem('likeCount');
    if (!count) {
        count = 1;
        sessionStorage.setItem('likeCount', count);
    }

    // Display the initial like count
    document.getElementById('likeCount').textContent = count === '1' ? count + ' person Likes This' : count + ' people Like This';

    const likeButton = document.getElementById('likeButton');

    // Event listener for the like button click
    likeButton.addEventListener('click', function() {
        count++;
        sessionStorage.setItem('likeCount', count);
        document.getElementById('likeCount').textContent = count === 1 ? count + ' person Likes This' : count + ' people Like This';
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const postTitle = sessionStorage.getItem('postTitle');

    if (postTitle) {
        document.getElementById('postTitle').textContent = postTitle;
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Like button functionality
    const likeButton = document.getElementById('likeButton');
    const likeCount = document.getElementById('likeCount');
    let count = 1;

    likeButton.addEventListener('click', function() {
        count++;
        likeCount.textContent = count === 1 ? count + ' person Likes This' : count + ' people Like This';
    });

    // Comment functionality
    const commentText = document.getElementById('commentText');
    const commentButton = document.getElementById('commentButton');
    const showComment = document.querySelector('.showcomment');

    commentButton.addEventListener('click', function() {
        const comment = commentText.value.trim();

        if (comment !== '') {
            const newComment = document.createElement('p');
            newComment.textContent = comment;
            showComment.appendChild(newComment);
            commentText.value = '';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const commentButton = document.getElementById('commentButton');
    const commentText = document.getElementById('commentText');
    const showComment = document.querySelector('.showcomment');

    commentButton.addEventListener('click', function() {
        const comment = commentText.value.trim();

        if (comment !== '') {
            const newComment = document.createElement('p');
            newComment.textContent = comment;
            showComment.appendChild(newComment);
            commentText.value = '';
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Retrieve content from session storage
    const postTitle = sessionStorage.getItem('postTitle');
    const postDescription = sessionStorage.getItem('postDescription');

    // Display the title
    const titleElement = document.getElementById('postTitle');
    if (postTitle && titleElement) {
        titleElement.textContent = postTitle;
    }

    // Display the content
    const descriptionElement = document.getElementById('postDescription');
    if (postDescription && descriptionElement) {
        descriptionElement.textContent = postDescription;
    }
});



document.addEventListener('DOMContentLoaded', function() {
    const postContent = localStorage.getItem('contentToDisplay');

    // Assuming you have an element with id "content" to display the content
    const contentElement = document.getElementById('content');
    if (contentElement && postContent) {
        contentElement.textContent = postContent;
    }
});