import axios from 'axios'
import { dbIp } from './config.js'
var ip = dbIp

export function getVideo (){
    return axios({
        method: "get",
        url: ip+"/video/getList",
        params: {}
    });
}

export function getVideoById (id){
    return axios({
        method: "get",
        url: ip+"/video/getById",
        params: { id }
    });
}
