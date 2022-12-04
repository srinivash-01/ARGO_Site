import React, {useState, useEffect} from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import Banner1 from "../../images/banner1.jpg";
import Banner2 from "../../images/banner2.jpg";
import Banner3 from "../../images/banner3.jpg";
export default function ImageCarousel(props) {


    

    var items = [
        {
            image: Banner1
        },
        {
            image: Banner2
        },
        {
            image: Banner3
        }
    ]

    return (
        <Carousel indicators={false}>
            {
                items.map((item, i) => <Item key={i} item={item} />)
            }
        </Carousel>
    )
}

function Item(props) {
    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 768px)").matches
      )
    
      useEffect(() => {
        window
        .matchMedia("(min-width: 768px)")
        .addEventListener('change', e => setMatches( e.matches ));
      }, []);
    const myStyle = {
        backgroundImage: `url(${props.item.image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backkgroundColor: "#000",
        height: matches? "280px" : "150px"
    };

    return (
        <div >
            <Paper style={myStyle}>
            </Paper>
        </div>
    )
}