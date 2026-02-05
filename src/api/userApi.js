import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000",
    headers: { "Content-Type": "application/json" }
});

export const userApi = {
    getAll: () => api.get("/users"),
    create: (data) => api.post("/users", data),
    update: (id, data) => api.put(`/users/${id}`, data),
    remove: (id) => api.delete(`/users/${id}`)
};