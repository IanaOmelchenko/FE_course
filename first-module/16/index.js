// Задание 1

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';
let isLoading = false;
const createNewPost = async() => {
 isLoading = true;
 try{
    const response = await fetch(POSTS_URL, {
        method: 'POST',
    })
    const result = await response.json();
    console.log('result', result);
   } catch(error) {
    console.log('error', error);
   }finally {
    isLoading = false;
   };
};
createNewPost();

// Задание 2

const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';
 
const getTodosByIds = async (ids) => {
    try{
        const requests = await ids.map((id) => fetch(`${TODOS_URL}/${id}`));
        const responses = await Promise.all(requests);
        const dataResults = await responses.map((data) => data.json());
        const allTasks = await Promise.all(dataResults);
         console.log(allTasks);
    } catch(error){
           console.log(error);
       }
}
 
getTodosByIds([43, 21, 55, 100, 10]);

// Задание 3

const ALBUMS_URL = 'https://jsonplaceholder.typicode.com/albums';
const DATA_CONTAINER = document.querySelector('#data-container');
const Loader = document.getElementById('loader');

function toggleLoader(){
    if(Loader.hasAttribute('hidden')){
        Loader.removeAttribute('hidden');
    }else{
        Loader.setAttribute('hidden', '');
    }
}



const renderAlbums = async() => {
    toggleLoader();
    try{
    const requests = await fetch(ALBUMS_URL);
    const results = await requests.json();
    results.forEach((result)=>{
        const liEl = document.createElement('li');
        liEl.innerText = `Title: ${result.title}`;
        DATA_CONTAINER.append(liEl);
    })
    }catch(error){
        let Error = 'Произошла ошибка в получении данных об альбомах...'
        DATA_CONTAINER.textContent = Error;
    }finally{
        toggleLoader();
    }
    
}

renderAlbums();