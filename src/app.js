document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.getElementById('registration-form');
    const loginForm = document.getElementById('login-form');
    const postsContainer = document.getElementById('posts');

    // User registration
    registrationForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const displayName = document.getElementById('display-name').value;
        const password = document.getElementById('password').value;
        // Save user data (for demonstration purposes, using localStorage)
        localStorage.setItem('user', JSON.stringify({ displayName, password }));
        alert('Registration successful!');
    });

    // User login
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const displayName = document.getElementById('login-display-name').value;
        const password = document.getElementById('login-password').value;
        const user = JSON.parse(localStorage.getItem('user'));
        if (user && user.displayName === displayName && user.password === password) {
            alert('Login successful!');
        } else {
            alert('Invalid display name or password.');
        }
    });

    // Posting text
    function postText(content) {
        const post = document.createElement('div');
        post.className = 'post';
        post.textContent = content;
        postsContainer.appendChild(post);
    }

    // Posting images
    function postImage(imageUrl) {
        const post = document.createElement('div');
        post.className = 'post';
        const img = document.createElement('img');
        img.src = imageUrl;
        post.appendChild(img);
        postsContainer.appendChild(post);
    }

    // Posting videos
    function postVideo(videoUrl) {
        const post = document.createElement('div');
        post.className = 'post';
        const video = document.createElement('video');
        video.src = videoUrl;
        video.controls = true;
        post.appendChild(video);
        postsContainer.appendChild(post);
    }

    // Liking a post
    function likePost(post) {
        const likeButton = post.querySelector('.like-button');
        likeButton.addEventListener('click', () => {
            const likesCount = post.querySelector('.likes-count');
            likesCount.textContent = parseInt(likesCount.textContent) + 1;
        });
    }

    // Commenting on a post
    function commentOnPost(post, comment) {
        const commentsContainer = post.querySelector('.comments');
        const commentElement = document.createElement('div');
        commentElement.className = 'comment';
        commentElement.textContent = comment;
        commentsContainer.appendChild(commentElement);
    }

    // Sharing a post
    function sharePost(post) {
        const shareButton = post.querySelector('.share-button');
        shareButton.addEventListener('click', () => {
            alert('Post shared!');
        });
    }
});
