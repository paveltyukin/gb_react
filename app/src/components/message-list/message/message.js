import { memo } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./message.module.css";
import * as moment from 'moment';

export const Message = memo(({ message }) => {
  const { author, value } = message;

  return (
    <div
      className={classNames(styles.message, {
        [styles.currentMessage]: author === "User",
      })}
    >
      <h3>{value}</h3>
      <p>{author}</p>
      <p>{moment.unix(Date.now()/1000).format("DD-MM-YYYY HH:mm:ss")}</p>
    </div>
  );
});

Message.propTypes = {
  message: PropTypes.shape({
    author: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired
};
