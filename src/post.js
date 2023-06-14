const id = window.location.search.slice(4)
let elements;

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
      author.appendChild(name);
      
    } catch (error) {
      console.log(error);
    }
};

fetchPosts()


