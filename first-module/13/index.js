// Задание 1

class Student {
    constructor(name, age){
    this.name = name;
    this.age = age;
    }

    setTechnologies(){
        this.technologies = [];
    }

    setNewStatus(status){
        this.status = status;
    }

   setTechnologies(technologies) {

       this.technologies = 
        technologies;

   }

   setNewStatus(newStatus) {

       this.status = newStatus;

   }

}

const student = new Student('Maxim', 20);

student.setTechnologies(['HTML', 'CSS', 'JavaScript']);

student.setNewStatus('Middle');

console.log(student);

//Задание 2


class Person{
    constructor(name, age){
        this.age = age;
        this.name = name;
    }
    compareAge(person){
        if(this.age>=person.age){
            console.log(`${this.name} старше, чем ${person.name}`);
        }
        else{
            console.log(`${this.name} младше, чем ${person.name}`);
        }

    }
}


const person1 = new Person('Максим', 24);
const person2 = new Person('Светлана', 36);
const person3 = new Person('Ирина', 23);
 
person1.compareAge(person2); // Максим младше, чем Светлан
person2.compareAge(person3); // Светлана старше, чем Ирина
person3.compareAge(person1); // Ирина младше, чем Максим

// Задание 3

class CarService{
    constructor(name, workingHours){
        this.name = name;
        this.workingHours = workingHours;
    }

    
    static DefaultWorkingHours = {
        from: '9:00',
        till: '20:00',
     }
     repairCar(carName){
        let today = new Date();
        let  currentTime = today.getHours();
         if(!carName){
             console.error('Вам необходимо указать название машины, чтобы ее отремонтировать');
         }
         else if(carName){
          if(today.getHours()>this.workingHours.from.split(':')[0]&&today.getHours()<this.workingHours.till.split(':')[0]){
              console.log(`Сейчас отремонтируем вашу машину ${carName}! Ожидайте, пожалуйста`);
          }
          else{
              console.log('К сожалению, мы сейчас закрыты. Приходите завтра');
          }
         }

     }
}

const carService = new CarService('RepairCarNow', { from: '8:00', till: '14:00' });
carService.repairCar('BMW');
console.log(carService);

// Задание 4

class Dictionary {
    constructor(name){
        this.name = name;
        this.words = {};
    }
    get getWords(){
        return this.words;
    }

    add(word, description){
        if([word] in this.words){
            console.log('this word exists');
        }
        else{
            this.words[word]={
                word,
                description,
            }
        }
        console.log('this.words', this.words);
      
    }
    
    remove(word){
        if(this.words[word].word){
            delete this.words[word];
        }
    }

    get(word){
       console.log(word, this.words[word]);
    }
    
    showAllWords(){
        for(const word in this.words){
            console.log(`${this.words[word].word} - ${this.words[word].description}`);
        }
    }

}

const dictionary = new Dictionary('Толковый словарь');
dictionary.add('JavaScript', 'популярный язык программирования');
dictionary.add('Веб-разработчик', 'Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие');
dictionary.showAllWords();
dictionary.get('JavaScript');
dictionary.remove('Веб-разработчик');
dictionary.showAllWords();

// Задание 5

class HardWordsDictionary extends Dictionary {
    constructor(name){
        super(name);
    }


    add(word, description,isDifficult = true){
        if([word] in this.words){
            console.log('this word exists');
        }
        else{
            this.words[word]={
                word,
                description,
                isDifficult
            }
        }
        console.log('this.words', this.words);
      
    }


}

const hardWordsDictionary = new HardWordsDictionary('Сложные слова');
hardWordsDictionary.add('дилетант', 'Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.');
hardWordsDictionary.add('неологизм', 'Новое слово или выражение, а также новое значение старого слова.');
hardWordsDictionary.add('квант', 'Неделимая часть какой-либо величины в физике.');
 
hardWordsDictionary.remove('неологизм');
hardWordsDictionary.showAllWords();


// Задание 6

class Dictionary {
    #name
    #words
    constructor(name){
        this.#name = name;
        this.#words = {};
    }

    get mainName() {
        return this.#name;
    }

    get allWords() {
        return this.#words;
    }

    set setMainName(name) {
        this.#name = name;
    }

