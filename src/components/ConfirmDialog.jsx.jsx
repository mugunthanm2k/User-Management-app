import { Modal, Button } from 'react-bootstrap';

export default function ConfirmDialog({ 
    open, 
    onClose, 
    onConfirm, 
    title = "Confirm Delete",
    message = "Are you sure you want to delete this item?" 
}) {
    return (
        <Modal show={open} onHide={onClose} centered backdrop="static">
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="d-flex align-items-center">
                    <div className="bg-danger bg-opacity-10 rounded-circle p-3 me-3">
                        <i className="bi bi-trash text-danger" style={{ fontSize: "1.5rem" }}></i>
                    </div>
                    <div>
                        <p className="mb-0">{message}</p>
                        <small className="text-muted">This action cannot be undone.</small>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="light" onClick={onClose}>
                    Cancel
                </Button>
                <Button variant="danger" onClick={onConfirm}>
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>
    );
}