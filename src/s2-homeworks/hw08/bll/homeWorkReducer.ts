import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: any, action: any): any => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name

            return state.sort((a: UserType, b: UserType) => action.payload == 'up' ? a.name > b.name ? 1 : -1 :
                a.name < b.name ? 1 : -1) // need to fix
        }
        case 'check': {

            return state.filter((item: UserType) => item.age >= action.payload) // need to fix
        }
        default:
            return state
    }
}
