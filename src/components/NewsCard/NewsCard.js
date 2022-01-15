import React ,{useState, useEffect, createRef } from "react";
import {Card,CardActions,CardActionArea,CardContent,CardMedia,Button,Typography} from '@material-ui/core';
import useStyles from './styles.js';
import classNames from 'classnames';

const NewsCard = ({article:{description,publishedAt,source,title,url,urlToImage},i,activeArticle}) =>{
    const classes = useStyles();

    const [elRefs, setElRefs] = useState([]);
    const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop );
  
    useEffect(() => {
      window.scroll(0, 0);
  
      setElRefs((refs) => Array(20).fill().map((_, j) => refs[j] || createRef()));
    }, []);
  
    useEffect(() => {
      if (i === activeArticle && elRefs[activeArticle]) {
        scrollToRef(elRefs[activeArticle]);
      }
    }, [i, activeArticle, elRefs]);

    return(
        <Card  ref={elRefs[i]} className={classNames(activeArticle === i ? classes.activeCard : classes.gapBetween)}>
            <CardActionArea href={url} target="_blank">
                <CardMedia className={classes.media} image={urlToImage || "https://media.socastsrm.com/wordpress/wp-content/blogs.dir/1057/files/2021/11/6277208708_7e6607d601_b.jpg"}/>
                <div className={classes.spaceBetween}>
                    <Typography style={{fontSize:13}} variant="body2" color="textSecondary" component="h6">{(new Date(publishedAt)).toDateString()}</Typography>
                    <Typography style={{fontSize:13}} variant="body2" color="textSecondary" component="h6">{source.name}</Typography>
                </div>
                <div >
                    <Typography className={classes.title} gutterBottom variant="h6">{title}</Typography>
                    <CardContent>
                        <Typography variant ="body2" color="textSecondary" component="p">{description}</Typography>    
                    </CardContent>
                    
                </div>
                
                
            </CardActionArea>
            <CardContent className={classes.spaceBetween2}>
                        <Button href={url} size="small" color="primary">
                            <Typography variant="h7" color="textSecondary">READ MORE</Typography>
                        </Button>
                        <Typography variant="h7" color="textSecondary">{i+1}</Typography>
                        
            </CardContent>
        </Card>

    )
}

export default NewsCard;