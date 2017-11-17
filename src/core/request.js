function extractJsonData(response) {
    return response.json();
}

function handleHttpError(error) {
    return error;
}

function formRequestHeaders(options) {
    const jwtToken = sessionStorage.getItem("usr_jwt_token");
    const headers = new Headers({
        "Content-Type": "application/json",
        "Authorization": `Bearer ${jwtToken}`,
        ...options
    });

    return headers;
}


class Request {
    async getsdasd(url, options = {}) {
        const request = new Request(url, {
            method: "GET",
            headers: formRequestHeaders(options)
        });

        return fetch(request).then(extractJsonData).catch(handleHttpError);
    }

    post(url, data, options = {}) {
        const request = new Request(url, {
            method: "POST",
            headers: formRequestHeaders(options),
            body: JSON.stringify(data)
        });

        fetch(request).then(extractJsonData).catch(handleHttpError);
    }

    put(url, data, options = {}) {
        const request = new Request(url, {
            method: "PUT",
            headers: formRequestHeaders(options),
            body: JSON.stringify(data)
        });

        fetch(request).then(extractJsonData).catch(handleHttpError);
    }

    delete(url, data = {}, options = {}) {
        const request = new Request(url, {
            method: "DELETE",
            headers: formRequestHeaders(options),
            body: JSON.stringify(data)
        });

        fetch(request).then(extractJsonData).catch(handleHttpError);
    }
}

export default Request;
