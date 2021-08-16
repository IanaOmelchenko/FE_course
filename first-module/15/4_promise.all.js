// Задание 1

// const dataContainer = document.querySelector('#data-container');

// function toggleLoader(){
//     const loader = document.querySelector('#loader');
//     const loaderOn = loader.hasAttribute('hidden');
//     loader.classList.toggle('hidden');
//     if(loaderOn){
//         loader.removeAttribute('hidden');
//     }else{
//         loader.setAttribute('hidden', '');
//     }
// }

// let URL =  'http://jsonplaceholder.typicode.com/users'
// const getAllUsers = function(){
//     toggleLoader();
//     const result = fetch(URL, {
//         method: 'GET',
//     });
//     result.then((response)=>{
//         if(!response.ok){
//             throw new Error('Response in not ok!');
//         }
//         return response.json();
//     }).then((users)=>{
//         users.forEach((user)=>{
//             dataContainer.append(addToHTML(user.name));
//         })
        
//     }).catch((error)=>{
//         console.error(error);
//     }).finally(()=>{
//         toggleLoader();
//     });
// }

// const addToHTML = function(user){
//     const liElement = document.createElement('li');
//     const aElement = document.createElement('a');
//     aElement.href = '#';
//     aElement.textContent=user;
//     liElement.append(aElement); 

//     return liElement;
// }

// Задание 2

// const dataContainer = document.querySelector('#data-container');
// const USERS_URL = 'http://jsonplaceholder.typicode.com/users';

// function toggleLoader(){
//     const loader = document.querySelector('#loader');
//     const loaderOn = loader.hasAttribute('hidden');
//     loader.classList.toggle('hidden');
//     if(loaderOn){
//         loader.removeAttribute('hidden');
//     }else{
//         loader.setAttribute('hidden', '');
//     }
// }

// const addToHTML = function(user){
//     const liElement = document.createElement('li');
//     const aElement = document.createElement('a');
//     aElement.href = '#';
//     aElement.textContent=user;
//     liElement.append(aElement); 

//     return liElement;
// }

// function toggleLoader(){
//     const loader = document.querySelector('#loader');
//     const loaderOn = loader.hasAttribute('hidden');
//     loader.classList.toggle('hidden');
//     if(loaderOn){
//         loader.removeAttribute('hidden');
//     }else{
//         loader.setAttribute('hidden', '');
//     }
// }
// const getUsersByIds = function(ids){
//      toggleLoader();
//     let requests = ids.map((id)=>
//         fetch(`${USERS_URL}/${id}`));
//         Promise.all(requests).then((results)=> {
//             const data = results.map((result)=>result.json());
//             return Promise.all(data);
//             }).then((users) => {
//                 console.log('users', users);
//                 users.forEach((user)=>{
//                     dataContainer.append(addToHTML(user.name));
//                 })
//             }).catch((error)=>console.error(error)).finally(()=>{
//     toggleLoader();
// });
// }

// getUsersByIds([5, 6, 2, 1]);    

// Задание 3

// const PHOTO_URL = 'https://jsonplaceholder.typicode.com/photos';

// function toggleLoader(){
//     const loader = document.querySelector('#loader');
//     const loaderOn = loader.hasAttribute('hidden');
//     loader.classList.toggle('hidden');
//     if(loaderOn){
//         loader.removeAttribute('hidden');
//     }else{
//         loader.setAttribute('hidden', '');
//     }
// }

// function getFastestLoadedPhoto(ids){
//     toggleLoader();
//     let requests = ids.map((id)=>
//         fetch(`${PHOTO_URL}/${id}`));
//     Promise.race(requests).then((result)=>{
//         if(!result.ok){
//             console.log('Something is wrong');
//         }
//         const received = result.json();
//         return received;
//     }).then((photo)=>{
//         dataContainer.append(pictureToHtml(photo))
//     }).catch((error)=>console.error(error)
//     ).finally(()=>{
//         toggleLoader();
//     })
        
// }

// const dataContainer = document.querySelector('#data-container');
// const pictureToHtml = function(picture){
//     const liElement = document.createElement('li');
//     liElement.classList.add('photo-item');
//     const imgEl = document.createElement('img');
//     imgEl.classList.add('photo-item__image');
//     imgEl.setAttribute('src', picture.url);
//     liElement.append(imgEl);
//     h3El = document.createElement('h3');
//     h3El.classList.add('photo-item__title');
//     h3El.textContent = `${picture.title}`
//     liElement.append(h3El);
     
//     return liElement;
// }

// getFastestLoadedPhoto([60, 12, 55]);

// Дополнительное задание 1

function toggleLoader(){
    const loader = document.querySelector('#loader');
    const loaderOn = loader.hasAttribute('hidden');
    loader.classList.toggle('hidden');
    if(loaderOn){
        loader.removeAttribute('hidden');
    }else{
        loader.setAttribute('hidden', '');
    }
}

const POST_URL = 'https://jsonplaceholder.typicode.com/posts'
const COM_URL = 'https://jsonplaceholder.typicode.com/comments?postId'

function renderPost(postId){
    toggleLoader();
    const postRequest =
        fetch(`${POST_URL}/${postId}`);
    const commentsRequest = fetch(`${COM_URL}=${postId}`);
    postRequest.then((postResponse)=>{
        if(!postResponse.ok){
            throw new Error('Post response in not ok!');
            }
            return postResponse.json()}).
            then((post)=>{
                dataContainer.append(postToHtml(post));
            }).catch((error)=>{
            console.error(error);
                    })
            commentsRequest.then((commentsResponse)=>{
            if(!commentsResponse.ok){
            throw new Error('Comments response in not ok!');
            }
            return commentsResponse.json()}).
            then((comments)=>{
                comments.forEach(comment => {
                    dataContainer.insertAdjacentElement('beforeend', commentToHtml(comment));
                });
            }).finally(()=>{
                toggleLoader();
            })
}

const dataContainer = document.querySelector('#data-container');
const divElement = document.createElement('div');
const postToHtml = function(post){
    divElement.classList.add('post');
    divElement.id = 'post';
    const h1El = document.createElement('h1');
    h1El.classList.add('post__title');
    h1El.innerText = post.title;
    divElement.append(h1El);
    pEl = document.createElement('p');
    pEl.classList.add('post__text');
    pEl.innerText = post.body;
    divElement.append(pEl);
    bEl = document.createElement('b');
    bEl.classList.add('post__comments-text');
    bEl.innerText = 'Комментарии';
    divElement.append(bEl);
     
    return divElement;
}

function commentToHtml(comment){
    div2El = document.createElement('div');
    div2El.classList.add('post__comments');
    divElement.append(div2El);
    div3El = document.createElement('div');
    div3El.classList.add('post__comment');
    div2El.append(div3El);
    span1El = document.createElement('span');
    span1El.classList.add('post-comment__author');
    span1El.textContent = comment.email;
    div3El.append(span1El);
    span2El = document.createElement('span');
    span2El.classList.add('post-comment__text');
    span2El.textContent = comment.body;
    div3El.append(span2El);
    return div2El;
}

renderPost(1);
