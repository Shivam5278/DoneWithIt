import { create } from "apisauce";

const apiClient = create ({
    baseURL: "http://192.168.29.162:9006/api"
})

export default apiClient;