    document.addEventListener('DOMContentLoaded', function() {
        const storedTitles = Object.keys(sessionStorage).filter(key => key.startsWith('postTitle'));

        storedTitles.forEach(titleKey => {
            const title = sessionStorage.getItem(titleKey);
            const contentKey = titleKey.replace('postTitle', 'postContent');
            const content = sessionStorage.getItem(contentKey);

            if (title && content && title.trim() !== '' && content.trim() !== '') {
                const template = document.getElementById('cardTemplate');
                const clone = template.content.cloneNode(true);

                // Get references to elements inside the cloned template
                const cardTitle = clone.querySelector('.two h4 span');
                const cardDescription = clone.querySelector('.two p');
                const postLink = clone.querySelector('.two .postLink');

                // Set the content of elements accordingly
                cardTitle.textContent = title;
                cardDescription.textContent = content;

                // Post link functionality
                postLink.addEventListener('click', function(event) {
                    event.preventDefault();
                    const clickedCard = event.target.closest('.cardview');
                    const clickedTitle = clickedCard.querySelector('.one h2').textContent;
                    const clickedContent = clickedCard.querySelector('.two p').textContent;

                    const postData = {
                        title: clickedTitle,
                        content: clickedContent
                    };
                    sessionStorage.setItem('postData', JSON.stringify(postData));
                    window.location.href = 'post.html';
                });

                const allCardView = document.querySelector('.allcardview');
                allCardView.appendChild(clone);
            }
        });
    });


    document.addEventListener('DOMContentLoaded', function() {
        // Add event listeners for delete button clicks
        const deleteButtons = document.querySelectorAll('.delete-post');
        deleteButtons.forEach(button => {
            button.addEventListener('click', function(event) {
                // Code to show the delete confirmation modal
                event.preventDefault(); // Prevents the default action (if any)
            });
        });

        // Add event listeners for ellipsis icon clicks
        const ellipsisIcons = document.querySelectorAll('.ellipsis-icon');
        ellipsisIcons.forEach(icon => {
            icon.addEventListener('click', function(event) {
                // Redirect to post.html or perform required action
                // window.location.href = "post.html";
            });
        });

        // Other functionalities, modals, etc.
    });

    document.addEventListener('DOMContentLoaded', function() {
        const postLinks = document.querySelectorAll('.postLink');

        postLinks.forEach(link => {
            link.addEventListener('click', function(event) {
                event.preventDefault(); // Prevent default link behavior (preventing the navigation)

                // Get content associated with the clicked link
                const cardContent = this.parentNode.previousElementSibling.innerText;

                // Store content in localStorage to pass it to post.html
                localStorage.setItem('contentToDisplay', cardContent);

                // Redirect to post.html
                window.location.href = 'post.html';
            });
        });
    });