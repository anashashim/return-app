import config from "./config.json";
import http from "./httpService";

const { apiEndpoint } = config;

export function getOrders(orderId, emailId) {
    const orderRequestUrl = `${apiEndpoint}/orders?`;
    const queryParams = `id=${orderId}&email=${emailId}`; 
    return http.get(orderRequestUrl + queryParams);
}