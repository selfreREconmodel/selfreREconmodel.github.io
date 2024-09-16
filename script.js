const posts = [
    {
        title: "My First Research Finding",
        date: "2024-09-15",
        content: "# My First Research Finding\n\nToday, I made a breakthrough in [specific area]. This finding suggests that...\n\n## Methods\n\nWe used the following methods:\n\n1. Method A\n2. Method B\n3. Method C\n\n## Results\n\nOur results show a significant improvement in...\n\n## Conclusion\n\nThis research opens up new possibilities for..."
    },
    {
        title: "Literature Review: Current State of [Research Area]",
        date: "2024-09-10",
        content: "# Literature Review: Current State of [Research Area]\n\nIn this post, I summarize the current state of research in [specific area].\n\n## Key Papers\n\n1. Smith et al. (2023)\n2. Johnson and Lee (2024)\n3. ..."
    }
];

function createPostElement(post) {
    const postElement = document.createElement('div');
    postElement.className = 'post';
    postElement.innerHTML = `
        <h3>${post.title}</h3>
        <p class="post-meta">Published on ${post.date}</p>
        <div class="post-content">${marked(post.content)}</div>
    `;
    return postElement;
}

function loadPosts() {
    const postList = document.getElementById('post-list');
    posts.forEach(post => {
        postList.appendChild(createPostElement(post));
    });
}

document.addEventListener('DOMContentLoaded', loadPosts);
