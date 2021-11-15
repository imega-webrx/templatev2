import * as rx from 'rxjs';
import * as ro from 'rxjs/operators';
import { CurrencyType, DatePeriod } from '../types';

export const hasWebApi = (): boolean | undefined => {
    if (typeof window !== 'undefined') {
        return true;
    }
};

export const nothingToNull = (value: string | null): string | null => {
    if (value == null) {
        return null;
    } else {
        value = value.trim();

        if (value.length === 0) {
            return null;
        } else {
            return value;
        }
    }
};

export const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

export const getDatePeriod = (period: DatePeriod): string => {
    switch (period) {
        case 'day':
            return 'День';
        case 'month':
            return 'Месяц';
        default:
            return '';
    }
};

export const getCurrencySymbol = (cur: CurrencyType) => {
    switch (cur) {
        case 'RUB':
            return '₽';
        case 'USD':
            return '$';
        default:
            return '';
    }
};

export const getIntVal = (val: string | number) => {
    if (typeof val == 'number') {
        return val;
    }

    return val.length > 0 && parseInt(val) >= 0 ? parseInt(val) : null;
};

/* eslint-disable */
export class Logger {
    constructor(public readonly name: string) {}

    public readonly fatal = (message: string, error?: any, payload?: any) => console.error(this.name + ': ' + message, error, payload);

    public readonly error = (message: string, error?: any, payload?: any) => console.error(this.name + ': ' + message, error, payload);

    public readonly rx = {
        retry: (message: string) => (errors: rx.Observable<Error>) =>
            errors.pipe(ro.tap((error) => this.error(message, error))).pipe(ro.delay(2000), ro.take(5)),
        subscribe: (message: string) => {
            return {
                next: () => {},
                complete: () => {},
                error: (error: any) => this.fatal(message, error),
            };
        },
    };
}
