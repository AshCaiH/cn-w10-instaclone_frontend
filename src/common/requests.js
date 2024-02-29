const parse = (response) => {
    return response.json();
}

export async function postRequest(url, query, headers) {

    headers["Content-Type"] = "application/json";

    return parse(await fetch(url, {
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: query,
    }));

}


export async function getRequest(url, headers) {

    return parse(await fetch(url, {
        method: "GET",
        headers: headers,
    }));

}