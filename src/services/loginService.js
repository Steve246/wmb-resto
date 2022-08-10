import {userCredential} from "../model/userCredential";

const adminUserCredential = userCredential('admin@gmail.com', '123456');

export function loginService() {
    const authenticate = function (userCredential) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (userCredential.username === adminUserCredential.username && userCredential.password === adminUserCredential.password) {
                    resolve(true)
                } else {
                    reject('Unauthenticated')
                }
            }, 2000)
        })
    }

    return {
        authenticate
    }
}
