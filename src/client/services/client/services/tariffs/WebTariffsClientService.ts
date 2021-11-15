import {
    BaseResponseModel,
    CreateAbonentsTariffItemRequestModel,
    CreateBaseTariffItemRequestModel,
    CreatePartnersTariffItemRequestModel,
    CreateVoipTariffItemRequestModel,
    EditAbonentsTariffItemRequestModel,
    EditBaseTariffItemRequestModel,
    EditPartnersTariffItemRequestModel,
    EditVoipTariffItemRequestModel,
    GetAbonentsTariffItemResponseModel,
    GetAbonentsTariffsListRequestModel,
    GetAbonentsTariffsListResponseModel,
    GetBaseTariffItemResponseModel,
    GetBaseTariffsListRequestModel,
    GetBaseTariffsListResponseModel,
    GetPartnersTariffItemResponseModel,
    GetPartnersTariffsListRequestModel,
    GetPartnersTariffsListResponseModel,
    GetVoipTariffItemResponseModel,
    GetVoipTariffsListRequestModel,
    GetVoipTariffsListResponseModel,
} from 'types';
import { BaseTariffsClientService } from './BaseTariffsClientService';

export class WebTariffsClientService extends BaseTariffsClientService {
    private readonly token?: string;
    private readonly url: string;

    constructor(url: string, token: string) {
        super();

        this.token = token;
        this.url = url;
    }

    public readonly getBaseTariffsList = (model: GetBaseTariffsListRequestModel): Promise<GetBaseTariffsListResponseModel> =>
        fetch(`${this.url}/tariffs/base/list`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${this.token}`,
            },
            body: JSON.stringify(model),
        }).then((response) => this.parseResponse(response));

    public readonly getBaseTariff = (id: number): Promise<GetBaseTariffItemResponseModel> =>
        fetch(`${this.url}/tariffs/base/${id}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${this.token}`,
            },
        }).then((response) => this.parseResponse(response));

    public readonly getPartnersTariffsList = (model: GetPartnersTariffsListRequestModel): Promise<GetPartnersTariffsListResponseModel> =>
        fetch(`${this.url}/tariffs/partners/list`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${this.token}`,
            },
            body: JSON.stringify(model),
        }).then((response) => this.parseResponse(response));

    public readonly getPartnersTariff = (id: number): Promise<GetPartnersTariffItemResponseModel> =>
        fetch(`${this.url}/tariffs/partners/${id}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${this.token}`,
            },
        }).then((response) => this.parseResponse(response));

    public readonly getAbonentsTariffsList = (model: GetAbonentsTariffsListRequestModel): Promise<GetAbonentsTariffsListResponseModel> =>
        fetch(`${this.url}/tariffs/abonents/list`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${this.token}`,
            },
            body: JSON.stringify(model),
        }).then((response) => this.parseResponse(response));

    public readonly getAbonentsTariff = (id: number): Promise<GetAbonentsTariffItemResponseModel> =>
        fetch(`${this.url}/tariffs/abonents/${id}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${this.token}`,
            },
        }).then((response) => this.parseResponse(response));

    public readonly getVoipTariffsList = (model: GetVoipTariffsListRequestModel): Promise<GetVoipTariffsListResponseModel> =>
        fetch(`${this.url}/tariffs/voip/list`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${this.token}`,
            },
            body: JSON.stringify(model),
        }).then((response) => this.parseResponse(response));

    public readonly getVoipTariff = (id: number): Promise<GetVoipTariffItemResponseModel> =>
        fetch(`${this.url}/tariffs/voip/${id}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${this.token}`,
            },
        }).then((response) => this.parseResponse(response));

    public readonly editBaseTariff = (id: number, model: EditBaseTariffItemRequestModel): Promise<BaseResponseModel> =>
        fetch(`${this.url}/tariffs/base/${id}/edit`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${this.token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(model),
        }).then((response) => this.parseResponse(response));

    public readonly createBaseTariff = (model: CreateBaseTariffItemRequestModel): Promise<BaseResponseModel> =>
        fetch(`${this.url}/tariffs/base/create`, {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${this.token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(model),
        }).then((response) => this.parseResponse(response));

    public readonly editPartnersTariff = (id: number, model: EditPartnersTariffItemRequestModel): Promise<BaseResponseModel> =>
        fetch(`${this.url}/tariffs/partners/${id}/edit`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${this.token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(model),
        }).then((response) => this.parseResponse(response));

    public readonly createPartnersTariff = (model: CreatePartnersTariffItemRequestModel): Promise<BaseResponseModel> =>
        fetch(`${this.url}/tariffs/partners/create`, {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${this.token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(model),
        }).then((response) => this.parseResponse(response));

    public readonly editAbonentsTariff = (id: number, model: EditAbonentsTariffItemRequestModel): Promise<BaseResponseModel> =>
        fetch(`${this.url}/tariffs/abonents/${id}/edit`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${this.token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(model),
        }).then((response) => this.parseResponse(response));

    public readonly createAbonentsTariff = (model: CreateAbonentsTariffItemRequestModel): Promise<BaseResponseModel> =>
        fetch(`${this.url}/tariffs/abonents/create`, {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${this.token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(model),
        }).then((response) => this.parseResponse(response));

    public readonly editVoipTariff = (id: number, model: EditVoipTariffItemRequestModel): Promise<BaseResponseModel> =>
        fetch(`${this.url}/tariffs/voip/${id}/edit`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${this.token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(model),
        }).then((response) => this.parseResponse(response));

    public readonly createVoipTariff = (model: CreateVoipTariffItemRequestModel): Promise<BaseResponseModel> =>
        fetch(`${this.url}/tariffs/voip/create`, {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${this.token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(model),
        }).then((response) => this.parseResponse(response));
}
