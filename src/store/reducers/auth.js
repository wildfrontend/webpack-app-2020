const initialState = {
    isAuthenticated: false,
}
const AUTH_TOEKN = 'AUTH_TOEKN'
const AUTH_LOGIN = 'AUTH_LOGIN'
const AUTH_LOGOUT = 'AUTH_LOGOUT'

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
            localStorage.setItem(
                AUTH_TOEKN,
                JSON.stringify({
                    ...state,
                    isAuthenticated: true,
                })
            )

            return {
                ...state,
                isAuthenticated: true,
            }
        case AUTH_LOGOUT:
            localStorage.removeItem(AUTH_TOEKN)
            return {
                ...state,
                isAuthenticated: false,
            }
        default:
            return state
    }
}
