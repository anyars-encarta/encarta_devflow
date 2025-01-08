const ROUTES = {
    HOME: "/",
    SIGNIN: "/sign-in",
    SIGNUP: "/sign-up",
    PROFILE: (id: string) => `/profile/${id}`,
    TAGS: (id: string) => `/tags/${id}`,
    ASK_QUESTION: "/ask-question",
    QUESTIONS: (id: string) => `/questions/${id}`,
    EDIT_QUESTION: (id: string) => `/questions/${id}/edit`,
    SIGN_IN_WITH_OAUTH: 'signin-with-oauth',
}

export default ROUTES