import {Settings as set} from '../core/constants/settings';
import * as support from '../core/utils/support';
export class DonateList {
    #mainDiv
    constructor(donates){
        this.donates = donates;
    }

    render(){
        this.#mainDiv = document.createElement('div');
        this.#mainDiv.classList.add('donates-container');
        const h2 = document.createElement('h2');
        h2.classList.add('donates-container__title');
        h2.textContent = 'Список донатов';
        const secondDiv = document.createElement('div');
        secondDiv.classList.add('donates-container__donates');
        this.donates.forEach(donate => {
            const contentDiv = document.createElement('div');
            contentDiv.textContent = `${support.getFormattedTime(donate.date)} - `;
            contentDiv.classList.add('donate-item');
            const b = document.createElement('b');
            contentDiv.append(b);
            b.textContent = `${donate.amount}${set.currency}`;
            secondDiv.append(contentDiv);
        });
        this.#mainDiv.prepend(h2, secondDiv);
        return this.#mainDiv;
    }

    updateDonates(updatedDonates){
        const newDonates = document.querySelector('.donates-container__donates');
        newDonates.innerHTML = '';
        updatedDonates.forEach(donate => {
            const contentDiv = document.createElement('div');
            let contentDate = support.getFormattedTime(donate.date);
            contentDiv.textContent = `${contentDate} - `;
            contentDiv.classList.add('donate-item');
            const b = document.createElement('b');
            b.textContent = `${donate.amount}${set.currency}`;
            contentDiv.append(b);
            newDonates.append(contentDiv);
        });
    }
}