import React from "react";

import styles from "./SingleCard.module.css";

export default function SingleCard({ card, handleChoice, flipped, disabled }) {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className={styles.card}>
      <div className={flipped ? styles.flipped : ""}>
        <img src={card.src} alt="front card" className={styles.front} />
        <img
          src="/img/cat_cover.png"
          alt="back card"
          onClick={handleClick}
          className={styles.back}
        />
      </div>
    </div>
  );
}
