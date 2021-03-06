console.log('Javascript has loaded');

const maxBudget = 20000;
let currentEmployees = [];
let employeeAddId = 0;
let uniqueId = true;

class Employee {
    constructor () {
        this.firstName = $('#firstNameInput').val();
        this.lastName = $('#lastNameInput').val();
        this.employeeId = $('#employeeIdInput').val();
        this.title = $('#employeeTitleInput').val();
        this.annualSalary = $('#annualSalaryInput').val();
        this.monthlySalary = this.annualSalary / 12;
        this.employeeAddId = employeeAddId;
    }
}

$(document).ready(onReady);

function onReady () {
    console.log('jQuery has loaded');
    $('#addEmployeeButton').click(addEmployeeHandler);
    $('#employeeList').on('click', '.deleteEmployeeButton',removeEmployeeHandler);
    updateMonthlyCosts();
} // end onReady


function alertSubmitter() {
    alert("Please fill out all fields!");
}

function addEmployeeHandler () {
    console.log('addEmployeeButton clicked');
    verifyUniqueId();
    if ( uniqueId ) {
        addNewEmployee();
        updateMonthlyCosts();
        clearInputs(); 
    }
    else {
        $('#employeeIdInput').val('');
        $('#employeeIdInput').attr('placeholder', 'ID already exists');
        $('#employeeIdInput').css('background-color', 'lightcoral');
    }
} // end addEmployeeHandler

function addNewEmployee () {
    let firstName = '<td>' + $('#firstNameInput').val() + '</td>';
    let lastName = '<td>' + $('#lastNameInput').val() + '</td>';
    let employeeId = '<td>' + $('#employeeIdInput').val() + '</td>';
    let employeeTitle = '<td>' + $('#employeeTitleInput').val() + '</td>';
    let employeeSalary = '<td>$' + Number($('#annualSalaryInput').val()).toLocaleString('en') + '</td>';
    let removeButton = '<td><button class="deleteEmployeeButton">Delete</button>';
            // any of input fields are blank -> does not submit, requires complete inputs
            if ($('#firstNameInput').val() == '' || $('#lastNameInput').val() == '' || $('#employeeIdInput').val() == ''
            || $('#employeeTitleInput').val() == '' || $('#annualSalaryInput').val() == '') {
            alertSubmitter()
        // all input fields complete -> proceeds processing data
             } else {
            // remove empty fields warning
    currentEmployees.push(new Employee);
    $('#employeeList').append('<tr>' + firstName + lastName + employeeId + employeeTitle + employeeSalary + removeButton + '</tr>');
    $('#employeeList tr:last').data("employeeAddId", employeeAddId);
    console.log($('#employeeList tr:last').data("employeeAddId"));
    employeeAddId ++;
        }
} // end addNewEmployee

function clearInputs () {
    $('#firstNameInput').val('');
    $('#lastNameInput').val('');
    $('#employeeIdInput').val('');
    $('#employeeTitleInput').val('');
    $('#annualSalaryInput').val('');
    $('#employeeIdInput').attr('placeholder', 'ID');
    $('#employeeIdInput').css('background-color', 'white');
} // end clearInputs

function updateMonthlyCosts () {
    let totalMonthlyCosts = 0;
    for (i = 0; i<currentEmployees.length; i++) {
        totalMonthlyCosts += Number(currentEmployees[i].monthlySalary);
    }
    let monthlyCostFormatted = totalMonthlyCosts.toLocaleString('en', {minimumFractionDigits: 2}); // format monthly costs to include commas for large numbers
    $('#totalMonthlyCosts').text('Total Monthly: $' + monthlyCostFormatted);
    if (totalMonthlyCosts > maxBudget) {
        $('#totalMonthlyCosts').css('color', 'red');
    } // end if
    else {
        $('#totalMonthlyCosts').css('color', 'black');
    } // end else
} // end updateMonthlyCosts

function removeEmployeeHandler () {
    console.log('deleteEmployeeButton clicked');
    let rowData = $(this).closest('tr').data("employeeAddId");
    console.log(rowData);
    for (i = 0; i<currentEmployees.length; i++) {
        if ( currentEmployees[i].employeeAddId == rowData ) {
            totalMonthlyCosts -= currentEmployees[i].monthlySalary;
            currentEmployees.splice(i,1);
        } // end if
    } // end for
    $(this).closest('tr').remove();
    updateMonthlyCosts();
} // end removeEmployeeHandler

function verifyUniqueId () {
    for (i = 0; i<currentEmployees.length; i++) {
        if (currentEmployees[i].employeeId == $('#employeeIdInput').val()) {
            uniqueId = false;
        } // end if
        else if (currentEmployees[i].employeeId !== $('#employeeIdInput').val()) {
            uniqueId = true;
        } // end else if
    } // end for
} // end verifyUniqueId