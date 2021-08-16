// Решите задачу 2-мя способами:
// 1) через innerHTML;
// 2) через document.createElement

//   <form class="create-user-form">
//        <label>
//            Имя
//            <input type="text" name="userName" placeholder="Введите ваше имя" />
//        </label>
//        <label>
//            Пароль
//            <input type="password" name="password" placeholder="Придумайте Пароль" />
//        </label>
//        <button type="submit">
//            Подтвердить
//        </button>
//    </form>

//1_1
document.body.innerHTML = '<form></form>';
form = document.querySelector('form');
form.innerHTML = '<label>Имя<input type="text" name="userName" placeholder="Введите ваше имя" /></label><label>Пароль<input type="password" name="password" placeholder="Придумайте Пароль" /></label><button type="submit">Подтвердить</button>'
form.className = 'create-user-form';

//1_2
const newForm = document.createElement('form');
newForm.className = 'create-user-form';
const newInput = document.createElement('input');
newInput.setAttribute('type', 'text');
newInput.setAttribute('name', 'userName');
newInput.setAttribute('placeholder', 'Введите ваше имя');
const label1 = document.createElement('label');
const label2 = document.createElement('label');
const newInput2 = document.createElement('input');
newInput2.setAttribute('type', 'password');
newInput2.setAttribute('name', 'password');
newInput2.setAttribute('placeholder', 'Придумайте Пароль');
const submitBtn = document.createElement('button');
submitBtn.setAttribute('type', 'submit');
submitBtn.textContent='Подтвердить';
label1.textContent='Имя';
label1.append(newInput);
label2.textContent='Пароль';
label2.append(newInput2);
newForm.prepend(label1);
newForm.append(label2);
newForm.append(submitBtn);
const body = document.querySelector('body');
body.append(newForm);



