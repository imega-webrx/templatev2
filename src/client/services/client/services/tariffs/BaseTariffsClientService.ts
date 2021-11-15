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

import { BaseService } from '../BaseService';

export abstract class BaseTariffsClientService extends BaseService {
    public abstract getBaseTariffsList(model: GetBaseTariffsListRequestModel): Promise<GetBaseTariffsListResponseModel>;

    public abstract getBaseTariff(id: number): Promise<GetBaseTariffItemResponseModel>;

    public abstract getPartnersTariffsList(model: GetPartnersTariffsListRequestModel): Promise<GetPartnersTariffsListResponseModel>;

    public abstract getPartnersTariff(id: number): Promise<GetPartnersTariffItemResponseModel>;

    public abstract getAbonentsTariffsList(model: GetAbonentsTariffsListRequestModel): Promise<GetAbonentsTariffsListResponseModel>;

    public abstract getAbonentsTariff(id: number): Promise<GetAbonentsTariffItemResponseModel>;

    public abstract getVoipTariffsList(model: GetVoipTariffsListRequestModel): Promise<GetVoipTariffsListResponseModel>;

    public abstract getVoipTariff(id: number): Promise<GetVoipTariffItemResponseModel>;

    public abstract editBaseTariff(id: number, model: EditBaseTariffItemRequestModel): Promise<BaseResponseModel>;

    public abstract createBaseTariff(model: CreateBaseTariffItemRequestModel): Promise<BaseResponseModel>;

    public abstract editPartnersTariff(id: number, model: EditPartnersTariffItemRequestModel): Promise<BaseResponseModel>;

    public abstract createPartnersTariff(model: CreatePartnersTariffItemRequestModel): Promise<BaseResponseModel>;

    public abstract editAbonentsTariff(id: number, model: EditAbonentsTariffItemRequestModel): Promise<BaseResponseModel>;

    public abstract createAbonentsTariff(model: CreateAbonentsTariffItemRequestModel): Promise<BaseResponseModel>;

    public abstract editVoipTariff(id: number, model: EditVoipTariffItemRequestModel): Promise<BaseResponseModel>;

    public abstract createVoipTariff(model: CreateVoipTariffItemRequestModel): Promise<BaseResponseModel>;
}
