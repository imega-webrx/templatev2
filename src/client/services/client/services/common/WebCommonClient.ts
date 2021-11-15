

import {
    GetOperatorsListResponseModel,
    GetAgregatorsListResponseModel,
    GetSubscriptionTypesListResponseModel,
    GetCountriesListResponseModel,
    GetBaseTariffsSimpleListResponseModel,
    GetPartnersTariffsSimpleListResponseModel,
    GetPartnersSimpleListResponseModel,
    GetActivationsQueueResponseModel,
} from 'types';
import { BaseCommonClientService } from './BaseCommonClientService';

export class WebCommonClientService extends BaseCommonClientService {
    private readonly token?: string;
    private readonly url: string;

    constructor(url: string, token: string) {
        super();

        this.token = token;
        this.url = url;
    }

    public readonly getOperatorsList = (): Promise<GetOperatorsListResponseModel> =>
        fetch(`${this.url}/common/operators/list`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${this.token}`,
            },
        }).then((response) => this.parseResponse(response));

    public readonly getAgregatorsList = (): Promise<GetAgregatorsListResponseModel> =>
        fetch(`${this.url}/common/aggregators/list`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${this.token}`,
            },
        }).then((response) => this.parseResponse(response));

    public readonly getSubscriptionTypesList = (): Promise<GetSubscriptionTypesListResponseModel> =>
        fetch(`${this.url}/common/subscription-types/list`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${this.token}`,
            },
        }).then((response) => this.parseResponse(response));

    public readonly getCountriesList = (): Promise<GetCountriesListResponseModel> =>
        fetch(`${this.url}/common/countries/list`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${this.token}`,
            },
        }).then((response) => this.parseResponse(response));

    public readonly getBaseTariffsSimpleList = (): Promise<GetBaseTariffsSimpleListResponseModel> =>
        fetch(`${this.url}/common/base-tariffs-simple-list/list`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${this.token}`,
            },
        }).then((response) => this.parseResponse(response));

    public readonly getPartnersTariffsSimpleList = (): Promise<GetPartnersTariffsSimpleListResponseModel> =>
        fetch(`${this.url}/common/partners-tariffs-simple-list/list`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${this.token}`,
            },
        }).then((response) => this.parseResponse(response));

    public readonly getPartnersSimpleList = (): Promise<GetPartnersSimpleListResponseModel> =>
        fetch(`${this.url}/common/partners-simple-list/list`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${this.token}`,
            },
        }).then((response) => this.parseResponse(response));

    public readonly getActivationsQueue = (): Promise<GetActivationsQueueResponseModel> =>
        fetch(`${this.url}/common/activationsQueue/list`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${this.token}`,
            },
        }).then((response) => this.parseResponse(response));
}
