var Category;
(function (Category) {
    Category["BusinessAnalyst"] = "Business analyst";
    Category["Developer"] = "Developer";
    Category["Designer"] = "Designer";
    Category["QA"] = "QA";
    Category["ScrumMaster"] = "Scrum master";
})(Category || (Category = {}));
var getAllWorkers = function () {
    var workers = [
        {
            id: "1",
            Name: "Ivan",
            surname: "Ivanov",
            available: true,
            salary: 1000,
            category: Category.Developer
        },
        {
            id: "2",
            Name: "Petro",
            surname: "Petrov",
            available: true,
            salary: 1500,
            category: Category.Designer
        },
        {
            id: "3",
            Name: "Vasyl",
            surname: "Vasyliev",
            available: false,
            salary: 1600,
            category: Category.Developer
        },
        {
            id: "4",
            Name: "Evgen",
            surname: "Zhukov",
            available: true,
            salary: 1300,
            category: Category.Developer
        },
    ];
    return workers;
};
var logFirstAvailable = function (workers) {
    if (workers === void 0) { workers = getAllWorkers(); }
    console.log("Quantity of workers in array:  " + (workers === null || workers === void 0 ? void 0 : workers.length));
    for (var _i = 0, workers_1 = workers; _i < workers_1.length; _i++) {
        var person = workers_1[_i];
        console.log((person === null || person === void 0 ? void 0 : person.Name) + " " + (person === null || person === void 0 ? void 0 : person.surname));
    }
};
logFirstAvailable(getAllWorkers());
console.log();
var getWorkersNamesByCategory = function (workers, category) {
    if (category === void 0) { category = Category.Designer; }
    var output = [];
    workers.forEach(function (worker) { return (worker === null || worker === void 0 ? void 0 : worker.category) === category && output.push(worker.surname); });
    return output;
};
var logWorkersNames = function (array) {
    array.forEach(function (e) { return console.log(e); });
};
getAllWorkers().forEach(function (worker) {
    (worker === null || worker === void 0 ? void 0 : worker.category) === Category.Developer &&
        console.log((worker === null || worker === void 0 ? void 0 : worker.Name) + " " + (worker === null || worker === void 0 ? void 0 : worker.surname));
});
var getWorkerByID = function (workers, id) {
    var result = workers.find(function (worker) { return worker.id === id; });
    return {
        Name: result.Name || "No data",
        Surname: result.surname || "No data",
        Salary: result.salary || "No data"
    };
};
var createCustomerID = function (name, id) {
    return name.concat(id.toString());
};
console.log();
var myId = createCustomerID("Ann", 10);
console.log(myId);
console.log();
var IdGenerator = createCustomerID;
var createCustomer = function (name, age, city) {
    console.log("Name: " + name);
    age && console.log("Age: " + age);
    city && console.log("City: " + city);
    console.log();
};
createCustomer("Derek", 19);
createCustomer("Steven", "", "");
createCustomer("Brian", 27, "Toronto");
// getWorkersNamesByCategory(getAllWorkers());
console.log();
var сheckoutWorkers = function (customer, workerIDs, workers) {
    if (workers === void 0) { workers = getAllWorkers(); }
    console.log("Customer :", customer);
    var returnArray = [];
    var Ids = workerIDs.map(function (e) {
        if (typeof e === "number") {
            return e.toString();
        }
        return e;
    });
    workers.forEach(function (e) {
        if (Ids.includes(e.id) && e.available) {
            returnArray.push(getWorkerByID(workers, e.id));
        }
    });
    return returnArray;
};
var myWorkers = сheckoutWorkers("Ann", [1, 2, 4]);
console.log(myWorkers);
