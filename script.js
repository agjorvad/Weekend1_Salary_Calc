class Employee{
    constructor(firstName, lastName, id, title, salary){
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
    this.title = title;
    this.salary = salary;
}
}

employees = [];

$(document).ready(function(){
    $('#submitButton').on( 'click', addNewEmployee);
    $('#submitButton').on( 'click', annualSalary);
});

function addNewEmployee(){
    $('#employeeList').append(
        '<tr>' +
        '<td>' + $("#newFirstName").val() + '</td>' +
        '<td>' + $("#newLastName").val() + '</td>' +
        '<td>' + $("#newID").val() + '</td>' +
        '<td>' + $("#newTitle").val() + '</td>' +
        '<td>' + '$' + $("#newAnnualSalary").val() + '</td>' +
        '<td>' + '<button class="deleteButton">Delete</button>' + '</td>' +
    '</tr>');
    addArray();
}

let expenditures = 0;

function annualSalary(){
    let salary = $('#newAnnualSalary').val();
    let month = salary / 12; 
    expenditures += month;
    $('#monthlyExpenditures').text( 'Total Monthly: ' + '$' + expenditures.toFixed(2));
    if (expenditures > 20000){
        $('#monthlyExpenditures').css( 'color', 'red');
    }

$('#employeeList').on( 'click', '.deleteButton', function(){
    console.log( 'Delete button was clicked.');
    $(this).closest('tr').remove();
});
}

function addArray(){
let newEmployee = new Employee($("#newFirstName").val(), $("#newLastName").val(), $("#newID").val(), $("#newTitle").val(), $("#newAnnualSalary").val());
    employees.push( newEmployee );
    console.log( employees );
}