export interface Profile {
    id: number;
    email: string;
    firstname: string;
    lastname: string;
    tokenExpired: number;
    token: string;
}

export interface LoginWithPasswordRequestModel {
    email: string;
    password: string;
}
