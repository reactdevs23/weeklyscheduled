import React from "react";
import SingleDay from "../SingleDay/SingleDay";
import styles from "./MainComponent.module.css";

const MainComponent = ({
  fontFamily,
  primaryColor,
  secondaryColor,
  textColor,
  weekNumber,
  placeName,
  withWhoom,
  title,
  scheduleInfo,
}) => {
  return (
    <div
      className={styles.mainWrapper}
      style={{
        "--primaryColor": primaryColor,
        "--secondaryColor": secondaryColor,
        "--textColor": textColor,
        fontFamily: fontFamily,
      }}
    >
      <div className={styles.wrapper}>
        <div>
          <h2 className={styles.weekNumber}>
            {weekNumber} <span className={styles.placeName}>{placeName}</span>
          </h2>
          <h1 className={styles.title}>
            <span className={styles.withWhoom}>{withWhoom}</span> {title}
          </h1>
        </div>
        <div className={styles.scheduleInfoWrapper}>
          <div className={styles.schedule}>
            {scheduleInfo.dayAndDayNo.map((el, i) => (
              <div
                className={`${styles.dayAndDayNoWrapper} ${
                  styles[`items-${scheduleInfo.dayAndDayNo.length}`]
                }  `}
              >
                <div className={styles.dayAndDayNo} key={i}>
                  <p className={styles.day}>{el.day}</p>
                  <p className={styles.dayNo}>{el.dayNo}</p>
                </div>
              </div>
            ))}
          </div>
          {scheduleInfo.topics.map((topic, id) => (
            <div className={styles.schedule} key={id}>
              {topic.map((el, i) => (
                <div
                  className={`${styles.cardWrapper} ${
                    styles[`items-${topic.length}`]
                  }  `}
                  key={i}
                >
                  <div className={styles.box}>
                    {/* {topics.map((topic, i) => ( */}
                    <div className={styles.topic}>
                      <h4 className={styles.topicTitle}>{el.title}</h4>
                      <p className={styles.info}>{el.info}</p>
                    </div>
                    {/* ))}*/}
                  </div>
                </div>
              ))}
            </div>
          ))}
          ;
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
