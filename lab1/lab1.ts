enum Category {
  BusinessAnalyst = "Business analyst",
  Developer = "Developer",
  Designer = "Designer",
  QA = "QA",
  ScrumMaster = "Scrum master",
}

type worker = {
  Name: string;
  id: string;
  surname: string;
  available: boolean;
  salary: number;
  category: Category;
};

const getAllWorkers = (): worker[] => {
  const workers = [
    {
      id: "1",
      Name: "Ivan",
      surname: "Ivanov",
      available: true,
      salary: 1000,
      category: Category.Developer,
    },
    {
      id: "2",
      Name: "Petro",
      surname: "Petrov",
      available: true,
      salary: 1500,
      category: Category.Designer,
    },
    {
      id: "3",
      Name: "Vasyl",
      surname: "Vasyliev",
      available: false,
      salary: 1600,
      category: Category.Developer,
    },
    {
      id: "4",
      Name: "Evgen",
      surname: "Zhukov",
      available: true,
      salary: 1300,
      category: Category.Developer,
    },
  ];
  return workers;
};

const logFirstAvailable = (workers: worker[] = getAllWorkers()): void => {
  console.log(`Quantity of workers in array:  ${workers?.length}`);
  for (const person of workers) {
    console.log(`${person?.Name} ${person?.surname}`);
  }
};
logFirstAvailable(getAllWorkers());

console.log()

const getWorkersNamesByCategory = (
  workers: worker[],
  category: Category = Category.Designer
): string[] => {
  const output: string[] = [];
  workers.forEach(
    (worker) => worker?.category === category && output.push(worker.surname)
  );
  return output;
};

const logWorkersNames = (array: string[]): void => {
  array.forEach((e) => console.log(e));
};

getAllWorkers().forEach((worker) => {
  worker?.category === Category.Developer &&
    console.log(`${worker?.Name} ${worker?.surname}`);
});

const getWorkerByID = (workers: worker[], id: string): {} => {
  const result = workers.find((worker) => worker.id === id);
  return {
    Name: result.Name || "No data",
    Surname: result.surname || "No data",
    Salary: result.salary || "No data",
  };
};

const createCustomerID = (name: string, id: string | number): string => {
  return name.concat(id.toString());
};

console.log()
const myId = createCustomerID("Ann", 10);
console.log(myId);

console.log()

const IdGenerator = createCustomerID;

const createCustomer = (
  name: string,
  age?: number | string,
  city?: string
): void => {
  console.log(`Name: ${name}`);
  age && console.log(`Age: ${age}`);
  city && console.log(`City: ${city}`);
  console.log()
};

createCustomer("Derek", 19);
createCustomer("Steven", "", "");
createCustomer("Brian", 27, "Toronto");

// getWorkersNamesByCategory(getAllWorkers());

console.log()

const сheckoutWorkers = (
  customer: string,
  workerIDs: number[],
  workers: worker[] = getAllWorkers()
) => {
  console.log("Customer :", customer);
  const returnArray: object[] = [];
  const Ids = workerIDs.map((e) => {
    if (typeof e === "number") {
      return e.toString();
    }
    return e;
  });
  workers.forEach((e) => {
    if (Ids.includes(e.id) && e.available) {
      returnArray.push(getWorkerByID(workers, e.id));
    }
  });
  return returnArray;
};

const myWorkers = сheckoutWorkers("Ann", [1, 2, 4])
console.log(myWorkers);
