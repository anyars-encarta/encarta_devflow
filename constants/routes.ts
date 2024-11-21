const ROUTES = {
    HOME: "/",
    SIGNIN: "/sign-in",
    SIGNUP: "/sign-up",
    PROFILE: (id: string) => `/profile/${id}`,
}

export default ROUTES