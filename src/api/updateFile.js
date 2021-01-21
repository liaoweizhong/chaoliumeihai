import axios from 'axios'
import { dbIp } from './config.js'
var ip = dbIp

export function addVideo (param){
    return axios({
        method: "post",
        url: ip+"/video/add",
        data: {
            name: param.name,
            path: param.path,
            master: param.master,
            image: param.image,
            info: param.info
        }
    });
}

export function updateVideo (param){
    return axios({
        method: "post",
        url: ip+"/video/updateVideo",
        data: {
            "name": param.name,
            "id": param.id,
            "base64": param.base64,
            "length":param.length,
            "index": param.index
        }
    });
}

export function mergeVideo (param){
    return axios({
        method: "get",
        url: ip+"/video/mergeVideo",
        params: {
            id: param.id
        }
    });
}