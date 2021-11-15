import { CountryModel, LookupModel } from './base';

export interface GetOperatorsListResponseModel {
    items: LookupModel[];
}

export interface GetAgregatorsListResponseModel {
    items: LookupModel[];
}

export interface GetSubscriptionTypesListResponseModel {
    items: string[];
}

export interface GetCountriesListResponseModel {
    items: CountryModel[];
}

export interface GetBaseTariffsSimpleListResponseModel {
    items: LookupModel[];
}

export interface GetPartnersTariffsSimpleListResponseModel {
    items: LookupModel[];
}

export interface GetPartnersSimpleListResponseModel {
    items: LookupModel[];
}

export interface GetActivationsQueueResponseModel {
    items: string[];
}
