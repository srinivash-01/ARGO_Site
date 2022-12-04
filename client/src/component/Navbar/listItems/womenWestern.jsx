import React from "react";
import Collapsible from 'react-collapsible';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { borderBottom } from "@mui/system";

export default function WomenWestern() {
    const [open, setOpen] = React.useState(true);
    const [topWares, setTopWares] = React.useState(false);
    const [BottomWares, setBottomWares] = React.useState(false);
    const [innerWares, setInnerWares] = React.useState(false);
    const [sleepWares, setSleepWares] = React.useState(false);
    const [ViewAll, setViewAll] = React.useState(false);
    const handleClick = () => {
        setOpen(!open);
    };
    function handleAllWE(){
        setViewAll(!ViewAll)
    }
    function handleTopWares(){
        setTopWares(!topWares);
    }
    function handleBotttomWares(){
        setBottomWares(!BottomWares);
    }
    function handleInnerWares(){
        setInnerWares(!topWares);
    }
    function handleSleepWares(){
        setSleepWares(!topWares);
    }

    return (
        <Collapsible trigger={
            <ListItemButton onClick={handleClick} style={!open? {color: "#ea2a6b", borderLeft: "5px solid"}: {borderLeft: "0px"} }>
                <ListItemText primary="Women Western" />
                <ExpandMore />
            </ListItemButton>
        }>
            <Collapsible trigger={
                <ListItemButton sx={{ pl: 4 }} onClick={handleTopWares} style={topWares ? {color: "#ea2a6b" }: {borderLeft: "0px"} }>
                    <ListItemText primary="TopWares" />
                    <ExpandMore />
                </ListItemButton>

            }>
                <ListItemButton sx={{ pl: 6 }}>
                    <ListItemText primary="Dresses" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 6 }}>
                    <ListItemText primary="Tops" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 6 }}>
                    <ListItemText primary="Sweaters" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 6 }}>
                    <ListItemText primary="Jump suits" />
                </ListItemButton>
            </Collapsible>

{/* 2222222222222222222222222222222222 */}

<Collapsible trigger={
                <ListItemButton sx={{ pl: 4 }} onClick={handleBotttomWares} style={BottomWares? {color: "#ea2a6b" }: {borderLeft: "0px"} }>
                    <ListItemText primary="Bottom Wares" />
                    <ExpandMore />
                </ListItemButton>

            }>
                <ListItemButton sx={{ pl: 6 }}>
                    <ListItemText primary="View All" />
                </ListItemButton>
            </Collapsible>
{/* ?????????????????????//////? */}


<Collapsible trigger={
                <ListItemButton sx={{ pl: 4 }} onClick={handleAllWE} style={ViewAll? {color: "#ea2a6b" }: {borderLeft: "0px"} }>
                    <ListItemText primary="Inner Wares" />
                    <ExpandMore />
                </ListItemButton>

            }>
                <ListItemButton sx={{ pl: 6 }}>
                    <ListItemText primary="View All" />
                </ListItemButton>
            </Collapsible>
{/* //////////////////////////////////////////////////////////////////// */}

<Collapsible trigger={
                <ListItemButton sx={{ pl: 4 }} onClick={handleAllWE} style={ViewAll? {color: "#ea2a6b" }: {borderLeft: "0px"} }>
                    <ListItemText primary="Sleep Wares" />
                    <ExpandMore />
                </ListItemButton>

            }>
                <ListItemButton sx={{ pl: 6 }}>
                    <ListItemText primary="View All" />
                </ListItemButton>
            </Collapsible>

        </Collapsible>

    );


}