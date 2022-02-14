import {instance} from "./app-api";

export const cardsApi = {
    getCards(params: RequestCardsType) {

        return instance.get<ResponseCardsType>('cards/card', {params}).then(res => res.data)
    },
    createCard(card: CreateCardType) {
        return instance.post('cards/card', {card})
    },
    updateCard(card: UpdateCardType) {

        return instance.put('cards/card', {card})
    },
    deleteCard(id: string) {

        return instance.delete(`cards/card?id=${id}`)
    },
    changeGradeCard(card_id: string, grade: null | number) {
        return instance.put<CardType>(`cards/grade`, {card_id, grade})
    }
}


export type RequestCardsType = {
    cardAnswer?: string // не обязательно
    cardQuestion?: string // не обязательно
    cardsPack_id: string
    min?: number // не обязательно
    max?: number // не обязательно
    sortCards?: number // не обязательно
    page?: number // не обязательно
    pageCount?: number // не обязательно
}

export type ResponseCardsType = {
    cards: CardType []
    cardsTotalCount: number
    maxGrade: number
    minGrade: number
    page: number
    pageCount: number
    packUserId: string
}

export type CardType = {
    answer: string
    question: string
    cardsPack_id: string
    grade: number
    rating: number
    shots: number
    type: string
    user_id: string
    created: string
    updated: string
    __v: number
    _id: string
}

export type TypeType = 'card' | 'pack'

type CreateCardType = {
    cardsPack_id: string
    question?: string // если не отправить будет таким
    answer?: string // если не отправить будет таким
    grade?: number // 0..5, не обязателен
    shots?: number // не обязателен
    rating?: number // не обязателен
    answerImg?: string // не обязателен
    questionImg?: string // не обязателен
    questionVideo?: string// не обязателен
    answerVideo?: string // не обязателен
    type?: TypeType // если не отправить будет таким

}

type UpdateCardType = {
    _id: string
    question?: string // не обязательно
    answer?: string // не обязательно
    comments?: string // не обязателен
    grade?: number // 0..5, не обязателен
    shots?: number // не обязателен
    rating?: number // не обязателен
    answerImg?: string // не обязателен
    questionImg?: string // не обязателен
    questionVideo?: string// не обязателен
    answerVideo?: string // не обязателен
    type?: TypeType // если не отправить будет таким
}
