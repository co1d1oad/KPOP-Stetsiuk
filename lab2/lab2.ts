enum Category {
    BusinessAnalyst2 = "Business analyst", 
    Developer2 ="Developer",
    Designer2 = "Designer",
    QA2 = "QA",
    ScrumMaster2 = "Scrum master"
}

interface PrizeLogger {
    (str:string):void;
}

function prize(str:string) {
    console.log(str)
}

interface Workers {
    id:number;
    Name:string;
    surname:string;
    available:boolean;
    salary:number;
    category:Category;
    markPrize:PrizeLogger;
}

function getAllworkers() {
    const workers:Workers[] = [
        {
        id: 1, 
        Name: 'Ivan', 
        surname: 'Ivanov', 
        available: true, salary: 1000, 
        category: Category.BusinessAnalyst2, 
        markPrize:prize},
        {
        id: 2, 
        Name: 'Petro', 
        surname: 'Petrov', 
        available: true, 
        salary: 1500, 
        category: Category.BusinessAnalyst2, 
        markPrize:prize},
        {
        id: 3, 
        Name: 'Vasyl', 
        surname: 'Vasyliev', 
        available: false, 
        salary: 1600, 
        category: Category.ScrumMaster2, 
        markPrize:prize},
        {
        id: 4, 
        Name: 'Evgen', 
        surname: 'Zhukov', 
        available: true, 
        salary: 1300, 
        category: Category.Developer2, 
        markPrize:prize}
    ]
    return workers;
}
 
function getWorkerByID2 (id:number) {
    return getAllworkers().find(el => el.id==id)
}

function printWorker(worker:Workers) {
    console.log(`${worker.Name} ${worker.surname} got salary ${worker.salary}`)
}

const logPrize:PrizeLogger = prize;
console.log(logPrize("Hello World"));

interface Person {
    name:string;
    email:string;
}

interface Author extends Person {
    numBooksPublished:number;
}

interface Librarian extends Person {
    department:string;
    assistCustomer(custName:string):void;
}

const favoriteAuthor:Author = {
    name:"Glebber", email:"Glebber72@gmail.com", numBooksPublished:2
}

class UniversityLibrarian implements Librarian {
    name:string;
    email:string;
    department:string;

    assistCustomer(custName:string):void {
        console.log(`${this.name} is assisting ${custName}`);
    }

}

const favoriteLibrarian:Librarian = new UniversityLibrarian();
favoriteLibrarian.name = "Kazbek";
favoriteLibrarian.assistCustomer("Vazgen")

abstract class ReferenceItem {
    // title:string;
    // year:number;
    // constructor(newTitle:string, newYear:number)
    // {
    //     this.title = newTitle;
    //     this.year = newYear;
    //     console.log("Creating new ReferenceItem....")
    // }

    private __publisher:string;
    static department:string = "Department1";

    publisherGetter():string {
        return this.__publisher.toUpperCase();
    }

    publisherSetter(newPublisher:string):void {
        this.__publisher = newPublisher;
    }

    constructor(public title:string, protected year:number){}

    printItem() {
        console.log(`${this.title} was published in ${this.year} by ${ReferenceItem.department}`);
    }

    abstract printCitation():void;

}

class Encyclopedia extends ReferenceItem {

    constructor(title:string, year:number, public edition:number) {
        super(title, year);
    }

    printItem() {
        console.log(`${this.title} was published in ${this.year} by ${ReferenceItem.department}`);
        console.log(`Edition: edition (${this.edition})`);
    }

    printCitation() {
        console.log("title - year");
    }
}

// let ref = new ReferenceItem("hello", world);
// ref.publisherSetter("Something");
// ref.printItem();
// console.log(ref.publisherGetter());

const refBook = new Encyclopedia("Information", 2021, 4);
refBook.printItem();
