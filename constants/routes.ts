const ROUTES = {
    HOME: "/",
    SIGNIN: "/sign-in",
    SIGNUP: "/sign-up",
    PROFILE: (id: string) => `/profile/${id}`,
    TAGS: (id: string) => `/tags/${id}`,
    ASK_QUESTION: "/ask-question",
    QUESTION: (id: string) => `/question/${id}`,
    SIGN_IN_WITH_OAUTH: 'signin-with-oauth',
}

export default ROUTES