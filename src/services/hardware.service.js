const axios = require('axios')

export async function getDataById(userid){
    const { data } =  await axios.get(`https://zeedzero-hardware.herokuapp.com/users/${userid}`)
    return data
}

export async function updateLEDById(userid,value){
    console.log("Update LED")
    const result = await axios.put(`https://zeedzero-hardware.herokuapp.com/users/${userid}/update`,{
        'led': Number(value)
    })
    return result
}
