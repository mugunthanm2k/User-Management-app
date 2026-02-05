import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.PROD ? "/mock-api" : "http://localhost:3000",
    headers: { "Content-Type": "application/json" }
});

// Mock data for GitHub Pages (shows your db.json data)
const mockUsers = [
    {
        "id": "3322",
        "firstName": "Mugunthan",
        "lastName": "Mani",
        "email": "mugunthan@gmail.com",
        "phone": "1341123543",
        "dob": "2026-02-05"
    },
    {
        "id": "563d",
        "firstName": "Dinesh",
        "lastName": "fly",
        "email": "dinesh@company.com",
        "phone": "2432424343",
        "dob": "2026-02-05"
    },
    {
        "id": "2470",
        "firstName": "bharath",
        "lastName": "bin",
        "email": "your@gmail.com",
        "phone": "2432424343",
        "dob": "2026-02-05",
        "address": "32, sdfasds"
    }
];

export const userApi = {
    getAll: () => {
        if (import.meta.env.PROD) {
            return Promise.resolve({ data: mockUsers });
        }
        return api.get("/users");
    },
    create: (data) => {
        if (import.meta.env.PROD) {
            // Add to mock data for demo
            const newUser = { id: Date.now().toString(), ...data };
            mockUsers.push(newUser);
            return Promise.resolve({ data: newUser });
        }
        return api.post("/users", data);
    },
    update: (id, data) => {
        if (import.meta.env.PROD) {
            const index = mockUsers.findIndex(u => u.id === id);
            if (index !== -1) {
                mockUsers[index] = { ...mockUsers[index], ...data };
            }
            return Promise.resolve({ data });
        }
        return api.put(`/users/${id}`, data);
    },
    remove: (id) => {
        if (import.meta.env.PROD) {
            const index = mockUsers.findIndex(u => u.id === id);
            if (index !== -1) {
                mockUsers.splice(index, 1);
            }
            return Promise.resolve({});
        }
        return api.delete(`/users/${id}`);
    }
};
