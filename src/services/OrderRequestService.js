import config from "./config.json";
import http from "./httpService";

const { apiEndpoint } = config;
const orderRequestUrl = `${apiEndpoint}/orders`;

export function getOrders(orderId, emailId) {
    const queryParams = `?id=${orderId}&email=${emailId}`; 
    return http.get(orderRequestUrl + queryParams);
}

export function updateOrder(order) {
    return http.put(`${orderRequestUrl}/${order.id}`, order);
}