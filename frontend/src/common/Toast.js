import { toast } from 'react-toastify'

const Toast = (isError, message) => {
    const option = { timeOut: 500 };
    if (isError) {
        return toast.error(message, option)
    }
    toast.success(message, option)
}

export default Toast