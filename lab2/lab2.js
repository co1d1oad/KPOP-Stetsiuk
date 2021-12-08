var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Category;
(function (Category) {
    Category["BusinessAnalyst2"] = "Business analyst";
    Category["Developer2"] = "Developer";
    Category["Designer2"] = "Designer";
    Category["QA2"] = "QA";
    Category["ScrumMaster2"] = "Scrum master";
})(Category || (Category = {}));
function prize(str) {
    console.log(str);
}
function getAllworkers() {
    var workers = [
        {
            id: 1,
            Name: 'Ivan',
            surname: 'Ivanov',
            available: true, salary: 1000,
            category: Category.BusinessAnalyst2,
            markPrize: prize
        },
        {
            id: 2,
            Name: 'Petro',
            surname: 'Petrov',
            available: true,
            salary: 1500,
            category: Category.BusinessAnalyst2,
            markPrize: prize
        },
        {
            id: 3,
            Name: 'Vasyl',
            surname: 'Vasyliev',
            available: false,
            salary: 1600,
            category: Category.ScrumMaster2,
            markPrize: prize
        },
        {
            id: 4,
            Name: 'Evgen',
            surname: 'Zhukov',
            available: true,
            salary: 1300,
            category: Category.Developer2,
            markPrize: prize
        }
    ];
    return workers;
}
function getWorkerByID2(id) {
    return getAllworkers().find(function (el) { return el.id == id; });
}
function printWorker(worker) {
    console.log(worker.Name + " " + worker.surname + " got salary " + worker.salary);
}
var logPrize = prize;
console.log(logPrize("Hello World"));
var favoriteAuthor = {
    name: "Glebber", email: "Glebber72@gmail.com", numBooksPublished: 2
};
var UniversityLibrarian = /** @class */ (function () {
    function UniversityLibrarian() {
    }
    UniversityLibrarian.prototype.assistCustomer = function (custName) {
        console.log(this.name + " is assisting " + custName);
    };
    return UniversityLibrarian;
}());
var favoriteLibrarian = new UniversityLibrarian();
favoriteLibrarian.name = "Kazbek";
favoriteLibrarian.assistCustomer("Vazgen");
var ReferenceItem = /** @class */ (function () {
    function ReferenceItem(title, year) {
        this.title = title;
        this.year = year;
    }
    ReferenceItem.prototype.publisherGetter = function () {
        return this.__publisher.toUpperCase();
    };
    ReferenceItem.prototype.publisherSetter = function (newPublisher) {
        this.__publisher = newPublisher;
    };
    ReferenceItem.prototype.printItem = function () {
        console.log(this.title + " was published in " + this.year + " by " + ReferenceItem.department);
    };
    ReferenceItem.department = "Department1";
    return ReferenceItem;
}());
var Encyclopedia = /** @class */ (function (_super) {
    __extends(Encyclopedia, _super);
    function Encyclopedia(title, year, edition) {
        var _this = _super.call(this, title, year) || this;
        _this.edition = edition;
        return _this;
    }
    Encyclopedia.prototype.printItem = function () {
        console.log(this.title + " was published in " + this.year + " by " + ReferenceItem.department);
        console.log("Edition: edition (" + this.edition + ")");
    };
    Encyclopedia.prototype.printCitation = function () {
        console.log("title - year");
    };
    return Encyclopedia;
}(ReferenceItem));
// let ref = new ReferenceItem("hello", world);
// ref.publisherSetter("Something");
// ref.printItem();
// console.log(ref.publisherGetter());
var refBook = new Encyclopedia("Information", 2021, 4);
refBook.printItem();
