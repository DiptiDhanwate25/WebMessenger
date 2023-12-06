import React from 'react';
import { Form, Button, ListGroup } from 'react-bootstrap';
import { useFormik } from 'formik';

const ChatSection = ({ user, messages, sendMessage }) => {
  const formik = useFormik({
    initialValues: {
      messageText: '',
    },
    validate: (values) => {
      const errors = {};
      if (!values.messageText.trim()) {
        errors.messageText = 'Message is required';
      } else if (values.messageText.length > 100) {
        errors.messageText = 'Message should not exceed 100 characters';
      }
      return errors;
    },
    onSubmit: (values, { resetForm }) => {
      sendMessage(values.messageText);
      resetForm();
    },
  });

  return (
    <div className="chat-section">
      <h3>{user}</h3>
      <ListGroup className="message-list">
        {messages.map((message, index) => (
          <ListGroup.Item
            key={index}
            className={`message ${message.sender === user ? 'sent' : 'received'}`}
            style={{ textAlign: message.sender === user ? 'right' : 'left' }}
          >
            {`${message.sender}: ${message.text}`}
          </ListGroup.Item>
        ))}
      </ListGroup>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Type a message..."
            name="messageText"
            value={formik.values.messageText}
            onChange={formik.handleChange}
            isInvalid={formik.touched.messageText && !!formik.errors.messageText}
            required
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.messageText}
          </Form.Control.Feedback>
        </Form.Group>
        <Button variant="primary" type="submit">
          Send
        </Button>
      </Form>
    </div>
  );
};

export default ChatSection;


