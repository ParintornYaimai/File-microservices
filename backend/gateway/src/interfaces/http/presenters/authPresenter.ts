export class AuthPresenter {
    static login(result: any) {
        return {
            accessToken: result.accessToken,
            user: {
                id: result.userId,
                firstname: result.firstname,
                lastname: result.lastname,
                email: result.email,
            },
        };
    }

    static register(result: any) {
        return {
            id: result.userId,
            email: result.email,
        };
    }
}
