// Retrieve blog posts from local storage or initialize an empty array
let blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

const blogForm = document.getElementById('blogForm');
const titleInput = document.getElementById('title');
const contentInput = document.getElementById('content');
const blogPostsSection = document.getElementById('blogPosts');

// Function to display blog posts
function displayBlogPosts() {
    blogPostsSection.innerHTML = '';
    blogPosts.forEach((post, index) => {
        const postDiv = document.createElement('div');
        postDiv.className = 'post';
        postDiv.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.content}</p>
            <button data-index="${index}" class="edit">Edit</button>
            <button data-index="${index}" class="delete">Delete</button>
        `;
        blogPostsSection.appendChild(postDiv);
    });
}

function addBlogPost(title, content) {
    const post = { title, content };
    blogPosts.push(post);
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
    displayBlogPosts();
    blogForm.reset();
}


function editBlogPost(index, title, content) {
    blogPosts[index] = { title, content };
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
    displayBlogPosts();
}


function deleteBlogPost(index) {
    blogPosts.splice(index, 1);
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
    displayBlogPosts();
}


blogForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = titleInput.value;
    const content = contentInput.value;
    if (title && content) {
        addBlogPost(title, content);
    }
});


blogPostsSection.addEventListener('click', (e) => {
    if (e.target.classList.contains('edit')) {
        const index = e.target.getAttribute('data-index');
        const post = blogPosts[index];
        titleInput.value = post.title;
        contentInput.value = post.content;
        editBlogPost(index, titleInput.value, contentInput.value);
    } else if (e.target.classList.contains('delete')) {
        const index = e.target.getAttribute('data-index');
        deleteBlogPost(index);
    }
});


displayBlogPosts();
