
class Request {
    get = (url, options = {}) => {
        const request = new Request(url, {
            method: 'GET',
            headers: formRequestHeaders()
        });

        fetch(request).then(extractJsonData).catch(handleHttpError);
    }

    post = (url, data, options = {}) => {
        const request = new Request(url, {
            method: 'POST',
            headers: formRequestHeaders(),
            body: data
        });

        fetch(request).then(extractJsonData).catch(handleHttpError);
    }

    put = (url, data, options = {}) => {
        const request = new Request(url, {
            method: 'PUT',
            headers: formRequestHeaders(),
            body: data
        });

        fetch(request).then(extractJsonData).catch(handleHttpError);
    }

    del = (url, data = {}, options = {}) => {
        const request = new Request(url, {
            method: 'DELETE',
            headers: formRequestHeaders(),
            body: data
        });

        fetch(request).then(extractJsonData).catch(handleHttpError);
    }
}

let extractJsonData = (response) => {
    return jsonData.json();
}

let handleHttpError = (error) => {
    return error;
}

let formRequestHeaders = () => {
    const headers = new Headers({
        'Content-Type': 'application/json'
    });

    return headers;
}

export default Request;
