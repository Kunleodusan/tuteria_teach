/**
 * Created by kunle on 9/3/17.
 */
import axios from 'axios';

//const baseUrl='http://localhost:4040';
const baseUrl='https://my-json-server.typicode.com/kunleodusan/tuteria_api';

export function apiPost(url,params,header){
    if(typeof header==='undefined'){
        header={}
    }
    header['Content-Type']="application/json";
    return axios({
        method:'post',
        url: url,
        headers:header,
        data:params,
        baseURL:baseUrl
    });
}
//@todo fix other functions
export function apiGet(url,params,header){
    //console.log('get request');
    //console.log(header);

    return axios({
        method:'get',
        url: url,
        headers:header,
        data:params,
        baseURL:baseUrl
    });
}
export function apiPut(url,params,header){
    return axios({
        method:'put',
        url: url,
        headers:header,
        data:params,
        baseURL:baseUrl
    });
}
export function apiDelete(url,params){
    return axios({
        method:'delete',
        url: url,
        headers:{ContentType: "application/json"},
        data:params,
        baseURL:baseUrl
    });
}