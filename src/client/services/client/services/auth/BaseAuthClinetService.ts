import { CheckAutenticationResponseModel, LoginWithPasswordRequestModel, LoginWithPasswordResponseModel } from 'types';
import { BaseService } from '../BaseService';

export abstract class BaseAuthClientService extends BaseService {
    public abstract loginWithPassword(model: LoginWithPasswordRequestModel): Promise<LoginWithPasswordResponseModel>;

    public abstract checkAuthentication(): Promise<CheckAutenticationResponseModel>;
}
