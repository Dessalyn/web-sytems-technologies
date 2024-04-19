document.addEventListener("DOMContentLoaded", function() {

    const registrationForm = document.getElementById("registrationForm");
    const registrationBody = document.getElementById("registrationBody");

    registrationForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const firstName = document.getElementById('firstName');
        const lastName = document.getElementById('lastName');

        if(firstName.value == ""){
            alert("Please add first name");
            return;
        }

        if(lastName.value == ""){
            alert("Please add last name");
            return;
        }
        
        register(firstName.value, lastName.value);
        firstName.value = "";
        lastName.value = "";
    });

    registrationBody.addEventListener('click', function(event) {
        if (event.target.classList.contains('removeMe')) {
            event.target.closest('tr').remove();
        } else if(event.target.classList.contains('editMe')){
            const currentRow = event.target.closest('tr');
            document.getElementById('firstName').value = currentRow.querySelector('td:first-child').textContent;
            document.getElementById('lastName').value = currentRow.querySelector('td:nth-child(2)').textContent;
        }
    })
   

    function register(firstName, lastName){
        const appendNewRow = document.createElement('tr');
        appendNewRow.innerHTML = '<td>'+ firstName +'</td>' +
            '<td>'+ lastName +'</td>'+
            '<td> <button class="removeMe">Delete</button><button class="editMe">Edit</button> '+
            '</td>';

        registrationBody.appendChild(appendNewRow)
    }

  });

  