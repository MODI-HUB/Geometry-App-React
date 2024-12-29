import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


export default function InfoBox({info}){

   
    return (

       

    <div className="InfoBox">
       
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image="noaa-p9BRX1mBfe4-unsplash.jpg"
                
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                   {info.city}
                </Typography>
          
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    <div>Latitude : {info.lat}</div>
                 
                    <div>Longitude : {info.lon}</div>
                </Typography>
            </CardContent>
        </Card>
    </div>
    )
}