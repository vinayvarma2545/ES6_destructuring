// // employee details in the form of an array...
// let employee_details = ["Rohit", 1211, "Software Engineer"];

// // Function made to retrieve the employee's data
// // by using Parameter Destructuring...
// let getDetails = ([name,id,designation]) => {
// console.log(
//  `Employee's name : ${name} , Employee's ID: ${id}, Employee's Designation: ${designation}`
// );
// };

// getDetails(employee_details);



const emp = ['vinay',808,'engineer'];
function Details([name,id,designation,companyName='cgcs'])
{
    console.log(`name:${name},
id:${id},
designation:${designation},
company:${companyName}`)
}
Details(emp);


// const person = ['Rohit', 1211, 'Software Engineer'];
 
// // companyName is assigned a default value
// function getDetails([name, id, designation,companyName = 'ABCTech']) 

// {
//     console.log(`Employee name: ${name},
// Employee ID: ${id},
// Designation: ${designation},
// Company: ${companyName}`
//     );
// }
// getDetails(person);