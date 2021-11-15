import { BaseAuthClientService } from './services/auth/BaseAuthClientService';
import { BaseCommonClientService } from './services/common/BaseCommonClientService';
import { BasePartnersClientService } from './services/partners/BasePartnersClientService';
import { BaseTariffsClientService } from './services/tariffs/BaseTariffsClientService';

export abstract class BaseClient {
    public abstract getAuthService(): BaseAuthClientService;

    public abstract getTariffsService(): BaseTariffsClientService;

    public abstract getCommonService(): BaseCommonClientService;

    public abstract getPartnersService(): BasePartnersClientService;
}
