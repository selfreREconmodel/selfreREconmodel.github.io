let posts = [];

async function fetchPostList() {
    try {
        const response = await fetch('posts/index.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        posts = await response.json();
        posts.sort((a, b) => new Date(b.date) - new Date(a.date));
        displayPosts();
    } catch (error) {
        console.error('Error fetching post list:', error);
        document.getElementById('post-list').innerHTML = `<p>Error loading posts: ${error.message}. Please check your setup and try again.</p>`;
    }
}

function displayPosts() {
    const postList = document.getElementById('post-list');
    postList.innerHTML = '';
    posts.forEach(post => {
        const postItem = document.createElement('div');
        postItem.className = 'post-item';
        postItem.innerHTML = `
            <h2>${post.title}</h2>
            <p>${formatDate(post.date)}</p>
            <p>${post.excerpt || 'No excerpt available.'}</p>
        `;
        postItem.addEventListener('click', () => loadPost(post.filename));
        postList.appendChild(postItem);
    });
}

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}

async function loadPost(filename) {
    try {
        const response = await fetch(`posts/${filename}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const markdown = await response.text();
        document.getElementById('post').innerHTML = marked.parse(markdown);
        document.getElementById('post-list').style.display = 'none';
        document.getElementById('post-content').style.display = 'block';
    } catch (error) {
        console.error('Error loading post:', error);
        document.getElementById('post').innerHTML = `<p>Error loading post: ${error.message}. Please try again later.</p>`;
    }
}

document.getElementById('back-button').addEventListener('click', () => {
    document.getElementById('post-content').style.display = 'none';
    document.getElementById('post-list').style.display = 'block';
});

document.getElementById('about-link').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('post').innerHTML = `
        <h2>About This Blog</h2>
        <p>Welcome to my GitHub Pages blog! This blog showcases my research findings and literature reviews in the field of Quantum Machine Learning.</p>
        <p>Feel free to explore the posts and learn more about the cutting-edge developments in this exciting field.</p>
    `;
    document.getElementById('post-list').style.display = 'none';
    document.getElementById('post-content').style.display = 'block';
});

fetchPostList();
