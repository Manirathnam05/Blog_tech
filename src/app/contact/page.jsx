'use client';
import React, { useState } from 'react';
import { Form, Input, Button, message, Alert } from 'antd';

const { TextArea } = Input;

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState("");
  const [form] = Form.useForm(); // ← use form instance

  const onFinish = async (values) => {
    setResult("Sending...");
    const formData = new FormData();
    formData.append("access_key", "a5f489b4-8684-41b1-bc94-ece6efc587fc");
    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("message", values.message);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      message.success("Thanks for your message! We'll get back to you soon.");
      setSubmitted(true);
      setResult("Form Submitted Successfully");
      form.resetFields(); // ← reset inputs here
    } else {
      message.error("Error submitting form.");
      setResult(data.message || "An error occurred");
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: '50px auto', padding: 24, background: '#fff', borderRadius: 8 }}>
      <h1 style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 24 }}>Contact Us</h1>

      {/* {submitted && (
        <Alert
          message="Thanks for your message! We'll get back to you soon."
          type="success"
          showIcon
          style={{ marginBottom: 24 }}
        />
      )} */}

      <Form
        layout="vertical"
        form={form} 
        onFinish={onFinish}
        initialValues={{ name: '', email: '', message: '' }}
      >
        <Form.Item
          label="Your Name"
          name="name"
          rules={[{ required: true, message: 'Please enter your name' }]}
        >
          <Input placeholder="Your Name" />
        </Form.Item>

        <Form.Item
          label="Your Email"
          name="email"
          rules={[
            { required: true, message: 'Please enter your email' },
            { type: 'email', message: 'Please enter a valid email' },
          ]}
        >
          <Input placeholder="Your Email" />
        </Form.Item>

        <Form.Item
          label="Your Message"
          name="message"
          rules={[{ required: true, message: 'Please enter your message' }]}
        >
          <TextArea autoSize={{ minRows: 8 }} placeholder="Your Message" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            {result === "Sending..." ? result : "Send Message"}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ContactPage;
