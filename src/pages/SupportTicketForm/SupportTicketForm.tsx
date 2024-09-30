import React, { useState } from 'react';
import { Row, Col, Form, Button, Modal } from 'react-bootstrap';
import "./SupportTicketForm.css"

const SupportTicketForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('');
  const [description, setDescription] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [ticketNumber, setTicketNumber] = useState('');

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (firstName && email && topic) {
      const randomTicketNumber = Math.floor(1000 + Math.random() * 9000);
      setTicketNumber(randomTicketNumber.toString());
      setShowSuccess(true);
    } else {
      alert('Please fill in all required fields.');
    }
  };

  return (
    <div className='container-fluid bg-black text-white p-3'>
      <h2>Support Ticket Form</h2>
      <hr className='bg-white'/>
      <Form onSubmit={handleSubmit} className={`${ (showSuccess) ? "hide" : "show" }`}>
        <Row>
          <Col xs={6}>
            <Form.Label>Name <span className="color-red">*</span></Form.Label>
            <Row>
              <Col>
                <Form.Group controlId="formFirstName">
                  <Form.Control
                    className='custom-input name'
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </Form.Group>
                <span className='text-gray'>First</span>
              </Col>
              <Col>
                <Form.Group controlId="formLastName">
                  <Form.Control
                    className='custom-input name'
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </Form.Group>
                <span className='text-gray'>Last</span>
              </Col>
            </Row>
            <Form.Group controlId="formEmail" className='my-2'>
              <Form.Label>Email <span className="color-red">*</span></Form.Label>
              <Form.Control
                className='custom-input'
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="formTopic">
              <Form.Label>Topic <span className="color-red">*</span></Form.Label>
              <div className='radio-container'>
                <div>What can we help you today?</div>
                <Form.Check
                  type="radio"
                  className="custom-radio"
                  id="general"
                  label="General"
                  name="topic"
                  value="General"
                  checked={topic === 'General'}
                  onChange={(e) => setTopic(e.target.value)}
                />
                <Form.Check
                  type="radio"
                  className="custom-radio"
                  id="bug"
                  label="Bug"
                  name="topic"
                  value="Bug"
                  checked={topic === 'Bug'}
                  onChange={(e) => setTopic(e.target.value)}
                />
              </div>
            </Form.Group>
          </Col>

          <Col xs={6}>
            <Form.Group controlId="formDescription">
              <Form.Label>Description <sup className='text-gray'>(optional)</sup></Form.Label>
              <Form.Control
                className='custom-input'
                as="textarea"
                placeholder="Description Report"
                rows={12}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
        <div className='d-flex flex-column align-items-end mt-3'>
          <Button className={`btn-send align-items-center px-4 ${ (!firstName || !email || !topic) ? "disable-btn" : "enable-btn" }`} type="submit">
            SEND
          </Button>
        </div>
      </Form>
      <div className={`${ (!showSuccess) ? "hide" : "show" }`}>
        <div className='text-center mt-5 mb-5'>
          <p className='thanks-title'>Thank you for sending us your report, we will <br/> track the problem now</p>
          <p className='ticket-number'>ticket number : <span className='text-white'>{ticketNumber}</span></p>
        </div>
      </div>
    </div>
  );
};

export default SupportTicketForm;
