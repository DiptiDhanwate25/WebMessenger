import React, { useState } from 'react';
import { Form, Button, ListGroup } from 'react-bootstrap';
import { useFormik } from 'formik';
import './ChatSection.css'; // Import the CSS file

const ChatSection = ({ user, messages, sendMessage, setUser }) => {
  const [username, setUsername] = useState(user);

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
      sendMessage(values.messageText, username);
      resetForm();
    },
  });

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setUser(e.target.value);
  };

  return (
    <div className={`chat-section ${user === 'User1' ? 'user1' : 'user2'}`}>
      <h3>{username}</h3>
      <div className="message-list">
        <ListGroup>
          {messages.map((message, index) => (
            <ListGroup.Item
              key={index}
              className={`message ${message.sender === user ? 'sent' : 'received'}`}
            >
              {`${message.sender}: ${message.text}`}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
      <Form onSubmit={formik.handleSubmit}>
      
        <Form.Group className="message-input">
          <div className="flex-grow-1 me-2">
          <div>
          <Form.Control
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={handleUsernameChange}
           />
          </div>
            <Form.Control
              type="text"
              placeholder="Type a message..."
              name="messageText"
              value={formik.values.messageText}
              onChange={formik.handleChange}
              isInvalid={formik.touched.messageText && !!formik.errors.messageText}
              
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.messageText}
            </Form.Control.Feedback>
          </div>
          <Button variant="primary" type="submit">
            Send
          </Button>
        </Form.Group>
      </Form>
      
    </div>
  );
};

export default ChatSection;
