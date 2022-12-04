import Skeleton from '@mui/material/Skeleton';
import Grid from '@mui/material/Grid';
const Temp = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
export default function ListPagRender() {
    return (
        <Grid container spacing={{ xs: 2, md: 5 }} columns={{ xs: 4, sm: 8, md: 8 }} style={{ marginTop: "20px" }}>
            {Temp.map(Data => <Grid item xs={2} sm={4} md={2} style={{ paddingTop: "0px" }}>
                <div style={{ width: "auto", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div
                        style={{
                            display: "flex",
                            height: "160px",
                            alignItems: "center",
                            justifyContent: "center",
                            overflow: "hidden"
                        }}>
                        <Skeleton variant="rectangular" width={130} height={118} animation="wave" />
                    </div>
                    <Skeleton variant="text" width={150} height={40} animation="wave" />
                    <Skeleton variant="text" width={150} height={40} animation="wave" />
                    <Skeleton variant="text" width={150} height={40} animation="wave" />
                </div>
            </Grid>)}

        </Grid>

    );
}