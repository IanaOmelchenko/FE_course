// //Задание 1
 
// student
//    .improveLevel()
//    .improveLevel()
//    .improveLevel();

//    let student = {
//     stack: ['HTML'],
//     level: 1,
  
//     improveLevel() {
//       this.level = this.level +1;
//       console.log(this.level);
//       if(this.level === 2){
//         console.log('level2', this.level);
//           this.stack.push('CSS'); 
//           console.log('this.stack', this.stack);
//       } else if(this.level ===  3){
//           this.stack.push('JavaScript');
//           console.log('this.stack', this.stack);
//       } else if(this.level === 4){
//           this.stack.push('React');
//           console.log('this.stack', this.stack);
//       } else if(this.level === 5){
//           this.stack.push('NodeJS');
//           console.log('this.stack', this.stack);
//       } else if(this.level>5){
//           alert('Студент выучил все технологии!');
//       }
//       return this;
//     }
//   };
//   console.log(student.improveLevel().improveLevel());


// //   Задание 2

// const dog = {
//    name: 'Чарли',
//    type: 'Собака',
//    makeSound() {
//        return 'Гав-Гав';
//    }
// };
 
// const bird = {
//    name: 'Петя',
//    type: 'Воробей',
//    makeSound() {
//        return 'Чик-чирик';
//    }
// }

// function makeDomestic(domestic){
//     console.log(`${this.type} по имени ${this.name} говорит ${this.makeSound()}`);
//     this.isDomestic =`${domestic}`;
//     return this;
// }

// const bindMakeDomestic = makeDomestic.bind(dog,true);
// console.log(bindMakeDomestic(dog,true));

// makeDomestic.call(bird, false);
// console.log(makeDomestic.call(bird, false));

// makeDomestic.apply(bird, [false]);
// console.log(makeDomestic.apply(bird, [false])); 

// // Задание 3

// const footballer = {
//    fullName: 'Cristiano Ronaldo',
//    attack: function() {
//        console.log(`${this.fullName} сейчас с мячом и начинает атаку!`);
//    },
//    scoreGoal(sound) {
//        console.log(`${this.fullName} забил гол! Вот это да!`);
//        this.celebrate(sound);
//    },
//    celebrate(sound) {
//        console.log(sound);
//    },
//    goToSubstitution: function(newPlayer) {
//        console.log(this);
//        console.log(`${this.fullName} уходит на замену. На поле выходит ${newPlayer}`);
//    }
// }
 
// const attack = footballer.attack;
// const attackBind = attack.bind(footballer);
// attackBind();
// attack();

// const score = footballer.scoreGoal;
// // score('Сиииии');
// score.call(footballer, 'Сиииии');

// const substitute = footballer.goToSubstitution;
// // substitute('Paulo Dibala');
// substitute.apply(footballer, ['Paulo Dibala']);

// Дополнительное задание

const attacker = {
   archer: 30,
   footSoldier: 55,
   cavalry: 10,
   artillery: 3,
   checkChancesToWin: function(defenderObject){
       let chances = 0;
       let base = 0;
       let chancesArray = [];

       console.log('chancesArray', chancesArray, typeof chancesArray);  
    for (const [key, value] of Object.entries(defenderObject)) {
        if(this[key]>defenderObject[key]){
            chances++;
        }
        base++
      }
      chancesArray.push(chances, base);
      return chancesArray
   },

   improveArmy: function(){
      this.archer=this.archer+5;
      this.footSoldier=this.footSoldier+5;
      this.cavalry = this.cavalry+5;
      this.artillery=this.artillery+5;
       return this;
   },
   attack: function(defenderObject){
    let assertChances = this.checkChancesToWin(defenderObject);
       if(assertChances[0]/assertChances[1]<0.7){
        this.improveArmy();
        alert(`Наши шансы равны ${assertChances[0]/assertChances[1]}.Необходимо укрепление!`)
       }
       else{
           alert('Мы усилились! Мы несомненно победим! Наши шансы высоки!');
       }
   }
}
 
const defender = {
   archer: 33,
   footSoldier: 50,
   cavalry: 40,
   artillery: 10,
}
attacker.checkChancesToWin(defender);
attacker.improveArmy();
attacker.attack(defender);




