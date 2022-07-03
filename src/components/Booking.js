import React, { useState } from "react";
import "./CSS/booking.css";
import img from "../assets/reservation.jpg";

function Booking() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [date, setDate] = React.useState("");
  const [time, setTime] = React.useState("");
  const [guest, setGuest] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [error, setError] = React.useState("");
  const [success, setSuccess] = React.useState("");

  function formSubmit(e) {
    e.preventDefault();
    if (
      name === "" ||
      email === "" ||
      phone === "" ||
      date === "" ||
      time === "" ||
      guest === ""
    ) {
      setError("Please fill out all fields");
      setTimeout(() => {
        setError("");
      }, 2000);
    } else if (!email.includes("@") || !email.includes(".")) {
      setError("Please enter a valid email");
      setTimeout(() => {
        setError("");
      }, 2000);
    } else {
      setSuccess("Your reservation has been sent");
      setName("");
      setEmail("");
      setPhone("");
      setDate("");
      setTime("");
      setGuest("");
      setMessage("");
      setTimeout(() => {
        setSuccess("");
      }, 2000);
    }
  }

  return (
    <section id="book-a-table" className="book-a-table">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Book A Table</h2>
          <p>
            Book <span>Your Stay</span> With Us
          </p>
        </div>

        <div className="row g-0">
          <div
            className="col-lg-4 reservation-img"
            style={{ backgroundImage: `url(${img})` }}
            data-aos="zoom-out"
            data-aos-delay="200"
          ></div>

          <div className="col-lg-8 d-flex align-items-center reservation-form-bg">
            <form
              action=""
              method="post"
              role="form"
              className="php-email-form"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="row gy-4">
                <div className="col-lg-4 col-md-6">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    data-rule="minlen:4"
                    data-msg="Please enter at least 4 chars"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  />
                  <div className="validate"></div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    data-rule="email"
                    data-msg="Please enter a valid email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                  <div className="validate"></div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    name="phone"
                    id="phone"
                    placeholder="Your Phone"
                    data-rule="minlen:4"
                    data-msg="Please enter at least 4 chars"
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                  />
                  <div className="validate"></div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <input
                    type="text"
                    name="date"
                    className="form-control"
                    id="date"
                    placeholder="Date"
                    data-rule="minlen:4"
                    data-msg="Please enter at least 4 chars"
                    onChange={(e) => setDate(e.target.value)}
                    value={date}
                  />
                  <div className="validate"></div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    name="time"
                    id="time"
                    placeholder="Time"
                    data-rule="minlen:4"
                    data-msg="Please enter at least 4 chars"
                    onChange={(e) => setTime(e.target.value)}
                    value={time}
                  />
                  <div className="validate"></div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <input
                    type="number"
                    className="form-control"
                    name="people"
                    id="people"
                    placeholder="# of people"
                    data-rule="minlen:1"
                    data-msg="Please enter at least 1 chars"
                    onChange={(e) => setGuest(e.target.value)}
                    value={guest}
                  />
                  <div className="validate"></div>
                </div>
              </div>
              <div className="form-group mt-3">
                <textarea
                  className="form-control"
                  name="message"
                  rows="5"
                  placeholder="Message"
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                ></textarea>
                <div className="validate"></div>
              </div>
              <div className="mb-3">
                <div
                  className={error ? "error-message" : ""}
                  style={error ? { display: "block" } : { display: "none" }}
                >
                  {error}
                </div>
                <div
                  className={success ? "sent-message" : ""}
                  style={
                    success === "" ? { display: "none" } : { display: "block" }
                  }
                >
                  {success}
                </div>
              </div>
              <div className="text-center">
                <button type="submit" onClick={formSubmit}>
                  Book a Table
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Booking;