    addNewWord(word, description) {
        this.#words[word]={
            word,
            description,
        }
    }

    add(word, description){
        if([word] in this.#words){
            console.log('this word exists');
        }
        else{
            this.#words[word]={
                word,
                description,
            }
        }
      
    }
    
    remove(word){
        if(this.#words[word].word){
            delete this.#words[word];
        }
    }

    get(word){
       console.log(word, this.#words[word]);
    }
    
    showAllWords(){
        for(const word in this.#words){
            console.log(`${this.#words[word].word} - ${this.#words[word].description}`);
        }
    }

}

class HardWordsDictionary extends Dictionary {
    constructor(name){
        super(name);
    }


    add(word, description,isDifficult = true){
        console.log('super.allWords', super.allWords);
        if([word] in super.allWords){
            console.log('this word exists');
        }
        else{
            super.allWords[word]={
                word,
                description,
                isDifficult
            }
        }
        console.log('super.allWords', super.allWords);
      
    }

    remove(word){
        if(super.allWords[word].word){
            delete super.allWords[word];
        }
    }
}

const dictionary = new Dictionary('Толковый словарь');
dictionary.add('JavaScript', 'популярный язык программирования');
dictionary.add('Веб-разработчик', 'Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие');
dictionary.showAllWords();
dictionary.get('JavaScript');
dictionary.remove('Веб-разработчик');
dictionary.showAllWords();

const hardWordsDictionary = new HardWordsDictionary('Сложные слова');
hardWordsDictionary.add('дилетант', 'Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.');
hardWordsDictionary.add('неологизм', 'Новое слово или выражение, а также новое значение старого слова.');
hardWordsDictionary.add('квант', 'Неделимая часть какой-либо величины в физике.');
 
hardWordsDictionary.remove('неологизм');
hardWordsDictionary.showAllWords();
 
console.log(hardWordsDictionary.mainName); // Сложные слова
hardWordsDictionary.setMainName = 'Новый Словарь';
console.log(hardWordsDictionary.mainName); // Новый Словарь
console.log(hardWordsDictionary.allWords); // выводит объект в котором есть слова дилетант и квант
 

// Задание 7

class Developer{
    constructor(fullName, age, position){
        this.fullName = fullName;
        this.age = age;
        this.position = position;
        this.technologies = [];

    }

    code(){}

    learnNewTechnology(technology){
        console.log('this.technologies', this.technologies);
        this.technologies.push(technology);
    }
}

class juniorDeveloper extends Developer{
    constructor(fullName, age){
        super(fullName,age);
        this.position = "Junior";
        this.technologies = ['HTML', 'CSS', 'JavaScript'];
    }

    code(){
        console.log('Junior разработчик пишет код...');
    }

}
class middleDeveloper extends Developer{
    constructor(fullName, age){
        super(fullName,age);
        this.position = "Middle";
        this.technologies = ['HTML', 'CSS', 'JavaScript', 'React'];
    }

    code(){
        console.log('Middle разработчик пишет код...');
    }
    
}
class seniorDeveloper extends Developer{
    constructor(fullName, age){
        super(fullName,age);
        this.position = "Senior";
        this.technologies = ['HTML', 'CSS', 'JavaScript', 'React','NodeJS'];
    }

    code(){
       console.log('Senior разработчик пишет код...');
    }
    
}
juniorDeveloper = new juniorDeveloper('Анастасия', 20);
middleDeveloper = new middleDeveloper('Игорь', 25);
seniorDeveloper = new seniorDeveloper('Максим', 30);

juniorDeveloper.code(); // Junior разработчик пишет код...
middleDeveloper.code(); // Middle разработчик пишет код...
seniorDeveloper.code(); // Senior разработчик пишет код...
 
console.log(juniorDeveloper.fullName, juniorDeveloper.age, 

juniorDeveloper.position); // 'Анастасия', 20, 'Junior'
console.log(middleDeveloper.fullName, middleDeveloper.age, 

middleDeveloper.position); // 'Игорь', 25, 'Middle'
console.log(seniorDeveloper.fullName, seniorDeveloper.age, 

seniorDeveloper.position); // 'Максим', 30, 'Senior'