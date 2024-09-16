// Array to store the metadata of all posts
let posts = [];

// Function to fetch the list of posts
async function fetchPostList() {
    try {
        const response = await fetch('posts/index.json');
        posts = await response.json();
        posts.sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort by date, newest first
    } catch (error) {
        console.error('Error fetching post list:', error);
    }
}

// Function to fetch and render a single post
async function fetchAndRenderPost(filename) {
    try {
        const response = await fetch(`posts/${filename}`);
        const content = await response.text();
        return marked(content);
    } catch (error) {
        console.error(`Error fetching post ${filename}:`, error);
        return '<p>Error loading post.</p>';
    }
}

// Function to create a post element
function createPostElement(post, content) {
    const postElement = document.createElement('article');
    postElement.className = 'post';
    postElement.innerHTML = `
        <h2>${post.title}</h2>
        <p class="post-meta">Published on ${post.date}</p>
        <div class="post-content">${content}</div>
    `;
    return postElement;
}

// Function to load and display posts
async function loadPosts() {
    await fetchPostList();
    const postList = document.getElementById('post-list');
    
    for (const post of posts) {
        const content = await fetchAndRenderPost(post.filename);
        const postElement = createPostElement(post, content);
        postList.appendChild(postElement);
    }
}

// Load posts when the DOM is ready
document.addEventListener('DOMContentLoaded', loadPosts);
