"use client";
import { useState } from "react";
import styles from "./contact.module.css";

export default function contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e:any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Message Sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className={styles.container}>
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className={styles.input}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className={styles.input}

        />
        <textarea
          name="message"
          placeholder="Your Message"
       
          value={formData.message}
          onChange={handleChange}
          required
          className={styles.textarea}

        />
        <button type="submit"className={styles.button}>Send</button>
      </form>
    </div>
  );
}
