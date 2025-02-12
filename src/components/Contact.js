import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import "../App.css";

export const Contact = () => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [status, setStatus] = useState("");

  const handleRating = (value) => {
    setRating(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating === 0) {
      setStatus("Please select a rating.");
      return;
    }
    setStatus("Thank you for your feedback!");
    setRating(0);
    setFeedback("");
  };

  return (
    <section className="contact" id="rate-us">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} className="image-col">
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={isVisible ? "animate__animated animate__zoomIn contact-img" : "contact-img"}
                  src={contactImg}
                  alt="Rate Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} className="form-col">
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn form-container" : "form-container"}>
                  <h2 className="contact-title">Rate Us</h2>
                  <form onSubmit={handleSubmit} className="contact-form">
                    <Row>
                      <Col xs={12} className="text-center star-container">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <span
                            key={star}
                            className={star <= rating ? "star filled" : "star"}
                            onClick={() => handleRating(star)}
                          >
                            {star <= rating ? "\u2605" : "\u2606"}
                          </span>
                        ))}
                      </Col>
                      <Col xs={12} className="feedback-col">
                        <textarea
                          rows="4"
                          className="contact-input"
                          value={feedback}
                          placeholder="Your feedback (optional)"
                          onChange={(e) => setFeedback(e.target.value)}
                        ></textarea>
                      </Col>
                      <Col xs={12} className="text-center button-col">
                        <button type="submit" className="contact-button">
                          <span>Submit</span>
                        </button>
                      </Col>
                      {status && (
                        <Col xs={12} className="status-message">
                          <p className="success-message">{status}</p>
                        </Col>
                      )}
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};