import { config } from "./config";

export const searchUser = async(username) => {
    try {
        const response = await fetch(`${config.baseUrl}/userinfo/${username}`, {
            headers: {
                'X-RapidApi-Key': config.rapidapiKey,
                'X-RapidApi-Host': config.rapidapiHost,
            },
        });

        const data = await response.json();
        return data
    } catch (error) {
        return error
    }
};