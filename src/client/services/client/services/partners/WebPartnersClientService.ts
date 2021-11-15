import { BasePartnersClientService } from './BasePartnersClientService';

export class WebPartnersClientService extends BasePartnersClientService {
    private readonly token?: string;
    private readonly url: string;

    constructor(url: string, token: string) {
        super();

        this.token = token;
        this.url = url;
    }
}
