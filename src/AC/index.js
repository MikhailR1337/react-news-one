import { DELETE_ARTICLE, INCREMENT, FILTER_ARTICLE } from '../constants'

export function increment() {
    return {
        type: INCREMENT,
    }
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: {
            id,
        }
    }
}

export function filterArticle(id, firstDate, secondDate) {
    return {
        type: FILTER_ARTICLE,
        payload: {
            id,
            firstDate,
            secondDate,
        }
    }
}