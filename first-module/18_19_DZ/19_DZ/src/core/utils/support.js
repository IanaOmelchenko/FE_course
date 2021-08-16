import moment from 'moment';
import { mockDonates } from './mockDonates';'./mockDonates';

export function getFormattedTime(date){
    date = moment(date).format('MMMM Do YYYY, h:mm:ss a');
    return date;
}

export const initialNumber = function(){
    let sum = 0;
    mockDonates.forEach((mock)=>{
       sum = sum + mock.amount;
    })
    return sum;
}