import * as data from './data';
import { BaseCommonClientService } from './BaseCommonClientService';
import {
    GetOperatorsListResponseModel,
    GetAgregatorsListResponseModel,
    GetSubscriptionTypesListResponseModel,
    GetCountriesListResponseModel,
    GetPartnersSimpleListResponseModel,
    GetBaseTariffsSimpleListResponseModel,
    GetPartnersTariffsSimpleListResponseModel,
    GetActivationsQueueResponseModel,
} from 'types';

export class MockCommonClientService extends BaseCommonClientService {
    public readonly getOperatorsList = (): Promise<GetOperatorsListResponseModel> => {
        console.log('getOperatorsList');
        return this.parseMockResponse<GetOperatorsListResponseModel>(data.operatorsList);
    };

    public readonly getAgregatorsList = (): Promise<GetAgregatorsListResponseModel> => {
        console.log('getAgregatorsList');
        return this.parseMockResponse<GetAgregatorsListResponseModel>(data.agregatorsList);
    };

    public readonly getSubscriptionTypesList = (): Promise<GetSubscriptionTypesListResponseModel> => {
        console.log('getSubscriptionTypesList');
        return this.parseMockResponse<GetSubscriptionTypesListResponseModel>(data.subscriptionTypesList);
    };

    public readonly getCountriesList = (): Promise<GetCountriesListResponseModel> => {
        console.log('getCountriesList');
        return this.parseMockResponse<GetCountriesListResponseModel>(data.countriesListList);
    };

    public readonly getBaseTariffsSimpleList = (): Promise<GetBaseTariffsSimpleListResponseModel> => {
        console.log('getBaseTariffsSimpleList');
        return this.parseMockResponse<GetBaseTariffsSimpleListResponseModel>(data.baseTariffsSimpleList);
    };

    public readonly getPartnersTariffsSimpleList = (): Promise<GetPartnersTariffsSimpleListResponseModel> => {
        console.log('getPartnersTariffsSimpleList');
        return this.parseMockResponse<GetPartnersTariffsSimpleListResponseModel>(data.partnersTariffsSimpleList);
    };

    public readonly getPartnersSimpleList = (): Promise<GetPartnersSimpleListResponseModel> => {
        console.log('getPartnersSimpleList');
        return this.parseMockResponse<GetPartnersSimpleListResponseModel>(data.partnersSimpleList);
    };

    public readonly getActivationsQueue = (): Promise<GetActivationsQueueResponseModel> => {
        console.log('getActivationsQueue');
        return this.parseMockResponse<GetActivationsQueueResponseModel>(data.activationsQueue);
    };
}
