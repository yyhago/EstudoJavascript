// Desafio de Coleções Chaveadas da plataforma de estudo DIO

function getAdmins(usersMap){
  let admins = []


  for(const [username, role] of usersMap){
    if(role === 'Admin'){
      admins.push(username);
    }
  }

  return admins;
}

const userRolesMap = new Map([
  ['Henrique', 'Admin'],
  ['Yhago', 'Admin'],
  ['Felipe', 'User'],
  ['Gabriel', 'Admin']
]);

const adminUsers = getAdmins(userRolesMap);
console.log(adminUsers)