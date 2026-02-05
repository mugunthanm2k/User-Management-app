import {
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    IconButton,
    TableContainer,
    Paper,
    Typography
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { userFieldsConfig } from "../config/fieldsConfig";

export default function UserTable({ users, onEdit, onDelete }) {
    const tableHeaders = [
        ...userFieldsConfig.map(field => field.label),
        "Actions"
    ];

    if (users.length === 0) {
        return (
            <Paper elevation={0} sx={{ p: 4, textAlign: 'center', backgroundColor: '#f5f5f5' }}>
                <Typography variant="h6" color="textSecondary">
                    No users found
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
                    Click "Add User" to create your first user.
                </Typography>
            </Paper>
        );
    }

    return (
        <TableContainer component={Paper} elevation={1}>
            <Table sx={{ minWidth: 650 }} aria-label="user table">
                <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
                    <TableRow>
                        {tableHeaders.map((header, index) => (
                            <TableCell key={index} sx={{ fontWeight: 'bold' }}>
                                {header}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map(user => (
                        <TableRow
                            key={user.id}
                            sx={{
                                '&:last-child td, &:last-child th': { border: 0 },
                                '&:hover': { backgroundColor: '#f9f9f9' }
                            }}
                        >
                            {userFieldsConfig.map(field => (
                                <TableCell key={field.name}>
                                    {user[field.name] || '-'}
                                </TableCell>
                            ))}
                            <TableCell>
                                <IconButton
                                    onClick={() => onEdit(user)}
                                    color="primary"
                                    size="small"
                                    aria-label="edit"
                                    sx={{ mr: 1 }}
                                >
                                    <EditIcon fontSize="small" />
                                </IconButton>
                                <IconButton
                                    onClick={() => onDelete(user.id)}
                                    color="error"
                                    size="small"
                                    aria-label="delete"
                                >
                                    <DeleteIcon fontSize="small" />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}