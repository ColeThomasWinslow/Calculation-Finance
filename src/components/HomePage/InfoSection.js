import React from "react";
import money from "./money.png";
function InfoSection() {
  return (
    <div className="Graphic">
      <img src={money} alt="MoneyImg" />
      <div className="GraphicText">
        <h2> Get the most from your money</h2>
        <p>
          Discover what you need to master your money with our blog. See the big
          picture, receive insights and get clear next steps — all in one place.
        </p>
      </div>
    </div>
  );
}

export default InfoSection;
