let arr = [];
let postElements;


async function fetchPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    const users = await (await fetch('https://jsonplaceholder.typicode.com/users')).json();
    
    
    arr = data;
    postElements = arr.map((el) => {
      const user = users.find((item) => item.id === el.userId);

      let li = document.createElement('li');
      let a = document.createElement('a');
      let text = document.createTextNode(el.title);
      a.setAttribute('href', `post.html?id=${el.id}`);
      let authorLink = document.createElement('a');
      let authorElement = document.createTextNode(user.name);
      authorLink.setAttribute('href', `author.html?user_id=${el.userId}`)
  
      a.appendChild(text);
      li.appendChild(a);
      authorLink.appendChild(authorElement);
      li.appendChild(authorLink);
      ul.appendChild(li);

      console.log(data, typeof data)
  
      return li; 
    });
  } catch (error) {
    console.log(error);
  }
}

fetchPosts();


let app = document.getElementById('app');
const ul = document.createElement('ul');
app.appendChild(ul)
