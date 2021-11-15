import { LookupModel } from './base';

export interface PartnerModel extends LookupModel {
    balance: number;
    currency: string;
}
