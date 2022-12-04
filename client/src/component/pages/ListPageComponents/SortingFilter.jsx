import React, { useState, useEffect } from "react";
import Collapsible from 'react-collapsible';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ExpandMore from '@mui/icons-material/ExpandMore';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function SortingFilter() {

    const [state, setState] = useState({
        Abaya: false,
        Blouses: false,
        Dupattas: false,
        Patiala: false,
        Gowns: false
    });
    const [Fabric, setFabric] = useState({
        ArtSilk: false,
        BanariSilk: false,
        Cotton: false,
        CottonSilk: false,
        Acrylic: false
    });
    const [colors, setcolors] = useState({
        Black: false,
        Blue: false,
        Brown: false,
        Yellow: false,
        Gray: false
    });
    const [price, setprice] = useState({
        under_500: false,
        under_1000: false,
        under_2000: false,
        under_3000: false,
        under_5000: false
    });
    if(state.Abaya){
        
    }

    const { Abaya, Blouses, Dupattas, Patiala, Gowns } = state;
    const { ArtSilk, BanariSilk, Cotton, CottonSilk, Acrylic } = state;
    const { Black, Blue, Brown, Yellow, Gray } = state;
    const { under_500, under_1000, under_2000, under_3000, under_5000 } = state;

    const handlePrice = (event) => {
        setprice({
            ...price,
            [event.target.name]: event.target.checked,
        });


    };

    const handleColor = (event) => {
        setcolors({
            ...colors,
            [event.target.name]: event.target.checked,
        });


    };

    const handleFabrics = (event) => {
        setFabric({
            ...Fabric,
            [event.target.name]: event.target.checked,
        });

    };

    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.checked,
        });

    };

    return (
        <div>
            <Collapsible trigger={
                <ListItemButton >
                    <ListItemText primary="Category" />
                    <ExpandMore />
                </ListItemButton>
            }>
                <FormGroup sx={{ pl: 6 }}>
                    <FormControlLabel control={<Checkbox onChange={handleChange} checked={Abaya} name="Abaya" />} label="Abaya" />
                    <FormControlLabel control={<Checkbox onChange={handleChange} checked={Blouses} name="Blouses" />} label="Blouses" />
                    <FormControlLabel control={<Checkbox onChange={handleChange} checked={Dupattas} name="Dupattas" />} label="Dupattas" />
                    <FormControlLabel control={<Checkbox onChange={handleChange} checked={Patiala} name="Patiala" />} label="Patiala" />
                    <FormControlLabel control={<Checkbox onChange={handleChange} checked={Gowns} name="Gowns" />} label="Gowns" />
                </FormGroup>
                <ListItemButton sx={{ pl: 6 }}>
                    <ListItemText primary="View All" />
                </ListItemButton>
            </Collapsible>
            <Collapsible trigger={
                <ListItemButton >
                    <ListItemText primary="Fabric" />
                    <ExpandMore />
                </ListItemButton>
            }>
                <FormGroup sx={{ pl: 6 }}>
                    <FormControlLabel control={<Checkbox onChange={handleFabrics} checked={ArtSilk} name="ArtSilk" />} label="ArtSilk" />
                    <FormControlLabel control={<Checkbox onChange={handleFabrics} checked={BanariSilk} name="BanariSilk" />} label="BanariSilk" />
                    <FormControlLabel control={<Checkbox onChange={handleFabrics} checked={Cotton} name="Cotton" />} label="Cotton" />
                    <FormControlLabel control={<Checkbox onChange={handleFabrics} checked={CottonSilk} name="CottonSilk" />} label="CottonSilk" />
                    <FormControlLabel control={<Checkbox onChange={handleFabrics} checked={Acrylic} name="Acrylic" />} label="Acrylic" />
                </FormGroup>
                <ListItemButton sx={{ pl: 6 }}>
                    <ListItemText primary="View All" />
                </ListItemButton>
            </Collapsible>
            <Collapsible trigger={
                <ListItemButton >
                    <ListItemText primary="Color" />
                    <ExpandMore />
                </ListItemButton>
            }>
                <FormGroup sx={{ pl: 6 }}>
                    <FormControlLabel control={<Checkbox onChange={handleColor} checked={Black} name="Black" />} label="Black" />
                    <FormControlLabel control={<Checkbox onChange={handleColor} checked={Blue} name="Blue" />} label="Blue" />
                    <FormControlLabel control={<Checkbox onChange={handleColor} checked={Brown} name="Brown" />} label="Brown" />
                    <FormControlLabel control={<Checkbox onChange={handleColor} checked={Yellow} name="Yellow" />} label="Yellow" />
                    <FormControlLabel control={<Checkbox onChange={handleColor} checked={Gray} name="Gray" />} label="Gray" />
                </FormGroup>
                <ListItemButton sx={{ pl: 6 }}>
                    <ListItemText primary="View All" />
                </ListItemButton>
            </Collapsible>
            <Collapsible trigger={
                <ListItemButton >
                    <ListItemText primary="Price" />
                    <ExpandMore />
                </ListItemButton>
            }>
                <FormGroup sx={{ pl: 6 }}>
                    <FormControlLabel control={<Checkbox onChange={handlePrice} checked={under_500} name="under_500" />} label="under 500" />
                    <FormControlLabel control={<Checkbox onChange={handlePrice} checked={under_1000} name="under_1000" />} label="under 1000" />
                    <FormControlLabel control={<Checkbox onChange={handlePrice} checked={under_2000} name="under_2000" />} label="under 2000" />
                    <FormControlLabel control={<Checkbox onChange={handlePrice} checked={under_3000} name="under_3000" />} label="under 3000" />
                    <FormControlLabel control={<Checkbox onChange={handlePrice} checked={under_5000} name="under_5000" />} label="under 5000" />
                </FormGroup>
                <ListItemButton sx={{ pl: 6 }}>
                    <ListItemText primary="View All" />
                </ListItemButton>
            </Collapsible>
        </div>

    );


}