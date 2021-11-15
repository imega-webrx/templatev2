import {
    GetOperatorsListResponseModel,
    GetAgregatorsListResponseModel,
    GetSubscriptionTypesListResponseModel,
    GetCountriesListResponseModel,
    GetBaseTariffsSimpleListResponseModel,
    GetPartnersSimpleListResponseModel,
    GetPartnersTariffsSimpleListResponseModel,
    GetActivationsQueueResponseModel,
} from 'types';

import { BaseService } from '../BaseService';

export abstract class BaseCommonClientService extends BaseService {
    public abstract getOperatorsList(): Promise<GetOperatorsListResponseModel>;

    public abstract getAgregatorsList(): Promise<GetAgregatorsListResponseModel>;

    public abstract getSubscriptionTypesList(): Promise<GetSubscriptionTypesListResponseModel>;

    public abstract getCountriesList(): Promise<GetCountriesListResponseModel>;

    public abstract getBaseTariffsSimpleList(): Promise<GetBaseTariffsSimpleListResponseModel>;

    public abstract getPartnersTariffsSimpleList(): Promise<GetPartnersTariffsSimpleListResponseModel>;

    public abstract getPartnersSimpleList(): Promise<GetPartnersSimpleListResponseModel>;

    public abstract getActivationsQueue(): Promise<GetActivationsQueueResponseModel>;
}
