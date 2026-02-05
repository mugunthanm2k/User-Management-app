import { useEffect, useState } from "react";
import { userApi } from "../api/userApi";

export const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await userApi.getAll();
      setUsers(res.data);
    } catch (err) {
      setError('Failed to load users. Please try again.');
      console.error('Error loading users:', err);
    } finally {
      setLoading(false);
    }
  };

  const createUser = async (data) => {
    try {
      await userApi.create(data);
      await loadUsers();
      return { success: true };
    } catch (err) {
      setError('Failed to create user. Please try again.');
      console.error('Error creating user:', err);
      return { success: false, error: err.message };
    }
  };

  const updateUser = async (id, data) => {
    try {
      await userApi.update(id, data);
      await loadUsers();
      return { success: true };
    } catch (err) {
      setError('Failed to update user. Please try again.');
      console.error('Error updating user:', err);
      return { success: false, error: err.message };
    }
  };

  const deleteUser = async (id) => {
    try {
      await userApi.remove(id);
      await loadUsers();
      return { success: true };
    } catch (err) {
      setError('Failed to delete user. Please try again.');
      console.error('Error deleting user:', err);
      return { success: false, error: err.message };
    }
  };

  useEffect(() => {
    let mounted = true;
    const bootstrap = async () => {
      if (mounted) await loadUsers();
    };

    bootstrap();
    return () => {
      mounted = false;
    };
  }, []);

  const clearError = () => setError(null);

  return {
    users,
    loading,
    error,
    createUser,
    updateUser,
    deleteUser,
    clearError,
    reloadUsers: loadUsers
  };
};