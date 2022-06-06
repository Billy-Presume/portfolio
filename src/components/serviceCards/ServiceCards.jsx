import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ImgMediaCard({ title, body, hireOnClick }) {
  const navigateToContactSection = (e) => {
    e.preventDefault();
    window.location.href = "#contact";
  };

  return (
    <Card sx={{ maxWidth: 270 }}>
      <CardMedia
        component="img"
        alt=""
        height="90"
        image={require("../../images/infographics1.png")}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {body}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={navigateToContactSection}>
          Hire
        </Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
