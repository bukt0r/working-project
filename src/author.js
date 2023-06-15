const id = window.location.search.slice(9);

const nameUser = document.getElementById('name');
const phoneUser = document.getElementById('phone');
const websiteUser = document.getElementById('website');
const companyUser = document.getElementById('company');

async function userInfo() {
    try {
      const user = await (await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)).json();
      const name = document.createTextNode(user.name);
      const phone = document.createTextNode(`Phone: ${user.phone}`);
      const website = document.createTextNode(`WebSite: ${user.website}`);
      const company = document.createTextNode(`Company: ${user.company.name}`);

      nameUser.appendChild(name);
      phoneUser.appendChild(phone);
      websiteUser.appendChild(website);
      companyUser.appendChild(company);

      
    } catch (error) {
      console.log(error);
    }
};

userInfo();

const userPosts = async function() {
    try {
        const allUsersPosts = await (await fetch(`https://jsonplaceholder.typicode.com/posts`)).json();
        const allUserPosts = allUsersPosts.filter(obj => obj.userId == id);
        let ul = document.createElement('ul');

        allUserPosts.map((el) => {
            let li = document.createElement('li');
            let a = document.createElement('a');
            let text = document.createTextNode(el.title);
            a.setAttribute('href', `post.html?id=${el.id}`);

            a.appendChild(text);
            li.appendChild(a);
            ul.appendChild(li);

            console.log(allUserPosts); 
        });
        
        document.getElementById('posts').appendChild(ul);

      
    } catch (error) {
        console.log(error);
    }
  };

  userPosts();

