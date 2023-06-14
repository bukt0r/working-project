const id = window.location.search.slice(4)
const arr = []
let elements;

const title = document.getElementById('title');
const body = document.getElementById('body');



async function fetchPosts() {
    try {
      const post = await (await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)).json();
      const titleText = document.createTextNode(post.title);
      title.appendChild(titleText);
      const bodyText = document.createTextNode(post.body);
      body.appendChild(bodyText)
      
    } catch (error) {
      console.log(error);
    }
};

fetchPosts()

