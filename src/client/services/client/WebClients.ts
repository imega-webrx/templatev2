import { STORAGE } from 'services/storage/StorageAdapter';
import { BaseClient } from './BaseClient';
import { WebAuthClientService } from './services/auth/WebAuthClientService';
import { WebCommonClientService } from './services/common/WebCommonClientService';
import { WebPartnersClientService } from './services/partners/WebPartnersClientService';
import { WebTariffsClientService } from './services/tariffs/WebTariffsClientService';

export class WebClient extends BaseClient {
    private static instance: WebClient;

    private readonly url = process.env.NEXT_PUBLIC_HTTP_API_URL;

    private readonly token: string;

    constructor() {
        super();

        this.token = STORAGE.getToken();
    }

    public static getInstance(): WebClient {
        if (!WebClient.instance) {
            WebClient.instance = new WebClient();
        }

        return WebClient.instance;
    }

    public static createInstance() {
        WebClient.instance = new WebClient();
    }

    public readonly getAuthService = (): WebAuthClientService => new WebAuthClientService(this.url, this.token);

    public readonly getTariffsService = (): WebTariffsClientService => new WebTariffsClientService(this.url, this.token);

    public readonly getCommonService = (): WebCommonClientService => new WebCommonClientService(this.url, this.token);

    public readonly getPartnersService = (): WebPartnersClientService => new WebPartnersClientService(this.url, this.token);
}
