const {
    v1: uuidv1,
    v4: uuidv4,
} = require('uuid');
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const UsersShema = new mongoose.Schema({
    user_id: String,
    user_name: String,
    password: String,
    email: String,
    phone: Number,
    url: String,
    calls: [{
        id: String
    }]
})
const UsersModel = mongoose.model('Users', UsersShema,'Calmar');
const user = new UsersModel();



const connection = async () => {
    try {
        await mongoose.connect('mongodb+srv://Admin:Kot007kot@calmar.hsdtwcq.mongodb.net/?retryWrites=true&w=majority');
        console.log('Connection True');
    } catch (error) {
        console.log('Ошибка с подключением');
        console.log(error);
    }

    
}

const closeConnection = async () => {
    await mongoose.connection.close();
    console.log('Server Closed!');
}

async function createUser(userData){
    // await connection();
    const user = new UsersModel({
        user_id : uuidv1(),
        user_name : userData.name,
        password : userData.password,
        email : userData.email,
        phone : userData.phone,
        url: userData.url
    })
    await user.save()
    .then(console.log('User Saved!'));
}

async function loginUser(email, password) {
    try {
      const user = await UsersModel.findOne({ email: email, password: password });
      if (user) {
        console.log(user);
        return user;
      } else {
        return null;
        console.log("Неправильное имя пользователя или пароль.");
      }
    } catch (error) {
      console.error(error);
    }
  }

const findUserByEmail = async (email) =>  {
    let countFindedUsers = await UsersModel.find({email: email})
    console.log(await UsersModel.find({email: email}));
    console.log(countFindedUsers.length);
    if(countFindedUsers.length == 0) {
        return true;
    }
    else{
        return false;
    }
   
}
const deleteUser = async() => {
    await UsersModel.remove();
}





module.exports = ObjDatabase = {
    closeConnection: closeConnection,
    createUser: createUser,
    loginUser: loginUser,
    // findUser: findUser,
    findUserByEmail: findUserByEmail,
    // updateUser: updateUser,
    deleteUser: deleteUser
};