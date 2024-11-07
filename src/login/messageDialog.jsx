import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';
import './authenticated.css';

export function MessageDialog({
  message,
  onHide,
  title = "Notification",
  footerButtons = null,
  className = "",
  style = {},
}) {
  return (
    <Modal show={!!message} onHide={onHide} centered className={className} style={style}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{message}</Modal.Body>
      {footerButtons ? (
        <Modal.Footer>{footerButtons}</Modal.Footer>
      ) : (
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>Close</Button>
        </Modal.Footer>
      )}
    </Modal>
  );
}

MessageDialog.propTypes = {
  message: PropTypes.string,
  onHide: PropTypes.func.isRequired,
  title: PropTypes.string,
  footerButtons: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
};
