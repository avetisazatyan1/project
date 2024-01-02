import * as React from "react";
import {
  Typography,
  Card,
  CardHeader,
  CardContent,
  Grid,
  CardMedia,
  Avatar,
  Box,
} from "@mui/material";

import "./Styles.css";

const data = [
  {
    image: "time.png",
    subtitle: "No Time Limit on Challenges",
    content: "No Pressure Trading, Take As Long As You Want To Hit Your Goals.",
  },
  {
    image: "high_profit.png",
    subtitle: "Realistic Targets",
    content:
      "Get funded faster with realistic, achievable targets to highlight your capability as a trader.",
  },
  {
    image: "target.png",
    subtitle: "Scaling Plan",
    content:
      "We aim for long-term business relationships with profitable traders.  If you manage to be consistent and profitable, we will increase the balance of your TWC account and increase the profit split according to our Scaling Plan.",
  },
  {
    image: "earning-trading 1.png",
    subtitle: "Instant Account Reset",
    content:
      "Immediately Reset Your Simulated Funded Account (Only available after passing the challenge).",
  },
];

const OurSpecifications = () => {
  return (
    <div className="app-section-ourSpecifications">
    <div className="container">
      <Card className="main-card">
        <h2  className="section-header">
          Trade with a Prop Trading Firm that is built for You
        </h2>
        <CardContent>
          <Grid container spacing={4}>
            {data?.map((item, i) => (
              <Grid item xs={6} md={3} sm={6} key={i}>
                <Card className="specification-card" variant="outlined">
                  <Box
                    sx={{
                      display: "flex",
                      gap: 2,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Avatar
                      src={`./assets/images/${item.image}`}
                      variant="plain"
                    />
                  </Box>
                  <CardContent>
                    <h3 className="subtitle">
                      {item.subtitle}
                    </h3>
                    <Typography className="body-text">
                      {item.content}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card> 
      </div>
    </div>
  );
};
export default OurSpecifications;
