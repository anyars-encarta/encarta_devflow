const ROUTES = {
    HOME: "/",
    SIGNIN: "/sign-in",
    SIGNUP: "/sign-up",
    PROFILE: (id: string) => `/profile/${id}`,
    TAG: (id: string) => `/tags/${id}`,
    ASK_QUESTION: "/ask-question",
    COLLECTION: "/collection",
    COMMUNITY: "/community",
    TAGS: "/tags",
    JOBS: "/jobs",
    QUESTIONS: (id: string) => `/questions/${id}`,
    EDIT_QUESTION: (id: string) => `/questions/${id}/edit`,
    SIGN_IN_WITH_OAUTH: 'signin-with-oauth',
}

export default ROUTES