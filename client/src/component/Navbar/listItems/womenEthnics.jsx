import React from "react";
import Collapsible from 'react-collapsible';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ExpandMore from '@mui/icons-material/ExpandMore';

export default function WomenEthnics() {
    const [open, setOpen] = React.useState(true);
    const [ViewAll, setViewAll] = React.useState(false);
    const handleClick = () => {
        setOpen(!open);
    };
    function handleAllWE(){
        setViewAll(!ViewAll)
    }

    return (
        <Collapsible trigger={
            <ListItemButton onClick={handleClick} style={!open? {color: "#ea2a6b", borderLeft: "5px solid"}: {borderLeft: "0px"} }>
                <ListItemText primary="Women Ethnic" />
                <ExpandMore />
            </ListItemButton>
        }>
            <Collapsible trigger={
                <ListItemButton sx={{ pl: 4 }} onClick={handleAllWE} style={ViewAll? {color: "#ea2a6b" }: {borderLeft: "0px"} }>
                    <ListItemText primary="All Women Ethnic" />
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