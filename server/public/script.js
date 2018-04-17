let expenditures = 0;
employees = [];

class Employee{
    constructor(firstName, lastName, id, title, salary){
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
    this.title = title;
    this.salary = salary;
}
}

$(document).ready(function(){
    $('#submitButton').on( 'click', addNewEmployee);
    $('#submitButton').on( 'click', calculateAnnualSalary);
});

function addNewEmployee(){
    $('#employeeList').append(
        '<tr>' +
        '<td>' + $("#newFirstName").val() + '</td>' +
        '<td>' + $("#newLastName").val() + '</td>' +
        '<td>' + parseInt($("#newID").val()) + '</td>' +
        '<td>' + $("#newTitle").val() + '</td>' +
        '<td>' + '$' + parseInt($("#newAnnualSalary").val()) + '</td>' +
        '<td>' + '<button class="deleteButton">Delete</button>' + '</td>' +
    '</tr>');
    $('#employeeList tr:last').data(employee);
    addArray();

function calculateAnnualSalary(){
    let salary = $('#newAnnualSalary').val();
    let month = salary / 12; 
    expenditures += month;
    $('#monthlyExpenditures').text( 'Total Monthly: ' + '$' + expenditures.toFixed(2));
    if (expenditures > 20000){
        $('#monthlyExpenditures').css( 'color', 'red');
    }

$('#employeeList').on( 'click', '.deleteButton', function(){
    console.log( 'Delete button was clicked.');
    let employeeList = $('#employeeList');
    $(this).closest('tr').remove();
});
}

function addArray(){
let newEmployee = new Employee($("#newFirstName").val(), $("#newLastName").val(), parseInt($("#newID").val()), $("#newTitle").val(), parseInt($("#newAnnualSalary").val()));
    employees.push( newEmployee );
    console.log( employees );
}

function deleteEmployee(){
    console.log('Clicked on', $(this));
    const rowToDelete = $(this).closest('tr');
    console.log('Row to delete', rowToDelete);
    const employeeToDelete = rowToDelete.data();
    console.log('Employee to delete', employeeToDelete);
    rowToDelete.remove();
  
    //Remove the employee from the array
    for(let i=0; i<employeeList.length; i++){
      let current = employeeList[i];
      if (current.id == employeeToDelete.id){
        employeeList.splice(i, 1);
      }
    }
}