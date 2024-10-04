const postList = document.getElementById('post-list');
const postContent = document.getElementById('post-content');
const post = document.getElementById('post');
const backButton = document.getElementById('back-button');
const aboutLink = document.getElementById('about-link');

let posts = [];

async function fetchPosts() {
    try {
        const response = await fetch('https://api.github.com/repos/{username}/{repository}/contents/posts');
        const data = await response.json();
        posts = data.filter(file => file.name.endsWith('.md'));
        displayPosts();
    } catch (error) {
        console.error('Error fetching posts:', error);
        postList.innerHTML = '<p>Error loading posts. Please try again later.</p>';
    }
}

function displayPosts() {
    postList.innerHTML = '';
    posts.forEach(post => {
        const postItem = document.createElement('div');
        postItem.className = 'post-item';
        postItem.innerHTML = `
            <h2>${post.name.replace('.md', '')}</h2>
            <p>Click to read more</p>
        `;
        postItem.addEventListener('click', () => loadPost(post.download_url));
        postList.appendChild(postItem);
    });
}

async function loadPost(url) {
    try {
        const response = await fetch(url);
        const markdown = await response.text();
        post.innerHTML = marked.parse(markdown);
        postList.style.display = 'none';
        postContent.style.display = 'block';
    } catch (error) {
        console.error('Error loading post:', error);
        post.innerHTML = '<p>Error loading post. Please try again later.</p>';
    }
}

backButton.addEventListener('click', () => {
    postContent.style.display = 'none';
    postList.style.display = 'block';
});

aboutLink.addEventListener('click', (e) => {
    e.preventDefault();
    post.innerHTML = `
        <h2>About This Blog</h2>
        <p>Welcome to my GitHub Pages blog! This is a simple blog that reads Markdown files from a GitHub repository.</p>
        <p>Feel free to explore the posts and learn more about various topics.</p>
    `;
    postList.style.display = 'none';
    postContent.style.display = 'block';
});

fetchPosts();
