import { selector } from "recoil";
import { dataState } from "../atoms/data";

export const nameState = selector({
    key: 'nameState',
    get: ({ get }) => {
        const data = get(dataState);
        return data.name;
    }
});

export const passwordState = selector({
    key: 'passwordState',
    get: ({get}) => {
        const data = get(dataState);
        return data.password;
    }
});

export const emailState = selector({
    key: 'emailState',
    get: ({get}) => {
        const data = get(dataState);
        return data.email;
    }
});

export const percentState = selector({
    key: 'percentState',
    get: ({get}) => {
        const data = get(dataState);
        return data.percentage;
    }
});

export const adminState = selector({
    key: 'adminState',
    get: ({get}) => {
        const data = get(dataState);
        return data.isAdmin;
    }
});