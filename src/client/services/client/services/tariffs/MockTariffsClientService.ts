import * as data from './data';
import { BaseTariffsClientService } from './BaseTariffsClientService';
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

export class MockTariffsClientService extends BaseTariffsClientService {
    public readonly getBaseTariffsList = (model: GetBaseTariffsListRequestModel): Promise<GetBaseTariffsListResponseModel> => {
        console.log('getBaseTariffsList model', model);
        return this.parseMockResponse<GetBaseTariffsListResponseModel>(data.baseTariffsList);
    };

    public readonly getBaseTariff = (id: number): Promise<GetBaseTariffItemResponseModel> => {
        console.log('getBaseTariff id', id);
        return this.parseMockResponse<GetBaseTariffItemResponseModel>(data.baseTariffItem);
    };

    public readonly getPartnersTariffsList = (model: GetPartnersTariffsListRequestModel): Promise<GetPartnersTariffsListResponseModel> => {
        console.log('getBaseTariffsList model', model);
        return this.parseMockResponse<GetPartnersTariffsListResponseModel>(data.partnersTariffsList);
    };

    public readonly getPartnersTariff = (id: number): Promise<GetPartnersTariffItemResponseModel> => {
        console.log('getPartnersTariff id', id);
        return this.parseMockResponse<GetPartnersTariffItemResponseModel>(data.partnersTariffItem);
    };

    public readonly getAbonentsTariffsList = (model: GetAbonentsTariffsListRequestModel): Promise<GetAbonentsTariffsListResponseModel> => {
        console.log('getAbonentsTariffsList model', model);
        return this.parseMockResponse<GetAbonentsTariffsListResponseModel>(data.abonentsTariffsList);
    };

    public readonly getAbonentsTariff = (id: number): Promise<GetAbonentsTariffItemResponseModel> => {
        console.log('getAbonentsTariff id', id);
        return this.parseMockResponse<GetAbonentsTariffItemResponseModel>(data.abonentsTariffItem);
    };

    public readonly getVoipTariffsList = (model: GetVoipTariffsListRequestModel): Promise<GetVoipTariffsListResponseModel> => {
        console.log('getVoipTariffsList model', model);
        return this.parseMockResponse<GetVoipTariffsListResponseModel>(data.voipTariffsList);
    };

    public readonly getVoipTariff = (id: number): Promise<GetVoipTariffItemResponseModel> => {
        console.log('getVoipTariff id', id);
        return this.parseMockResponse<GetVoipTariffItemResponseModel>(data.voipTariffItem);
    };

    public readonly editBaseTariff = (id: number, model: EditBaseTariffItemRequestModel): Promise<BaseResponseModel> => {
        console.log('editBaseTariff model, id', model, id);
        return this.parseMockResponse<BaseResponseModel>({});
    };

    public readonly createBaseTariff = (model: CreateBaseTariffItemRequestModel): Promise<BaseResponseModel> => {
        console.log('createBaseTariff model', model);
        return this.parseMockResponse<BaseResponseModel>({});
    };

    public readonly editPartnersTariff = (id: number, model: EditPartnersTariffItemRequestModel): Promise<BaseResponseModel> => {
        console.log('editPartnersTariff model, id', model, id);
        return this.parseMockResponse<BaseResponseModel>({});
    };

    public readonly createPartnersTariff = (model: CreatePartnersTariffItemRequestModel): Promise<BaseResponseModel> => {
        console.log('createPartnersTariff model', model);
        return this.parseMockResponse<BaseResponseModel>({});
    };

    public readonly editAbonentsTariff = (id: number, model: EditAbonentsTariffItemRequestModel): Promise<BaseResponseModel> => {
        console.log('editAbonentsTariff model, id', model, id);
        return this.parseMockResponse<BaseResponseModel>({});
    };

    public readonly createAbonentsTariff = (model: CreateAbonentsTariffItemRequestModel): Promise<BaseResponseModel> => {
        console.log('createAbonentsTariff model', model);
        return this.parseMockResponse<BaseResponseModel>({});
    };

    public readonly editVoipTariff = (id: number, model: EditVoipTariffItemRequestModel): Promise<BaseResponseModel> => {
        console.log('editVoipTariff model, id', model, id);
        return this.parseMockResponse<BaseResponseModel>({});
    };

    public readonly createVoipTariff = (model: CreateVoipTariffItemRequestModel): Promise<BaseResponseModel> => {
        console.log('createVoipTariff model', model);
        return this.parseMockResponse<BaseResponseModel>({});
    };
}
