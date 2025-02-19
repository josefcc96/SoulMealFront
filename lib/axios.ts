import axios from "axios"

const api = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
})

export const get = async (url: string) => {
  try {
    const response = await api.get(url)
    return response.data
  } catch (error) {
    console.error("Error in GET request:", error)
    throw error
  }
}

export const post = async (url: string, data: any) => {
  try {
    const response = await api.post(url, data)
    return response.data
  } catch (error) {
    console.error("Error in POST request:", error)
    throw error
  }
}

export default api

