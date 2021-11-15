export interface RecordModel {
    recordId: number;
}
export interface LookupModel extends RecordModel {
    title: string;
}

export type SortDirection = 'asc' | 'desc';

export type ResponseStatus = 'ok' | 'error';

export type CurrencyType = 'RUB' | 'USD';

export type DatePeriod = 'day' | 'month';

export interface BaseResponseModel extends Record<string, unknown> {}

export interface BaseDataResponseModel<T> extends BaseResponseModel {
    data: T;
}

export interface BaseListResponseModel<T> extends BaseResponseModel {
    total: number;
    items: T[];
}

export interface BaseSortModel<T> {
    orderBy: string | keyof T;
    direction: SortDirection;
}

export interface RecordIdListBaseRequestModel {
    ids: number[];
}

export interface WithPaginationBaseRequestModel {
    page: number;
    perPage: number;
}

export interface IntervalFilterModel {
    min: number;
    max: number;
}

export interface PriceWithCurrencyModel {
    price: number;
    currency?: CurrencyType;
}

export interface InbOutModel {
    inbound: number;
    outbound: number;
}

export interface InbOutPriceModel {
    inbound: PriceWithCurrencyModel;
    outbound: PriceWithCurrencyModel;
}

export interface CountryModel {
    id: string;
    name: string;
}
