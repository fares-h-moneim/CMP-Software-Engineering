function fetchEmployees() {
  fetch('http://localhost:3000/api/v1/employee')
    .then(response => response.json())
    .then(data => {
      const tableBody = document.getElementById('dataTable')
      tableBody.innerHTML = ''
      const list = data.data
      list.forEach(item => {
        const row = document.createElement('tr')
        const idCell = document.createElement('td')
        idCell.textContent = item.id
        row.appendChild(idCell)

        const nameCell = document.createElement('td')
        nameCell.textContent = item.name
        row.appendChild(nameCell)

        const deleteCell = document.createElement('td')
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('btn', 'btn-danger', 'btn-sm');
        
        // Add event listener to the delete button
        deleteButton.addEventListener('click', () => deleteEmployee(item.id, deleteButton));
        
        deleteCell.appendChild(deleteButton);

        row.appendChild(deleteCell)

        tableBody.appendChild(row)
      })
    })
    .catch(error => console.error(error))
}

// DONE
// 1. Add event listener to the submit button
document.querySelector('button[type = "submit"]').addEventListener('click', createEmployee);

// DONE
// Check line 24

// DONE
function createEmployee (){
  const name = document.getElementById('name').value;
  const id = document.getElementById('id').value;

  try{
    const response = fetch('http://localhost:3000/api/v1/employee', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({"id": id, "name": name})
    });
    console.log(response);
  }
  catch(error){
    console.error(error);
  }
}

// TODO
function deleteEmployee (id, button){
  const response = fetch(`http://localhost:3000/api/v1/employee/${id}`, {
    method: 'DELETE',
  });
  console.log(response);

  // Remove the row from the table
  const row = button.parentElement.parentElement;
  row.remove();
}

fetchEmployees()