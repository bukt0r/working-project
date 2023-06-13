let arr = [];
let postElements;
const baseurl = '/Users/Виктор/projects/work/working-project';

async function fetchPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    
    arr = data;
    postElements = arr.map((el) => {
      let li = document.createElement('li');
      let a = document.createElement('a');
      let text = document.createTextNode(el.title);
      a.setAttribute('href', `${baseurl}/post.html&id=${el.id}`);
  
      a.appendChild(text);
      li.appendChild(a);
      ul.appendChild(li);
  
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



