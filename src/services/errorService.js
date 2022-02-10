/* eslint-disable import/no-anonymous-default-export */
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function handleExpectedError(error) {
    const { response } = error;

    if (response) {
        const { status } = response;

        switch (status) {
            case "400":
                toast.error("Bad Request");
                break;
            case "404":
                toast.error("Page not Found");
                break;
            default:
                break;
        }
    }
    return Promise.reject(error);
}

export default {
    handle: handleExpectedError,
};