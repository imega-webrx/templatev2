import { BaseClient } from './BaseClient';
import { MockAuthClientService } from './services/auth/MockAuthClientService';
import { MockCommonClientService } from './services/common/MockCommonClientService';
import { MockPartnersClientService } from './services/partners/MockPartnersClientService';
import { MockTariffsClientService } from './services/tariffs/MockTariffsClientService';

export class MockClient extends BaseClient {
    private static instance: MockClient;

    public static getInstance(): MockClient {
        if (!MockClient.instance) {
            MockClient.instance = new MockClient();
        }

        return MockClient.instance;
    }

    public static createInstance() {
        MockClient.instance = new MockClient();
    }

    public readonly getAuthService = (): MockAuthClientService => new MockAuthClientService();

    public readonly getTariffsService = (): MockTariffsClientService => new MockTariffsClientService();

    public readonly getCommonService = (): MockCommonClientService => new MockCommonClientService();

    public readonly getPartnersService = (): MockPartnersClientService => new MockPartnersClientService();
}
