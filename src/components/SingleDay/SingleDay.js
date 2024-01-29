import React from "react";
import styles from "./SingleDay.module.css";

const SingleDay = ({ totalSchedules, dayAndDayNo, topics, title, info }) => {
  return (
    <div
      className={`${styles.cardWrapper} ${styles[`items-${totalSchedules}`]}  `}
    >
      {/* <div className={styles.dayAndDayNo}>
        <p className={styles.day}>{dayAndDayNo.day}</p>
        <p className={styles.dayNo}>{dayAndDayNo.dayNo}</p>
      </div> */}

      <div className={styles.box}>
        {/* {topics.map((topic, i) => ( */}
        <div className={styles.topic}>
          <h4 className={styles.title}>{title}</h4>
          <p className={styles.info}>{info}</p>
        </div>
        {/* ))}*/}
      </div>
    </div>
  );
};

export default SingleDay;
