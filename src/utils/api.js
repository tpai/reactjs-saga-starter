export const fetchOpts = (method, body = null) => {
    return Object.assign({}, {
        method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }, body ? {
        body: JSON.stringify(body)
    } : {});
}
