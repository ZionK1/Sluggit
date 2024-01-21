import React, { useState } from "react";

const SlugEvents = () => {
  const [showModal, setShowModal] = useState(false);
  const [eventDetails, setEventDetails] = useState({
    time: "",
    location: "",
  });

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleAddEvent = () => {
    // Add your logic to handle the event details (time and location)
    console.log("Event Details:", eventDetails);
    // You can add further logic here, e.g., sending data to a server
    handleCloseModal(); // Close the modal after handling the event
  };

  return (
    <div>
      <h2>Discover Slug Events</h2>
      <p>This is the content for the Slug Events page.</p>

      <button onClick={handleOpenModal}>Add Event</button>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <h3>Add Event</h3>

            {/* Form for choosing time and location */}
            <form>
              <label>
                Time:
                <input
                  type="text"
                  name="time"
                  value={eventDetails.time}
                  onChange={handleChange}
                />
              </label>
              <br />
              <label>
                Location:
                <input
                  type="text"
                  name="location"
                  value={eventDetails.location}
                  onChange={handleChange}
                />
              </label>
              <br />
              <button type="button" onClick={handleAddEvent}>
                Add Event
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SlugEvents;
