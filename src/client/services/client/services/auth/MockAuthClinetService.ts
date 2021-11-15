import { CheckAutenticationResponseModel, LoginWithPasswordRequestModel, LoginWithPasswordResponseModel } from 'types';
import * as data from './data';
import { BaseAuthClientService } from './BaseAuthClientService';

export class MockAuthClientService extends BaseAuthClientService {
    public readonly loginWithPassword = async (model: LoginWithPasswordRequestModel): Promise<LoginWithPasswordResponseModel> => {
        console.log('loginWithPassword request model', model);
        return this.parseMockResponse<LoginWithPasswordResponseModel>(data.profile);
    };

    public readonly checkAuthentication = async (): Promise<CheckAutenticationResponseModel> => {
        console.log('checkAuthentication');
        return this.parseMockResponse<LoginWithPasswordResponseModel>(data.profile);
    };
}
