import { useState } from "react";
import { Container, Button, Box, Alert, CircularProgress } from "@mui/material";
import Header from "../components/Header";
import UserTable from "../components/UserTable";
import UserModal from "../components/UserModal";
import ConfirmDialog from "../components/ConfirmDialog.jsx";
import { useUsers } from "../hooks/useUsers";
import { getEmptyForm, mapFormToApi } from "../config/fieldsConfig";

export default function Home() {
    const { users, loading, error, createUser, updateUser, deleteUser, clearError } = useUsers();
    const [openModal, setOpenModal] = useState(false);
    const [openConfirm, setOpenConfirm] = useState(false);
    const [selectedId, setSelectedId] = useState(null);
    const [isEdit, setIsEdit] = useState(false);
    const [form, setForm] = useState(getEmptyForm());

    const handleAdd = () => {
        setForm(getEmptyForm());
        setIsEdit(false);
        setOpenModal(true);
    };

    const handleEdit = (user) => {
        setForm(user);
        setIsEdit(true);
        setOpenModal(true);
    };

    const handleSubmit = async () => {
        const payload = mapFormToApi(form);
        if (isEdit) {
            await updateUser(form.id, payload);
        } else {
            await createUser(payload);
        }
        setOpenModal(false);
    };

    const handleDelete = async () => {
        await deleteUser(selectedId);
        setOpenConfirm(false);
    };

    return (
        <>
            <Header />
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                {error && (
                    <Alert
                        severity="error"
                        onClose={clearError}
                        sx={{ mb: 2 }}
                    >
                        {error}
                    </Alert>
                )}

                <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
                    <Box>
                        <h2>Users</h2>
                        <p>Total: {users.length} user(s)</p>
                    </Box>
                    <Button
                        variant="contained"
                        onClick={handleAdd}
                        startIcon={<span>+</span>}
                    >
                        Add User
                    </Button>
                </Box>

                {loading ? (
                    <Box display="flex" justifyContent="center" alignItems="center" py={8}>
                        <CircularProgress />
                        <span style={{ marginLeft: 16 }}>Loading users...</span>
                    </Box>
                ) : (
                    <UserTable
                        users={users}
                        onEdit={handleEdit}
                        onDelete={(id) => {
                            setSelectedId(id);
                            setOpenConfirm(true);
                        }}
                    />
                )}

                <UserModal
                    open={openModal}
                    onClose={() => setOpenModal(false)}
                    onSubmit={handleSubmit}
                    form={form}
                    setForm={setForm}
                    isEdit={isEdit}
                />

                <ConfirmDialog
                    open={openConfirm}
                    onClose={() => setOpenConfirm(false)}
                    onConfirm={handleDelete}
                    title="Delete User"
                    message="Are you sure you want to delete this user? This action cannot be undone."
                />
            </Container>
        </>
    );
}