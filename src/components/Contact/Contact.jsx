import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    reply_to: "",
    message: ""
  });

  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setSuccess(false);
    setError("");
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!formData.from_name || !formData.reply_to || !formData.message) {
      setError("Please fill all fields.");
      return;
    }

    setSending(true);

    try {
      const res = await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.from_name,
          reply_to: formData.reply_to,
          message: formData.message
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );

      console.log("Email sent:", res.status);

      setSuccess(true);
      setFormData({ from_name: "", reply_to: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setError("Failed to send message. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <Container style={{ paddingTop: "50px" }}>
      <Row>
        <Col md={6} className="c-left">
          <h1>Get in Touch</h1>
          <h1 className="yellow">Contact Me</h1>
        </Col>

        <Col md={6} className="c-right">
          <form onSubmit={sendEmail}>
            <input
              type="text"
              name="from_name"
              className="user"
              placeholder="Name"
              value={formData.from_name}
              onChange={handleChange}
            />

            <input
              type="email"
              name="reply_to"
              className="user"
              placeholder="Email"
              value={formData.reply_to}
              onChange={handleChange}
            />

            <textarea
              name="message"
              className="user"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
            />

            {error && <span className="not-done">{error}</span>}

            <Button type="submit" className="button" disabled={sending}>
              {sending ? (
                <>
                  <Spinner size="sm" animation="border" /> Sending...
                </>
              ) : (
                "Send Message"
              )}
            </Button>

            {success && (
              <span className="done">
                Thank you for reaching out. I’ll get back to you soon.
              </span>
            )}
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
