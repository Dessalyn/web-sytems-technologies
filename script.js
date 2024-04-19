
const users = [

];


function addUser(name, email, role) {
  const newUser = {
    id: users.length + 1,
    name,
    email,
    role
  };
  users.push(newUser);
  renderUserList();
}


function editUser(accountForm) {

}


function deleteUser(userId) {
  const userIndex = users.findIndex(user => user.id === userId);
  if (userIndex !== -1) {
    users.splice(userIndex, 1);
    renderUserList();
  }
}



function renderUserList() {
  const userListElement = document.getElementById('userList');
  userListElement.innerHTML = '';
  users.forEach(user => {
    userListElement.innerHTML += `
      <tr>
        <td class="px-6 py-4 whitespace-nowrap">${user.id}</td>
        <td class="px-6 py-4 whitespace-nowrap">${user.name}</td>
        <td class="px-6 py-4 whitespace-nowrap">${user.email}</td>
        <td class="px-6 py-4 whitespace-nowrap">${user.role}</td>
        <td class="border p-2 place-content-center">
        <button class="text-blue-500 hover:underline mr-2" onclick="editUser(${user.id})">
            <i class="fas fa-edit"></i> 
        </button>
        <button class="text-red-500 hover:underline" onclick="deleteUser(${user.id})">
            <i class="fas fa-trash-alt"></i>
        </button>
        </td>
      </tr>
    `;
  });
}


document.getElementById('accountForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const name = event.target.elements.name.value;
  const email = event.target.elements.email.value;
  const role = event.target.elements.role.value;
  addUser(name, email, role);

  userList.appendChild(appendNewRow)
});



