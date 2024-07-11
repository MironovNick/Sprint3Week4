import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any

    const newState = [...state];

    switch (action.type) {
        case 'sort': { // by name

            return newState.sort((a: UserType, b: UserType) => action.payload == 'up' ? a.name > b.name ? 1 : -1 :
                a.name < b.name ? 1 : -1) // need to fix
        }
        case 'check': {

            return newState.filter((item: UserType) => item.age >= action.payload) // need to fix
        }
        default:
            return state
    }
}
