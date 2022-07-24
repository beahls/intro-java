// // Como podemos melhorar o esse código usando TS? 
// let pessoa1 = {};
// pessoa1.nome = "maria";
// pessoa1.idade = 29;
// pessoa1.profissao = "atriz"
// let pessoa2 = {}
// pessoa2.nome = "roberto";
// pessoa2.idade = 19;
// pessoa2.profissao = "Padeiro";
// let pessoa3 = {
//     nome: "laura",
//     idade: "32",
//     profissao: "Atriz"
// };
// let pessoa4 = {
//     nome = "carlos",
//     idade = 19,
//     profissao = "padeiro"
// } 
var Job;
(function (Job) {
    Job[Job["Actress"] = 0] = "Actress";
    Job[Job["Baker"] = 1] = "Baker";
})(Job || (Job = {}));
var person1 = {
    name: 'Mary',
    age: 29,
    occupation: Job.Actress
};
var person2 = {
    name: 'Robert',
    age: 19,
    occupation: Job.Baker
};
var person3 = {
    name: 'Laura',
    age: 32,
    occupation: Job.Actress
};
var person4 = {
    name: "Carl",
    age: 19,
    occupation: Job.Baker
};
console.log(person1, person2, person3, person4);
