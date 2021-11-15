import { BaseClient } from './BaseClient';
import { MockClient } from './MockClient';
import { WebClient } from './WebClient';

export const getClientInstance = () => {
    let client: BaseClient;

    if (process.env.NEXT_PUBLIC_CLIENT_TYPE == 'mock') {
        client = MockClient.getInstance();
    } else {
        client = WebClient.getInstance();
    }

    return client;
};

export const getClient = () => {
    let client: BaseClient;

    if (process.env.NEXT_PUBLIC_CLIENT_TYPE == 'mock') {
        client = new MockClient();
    } else {
        client = new WebClient();
    }

    return client;
};

export const createClientInstance = () => {
    if (process.env.NEXT_PUBLIC_CLIENT_TYPE == 'mock') {
        MockClient.createInstance();
    } else {
        WebClient.createInstance();
    }
};
