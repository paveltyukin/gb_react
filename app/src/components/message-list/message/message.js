import { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './message.module.css';
import * as moment from 'moment';
import { Avatar, IconButton, Stack } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export const Message = memo(({ message }) => {
  const { author, value } = message;

  return (
    <>
      <div
        className={classNames(styles.message, {
          [styles.currentMessage]: author === 'User',
        })}
      >
        <Stack direction="row" spacing={2}>
          <Avatar sx={{ bgcolor: 'primary.light' }}>{author.slice(0,1)}</Avatar>
          <IconButton
            sx={{ color: 'primary.contrastText' }}
            aria-label="settings" >
            <MoreVertIcon />
          </IconButton>
        </Stack>
        <p>{author}</p>
        <h3>{value}</h3>
        <p>{moment().format('hh:mm:ss MM-DD-YYYY')}</p>
      </div>
    </>
  );
});

Message.propTypes = {
  message: PropTypes.shape({
    author: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
  test: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    })
  ),
};
