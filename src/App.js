import { useState } from "react";
import Star from "./star";
import "./App.css";

function App() {
  const [contact, setContact] = useState({
    firstName: "Litun",
    lastName: "Nayak",
    phone: "+91 773-564-8011",
    email: "nayaklitun9@gmail.com",
    isFavourite: false,
    Image: "../image/user.jpg",
  });
  function ToggleFavourite() {
    setContact((prevContact) => ({
      ...prevContact,
      isFavourite: !prevContact.isFavourite,
    }));
  }
  return (
    <main>
      <article className="card">
        <img src={contact.Image} alt="user" className="card--image" />
        <div className="card--info">
          <Star isFilled={contact.isFavourite} handleClick={ToggleFavourite} />
          <h2 className="card--name">
            {contact.firstName} {contact.lastName}
          </h2>
          <p className="card--contact">{contact.phone}</p>
          <p className="card--contact">{contact.email}</p>
        </div>
      </article>
    </main>
  );
}

export default App;
