const initialState = {
    isAuthenticated: false,
}

export const AUTH_TOEKN = 'AUTH_TOEKN'
export const AUTH_LOGIN = 'AUTH_LOGIN'
export const AUTH_LOGOUT = 'AUTH_LOGOUT'

export const loginAuth = () => {
    return {
        type: AUTH_LOGIN,
    }
}

export const logoutAuth = () => {
    return {
        type: AUTH_LOGOUT,
    }
}

export default function reducers(state = initialState, action) {
    switch (action.type) {
        case AUTH_LOGIN:
            const state_login = {
                ...state,
                isAuthenticated: true,
            }
            localStorage.setItem(AUTH_TOEKN, JSON.stringify(state_login))
            return state_login
        case AUTH_LOGOUT:
            const state_logout = {
                ...state,
                isAuthenticated: false,
            }
            localStorage.removeItem(AUTH_TOEKN)
            return state_logout
        default:
            return state
    }
}
