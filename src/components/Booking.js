import React, { useState } from "react";
import "./CSS/booking.css";
import img from "../assets/reservation.jpg";

function Booking() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guest, setGuest] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function formSubmit(e) {
    e.preventDefault();
    if (
      name   === "" ||
      email  === "" ||
      phone  === "" ||
      date   === "" ||
      time   === "" ||
      guest  === ""
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
          ></div>

          <div className="col-lg-8 d-flex align-items-center reservation-form-bg">
            <form className="php-email-form">
              <div className="row gy-4">
                <div className="col-lg-4 col-md-6">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your Name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  />
                </div>
                <div className="col-lg-4 col-md-6">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Your Email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
                <div className="col-lg-4 col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    name="phone"
                    placeholder="Your Phone"
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                  />
                </div>
                <div className="col-lg-4 col-md-6">
                  <input
                    type="text"
                    name="date"
                    className="form-control"
                    placeholder="Date"
                    onChange={(e) => setDate(e.target.value)}
                    value={date}
                  />
                </div>
                <div className="col-lg-4 col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    name="time"
                    placeholder="Time"
                    onChange={(e) => setTime(e.target.value)}
                    value={time}
                  />
                </div>
                <div className="col-lg-4 col-md-6">
                  <input
                    type="number"
                    className="form-control"
                    name="people"
                    placeholder="# of people"
                    onChange={(e) => setGuest(e.target.value)}
                    value={guest}
                  />
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
