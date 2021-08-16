import {Settings as set} from '../core/constants/settings';

export class DonateForm{
    #form
    constructor(totalAmount, createNewDonate){
       this.totalAmount = totalAmount;
       this.#form = document.createElement('form');
       this.#form.classList.add('donate-form');
       this.createNewDonate = createNewDonate;
    }
    render(){
       const h1 = document.createElement('h1');
       h1.setAttribute('id', 'total-amount');
       h1.textContent = `${this.totalAmount}${set.currency}`;
       const label = document.createElement('label');
       label.classList.add('donate-form__input-label');
       label.textContent = `Введите сумму в ${set.currency}`;
       const button = document.createElement('button');
       button.classList.add('donate-form__submit-button');
       button.setAttribute('type','submit');
       button.textContent = 'Задонатить';
       const input = document.createElement('input');
       input.classList.add('donate-form__donate-input');
       input.setAttribute('name','amount');
       input.setAttribute('type','number');
       input.setAttribute('max','100');
       input.setAttribute('min','0');
       input.setAttribute('required','');
       label.append(input);
       this.#form.append(h1, label, button);
       this.#form.addEventListener('submit', (event)=>{
           event.preventDefault();
           const newDonate = {
               amount: event.target[0].valueAsNumber,
               date: new Date(),
           }
           this.createNewDonate(newDonate);
           input.value = '';
       })
       return this.#form;
    };
    updateTotalAmount(newAmount){
        const newAmountEl = document.querySelector('#total-amount');
        newAmountEl.textContent=`${newAmount}${set.currency}`;
    }
}