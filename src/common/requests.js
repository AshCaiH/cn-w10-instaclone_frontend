const parse = async (response) => {
    return response.json();
}

export async function postRequest(url, query, headers) {

    if (!headers) headers = {}

    headers["Content-Type"] = "application/json";

    return parse(await fetch(url, {
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: query,
    }));

}


export async function getRequest(url, headers) {

    if (!headers) headers = {}

    return parse(await fetch(url, {
        method: "GET",
        headers: headers,
    }));

}