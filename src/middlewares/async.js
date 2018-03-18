export default function ({ dispatch }) {
    return next => action => {
        // middleware to handle async request
        if (!action.payload || !action.payload.then) {
            return next(action)
        }
        // if request is a promise then resolve it and send again
        action.payload
            .then((response) => {
                const newAction = {...action, payload: response.data}
                dispatch(newAction);
            })
        next(action);
    };
}
