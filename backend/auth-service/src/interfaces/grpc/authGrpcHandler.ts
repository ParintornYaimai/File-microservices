import { buildLoginUser, buildRegisterUser } from "../../container.js";

export function buildAuthGrpcHandler() {
    const loginUser = buildLoginUser();
    const registerUser = buildRegisterUser();

    return {
        async Login(call: any, callback: any) {
            try {
                const res = await loginUser.execute(call.request);
                callback(null, res);
            } catch (err) {
                callback(err);
            }
        },

        async Register(call: any, callback: any) {
            try {
                const res = await registerUser.execute(call.request);
                callback(null, res);
            } catch (err) {
                callback(err);
            }
        },
    };
}