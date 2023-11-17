import axios from "axios"
import { SERVER_URL } from "../constants"

export const login = async (body) => {
    return await axios.post(SERVER_URL, body)
}

