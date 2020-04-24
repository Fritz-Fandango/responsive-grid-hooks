import React from 'react';
import PropTypes from 'prop-types';

// Material UI components
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const UserCard = (props) => {
  const classes = useStyles();

  const {
    email, firstname, lastname, avatar,
  } = props;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={avatar}
          title={`${firstname} ${lastname}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {`${firstname} ${lastname}`}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {email}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Thumbnail Pic
        </Button>
      </CardActions>
    </Card>
  );
};

UserCard.propTypes = {
  email: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default UserCard;
