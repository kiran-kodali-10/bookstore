const dev = {
    url: {
        userPoolId: "ap-south-1_XCGp8v1PE",
        clientId: "1gnf3anqujnnte5j4g809lrkbs"
    }
}

const prod = {
    url: {
        clientId: "",
        userPoolId: ""
    }
}

export const config = process.env.NODE_ENV === "development" ? dev : prod;