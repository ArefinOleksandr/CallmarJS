const mongoose = require('mongoose');

const AccountSchema = new mongoose.Schema({
    userId : String,
    dateTariff: Date,
    userEmail: String,
    calls: [{
        number: Number,
        sites: String,
        dateCall: Date,
        timeCall: Date,
        numberClient: String,
        numberManager: String,
    }]
})

const AccountModel = mongoose.model('Account', AccountSchema, 'AccountData')
const account = new AccountModel();

const getAllData = async (data) => {

}

const getCalls = async (data) => {
    const result = await AccountModel.findOne({userId: data.id});
    console.log(result.calls)
    return result;
}

const getCallsToday = async(id) => {
    return getCallsAtDay(new Date(Date.now()), await AccountModel.findOne({userId: id}));
}


const getCallsYesturday = async (id) => {
    const calls = getCallsAtDay(new Date(Date.now() - 86400000), await AccountModel.findOne({userId: id}));
    console.log(calls);
    return calls;
}
const getCallsLastWeek = async () => {

}
const getCallsAtDay = async (date, user) => {
    let calls = user.calls.filter(e => e.dateCall.getDate = date.getDate);
    return calls;
}

const setCalls = async (data) => {

    const countUser = await AccountModel.find({userId : data.id})
    if(countUser.length !== 0){
        await AccountModel.findOneAndUpdate({
            userId: data.id
        },{
            $push : {
                calls : {
                    
                    number : data.number,
                    sites : data.sites,
                    dateCall : new Date(data.dateCall),
                    timeCall : new Date(data.timeCall),
                    numberClient : data.numberClient,
                    numberManager : data.numberManager
                    
                }
            }
        })
    }
    else{
        account.userId = data.id;
        account.userEmail = data.email;
        await account.save();
        setCalls(data);
        
    }
    
}




const setDateTariff = async (date, id) => {
    const newDate = new Date(date);
    await AccountModel.findOneAndUpdate({userId: id}, {dateTariff: newDate});
}





module.exports = {
    setDateTariff: setDateTariff,
    getAllData : getAllData,
    getCalls : getCalls,
    getCallsToday: getCallsToday,
    getCallsYesturday: getCallsYesturday,
    getCallsLastWeek: getCallsLastWeek,
    setCalls : setCalls
}