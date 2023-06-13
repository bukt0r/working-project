let arr = [];
let postElements;
const baseurl= '/Users/Виктор/projects/work/working-project'

let posts = fetch('https://jsonplaceholder.typicode.com/posts').then((data) => {
    console.log(data)
    return data.json()
} ).then((data) => {
    arr = data;
    postElements = arr.map((el)=> {
        let li = document.createElement('li');
        let a = document.createElement('a');
        let text = document.createTextNode(el.title);
        a.setAttribute('href', `${baseurl}/post.html&id=${el.id}`)

        a.appendChild(text);
        li.appendChild(a);
        ul.appendChild(li);
        
        return li; 
    });
});

let app = document.getElementById('app');
const ul = document.createElement('ul');
app.appendChild(ul)



