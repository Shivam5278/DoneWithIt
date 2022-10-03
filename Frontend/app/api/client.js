import { create } from "apisauce";
import cache from "../utility/cache";
import authStorage from '../auth/storage';


const apiClient = create ({
    baseURL: "http://192.168.29.162:9006/api"
});

apiClient.addAsyncRequestTransform(async (request) => {
    const authToken = await authStorage.getToken();
    if(!authToken) return;
    request.headers["x-auth-token"] = authToken;
});

const get = apiClient.get;
apiClient.get = async (url, params, axiousConfig ) =>  {

    const response = await get(url, params, axiousConfig );

    if(response.ok) {
        cache.store(url, response.data);
        return response;
    }

    const data = await cache.get(url);
    return data? {ok: true, data} : response;

}

export default apiClient;