import ROUTES from "./routes";

export const DEFAULT_EMPTY = {
    title: 'No Data Found',
    message: 'Looks like the database is taking a nap. Wake it up with some new entries.',
    button: {
        text: 'Add Data',
        href: ROUTES.HOME
    },
};

export const DEFAULT_ERROR = {
    title: 'Oop! Something went wrong',
    message: 'Even our code can have a bad day. Give it another shot.',
    button: {
        text: 'Try Again',
        href: ROUTES.HOME
    },
};

export const EMPTY_QUESTION = {
    title: 'Aah! No Questions Yet',
    message: "The question board is empty. Maybe it's waiting for your brilliant question to get things rolling.",
    button: {
        text: 'Ask a Question',
        href: ROUTES.ASK_QUESTION
    },
};

export const EMPTY_TAGS = {
    title: 'No Tags Found',
    message: "The tag cloud is empty. Add some keywords to make it rain.",
    button: {
        text: 'Create Tags',
        href: ROUTES.TAGS
    },
};

export const EMPTY_ANSWERS = {
    title: 'No Answers Found',
    message: "The board is empty. Make it rain with your brillianr answer.",
    // button: {
    //     text: 'Answer',
    //     href: ROUTES.HOME
    // },
};

export const EMPTY_COLLECTION = {
    title: 'Collections Are Empty',
    message: "Looks like you havent created any collections yet. Start curating something extra ordinary today.",
    button: {
        text: 'Save to Collection',
        href: ROUTES.COLLECTION
    },
};

export const EMPTY_USERS = {
    title: 'No Users Found',
    message: "You are ALONE. The only one here. More users are coming soon!",
    // button: {
    //     text: 'Save to Collection',
    //     href: ROUTES.COLLECTION
    // },
};