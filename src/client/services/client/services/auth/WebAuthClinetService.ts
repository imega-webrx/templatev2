import { CheckAutenticationResponseModel, LoginWithPasswordRequestModel, LoginWithPasswordResponseModel } from 'types';
import { BaseAuthClientService } from './BaseAuthClientService';

export class WebAuthClientService extends BaseAuthClientService {
    private readonly token?: string;
    private readonly url: string;

    constructor(url: string, token?: string) {
        super();

        if (token) {
            this.token = token;
        }

        this.url = url;
    }

    public readonly loginWithPassword = (model: LoginWithPasswordRequestModel): Promise<LoginWithPasswordResponseModel> =>
        fetch(`${this.url}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(model),
        }).then((response) => this.parseResponse(response));

    public readonly checkAuthentication = (): Promise<CheckAutenticationResponseModel> =>
        fetch(`${this.url}/auth/login/token/check/`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${this.token}`,
            },
        }).then((response) => this.parseResponse(response));
}
