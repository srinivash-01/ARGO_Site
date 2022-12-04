import * as React from 'react';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import WomenEthnics from './listItems/womenEthnics';
import WomenWestern from "./listItems/womenWestern";

export default function NestedList() {
    return (
        <List
            sx={{
                width: '100%', maxWidth: 360, bgcolor: 'background.paper',
                marginTop: "-16px"
            }}
            component="nav"
            aria-labelledby="nested-list-subheader"
        >
            <ListItemButton style={{ marginTop: "-9px" }}>
                <ListItemIcon>
                    <PermIdentityIcon />
                </ListItemIcon>
                <ListItemText primary="Profile" />
                <button type="button" class="btn btn-danger" style={{ height: "35px", fontSize: "small" }}>Sign up</button>
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <ShoppingBagOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="My Orders" />
            </ListItemButton>
            <p style={{
                paddingLeft: "20px",
                paddingTop: "10px",
                fontSize: "11px",
                marginBottom: "5px"
            }}>CATEGORIES</p>
            <WomenEthnics />
            <WomenWestern />
        </List>
    );
}
