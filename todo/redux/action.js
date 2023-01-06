import {ADD,UPDATE,DELETE} from "./actionTypes.js"

export const additem=(payload)=>({type:ADD,payload})

export const updateitem=(payload)=>({type:UPDATE,payload})

export const deletitem=(payload)=>({type:DELETE,payload})