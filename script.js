let posts = [];

async function fetchPostList() {
    try {
        const response = await fetch('posts/index.json');
        posts = await response.json();
        posts.sort((a, b) => new Date(b.date) - new Date(a.date));
    } catch (error) {
        console.error('Error fetching post list:', error);
    }
}

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

function createPostElement(post, content) {
    const postElement = document.createElement('article');
    postElement.className = 'post';
    postElement.innerHTML = `
        <h3>${post.title}</h3>
        <p class="post-meta">Published on ${post.date}</p>
        <div class="post-content">${content}</div>
    `;
    return postElement;
}

async function loadPosts() {
    await fetchPostList();
    const postList = document.getElementById('post-list');
    
    for (const post of posts) {
        const content = await fetchAndRenderPost(post.filename);
        const postElement = createPostElement(post, content);
        postList.appendChild(postElement);
    }
}

document.addEventListener('DOMContentLoaded', loadPosts);
