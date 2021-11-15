import { TariffsThunkResultModel } from 'store/tariffs/actions';
import { useGetDataAction } from './useGetDataAction';
import { useTypedSelector } from './useTypedSelector';

export const useGetTariffsList = (action: () => TariffsThunkResultModel<Promise<void>>): boolean => {
    const { page, perPage, sort, filter } = useTypedSelector((state) => state.tariffs);

    return useGetDataAction<TariffsThunkResultModel<Promise<void>>>(action, [sort, page, perPage, filter]);
};
