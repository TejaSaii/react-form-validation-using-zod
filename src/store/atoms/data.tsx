import { atom } from "recoil";

export const dataState = atom({
    key: 'dataState',
    default:
    {
        name: '',
        password: '',
        email: '',
        percentage: 0,
        isAdmin: false
    }
})