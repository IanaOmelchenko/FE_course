import { DonateForm } from './donate-form';
import { DonateList } from './donate-list';
import { mockDonates } from '../core/utils/mockDonates';
import * as support from '../core/utils/support'

export default class App {
    #DonateForm
    #DonateList
    constructor(){
        this.state = {
            donates: mockDonates||[],
            totalAmount: support.initialNumber(),
        }
        this.#DonateForm = new DonateForm(this.state.totalAmount, this.createNewDonate.bind(this));
        this.#DonateList = new DonateList(this.state.donates);
    }
    run(){
        const newDonateForm = this.#DonateForm.render();
        const newDonateList = this.#DonateList.render();
        document.body.append(newDonateForm);
        document.body.append(newDonateList);
    }

    createNewDonate(newDonate){
        this.state.donates.push(newDonate);
        this.state.totalAmount = this.state.totalAmount+newDonate.amount;
        this.#DonateList.updateDonates(this.state.donates);
        this.#DonateForm.updateTotalAmount(this.state.totalAmount);
    }

}