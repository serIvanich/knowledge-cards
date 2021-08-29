import {instance} from "./app-api";
import {PacksType} from "../m2-bll/reducers/packs-reducer";

export const packsApi = {
    getPacks (params: RequestParamsType) {

        return instance.get<PacksType>('cards/pack', {params}).then(res => res.data)
    }
}


export type RequestParamsType = {
    packName?: string// не обязательно
    min?: number // не обязательно
    max?: number // не обязательно
    sortPacks?: number// не обязательно
    page?: number // не обязательно
    pageCount?: number // не обязательно
    user_id?:string // чьи колоды
    // не обязательно, или прийдут все
}
