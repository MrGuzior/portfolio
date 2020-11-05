import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import PublicIcon from '@material-ui/icons/Public';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    backgroundColor: '#ebeeee'
},
media: {
    height: 140,
    '&:hover': {
        cursor: 'default'
    }
},
textContent: {
    backgroundColor: '#ebeeee',
    '&:hover': {
        cursor: 'default'
    }
},
button: {
    color: 'gray',
    '& > *': {
        color: 'grey',
      },
},
projectTitle: {
    font: "1.3em 'opensans-bold', sans-serif;"
}
});

export default function MediaCard({data}) {
  const classes = useStyles();

  return (
    <Card  className={classes.root} >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={data.image}
          title="Contemplative Reptile"
        />
        <CardContent className={classes.textContent}>
          <Typography variant="h4" component="h2" className={classes.projectTitle}>
            {data.title}
          </Typography>
        </CardContent>

      </CardActionArea>
      <CardActions>
          {data.preview &&
        <Button 
            size="small" 
            variant="outlined" 
            color="primary"
            className={classes.button} 
            href={data.preview}
            startIcon={<PublicIcon/>}
            >
            Preview
        </Button>
          
          }
        <Button 
            size="small" 
            variant="outlined" 
            color="primary"
            className={classes.button}
            href={data.github}
            startIcon={<GitHubIcon/>}
        >
            Github
        </Button>
      </CardActions>
    </Card>
  );
}