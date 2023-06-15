const id = window.location.search.slice(4);

const title = document.getElementById('title');
const body = document.getElementById('body');
const author = document.getElementById('author');

async function fetchPosts() {
    try {
      const post = await (await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)).json();
      const user = await (await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)).json();
      const titleText = document.createTextNode(post.title);
      title.appendChild(titleText);
      const bodyText = document.createTextNode(post.body);
      body.appendChild(bodyText);
      const name = document.createTextNode(user.name);
      const authorLink = document.createElement('a');
      authorLink.setAttribute('href', `author.html?user_id=${post.userId}`);
      authorLink.appendChild(name);
      author.appendChild(authorLink);
      
    } catch (error) {
      console.log(error);
    }
};

fetchPosts()


