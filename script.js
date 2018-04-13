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
    '</tr>');
}

let expenditures = 0;

function annualSalary(){
    let salary = $('#newAnnualSalary').val();
    let month = salary / 12; 
    expenditures += month;
    $('#monthlyExpenditures').text('Monthly Total: ' + expenditures);
}

function blah(){
    $("#newFirstName, #newLastName, #newID, #newTitle, #newAnnualSalary").val('');
}



