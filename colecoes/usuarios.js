function getAdmins(map) {
    let admins = [];
    for([key,value] of map){
        if(value==='Admin'){
            admins.push(key);
        }    }
        return admins;
    }

    function getUsers(map) {
        let users = [];
        for([key,value] of map){
            if(value==='User'){
                users.push(key);
            }    }
            return users;
        }

    const usuarios = new Map();

    usuarios.set('Luiz', 'Admin');
    usuarios.set('Maria', 'Admin');
    usuarios.set('Carla', 'User');
    usuarios.set('Rafael', 'Admin');

    console.log(`Os usuários com perfil de Admin são:`);
    console.log(getAdmins(usuarios));
    console.log(`Os usuários com perfil de User são:`);
    console.log(getUsers(usuarios));
