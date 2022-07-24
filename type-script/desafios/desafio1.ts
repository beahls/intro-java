// Como podemos rodar isso em um arquivo .ts sem causar erros? 

// let employee = {};
// employee.code = 10;
// employee.name = "John";

interface Employee {  
    codigo: number,
    nome: string
};

const EmployeeObj: Employee = {
    codigo: 10,
    nome: 'John'
}

const EmployeeObj2: Employee = {
    codigo: 12,
    nome: 'Mary'
}

console.log(EmployeeObj, EmployeeObj2);

