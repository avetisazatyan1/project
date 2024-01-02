import { Card, CardContent, Typography } from "@mui/material";
import "./Styles.css"
const FirstInClass = () => {
  return (
    <div className="section-app-last">
    <div className="container">
      <Card class="card-section">
        <CardContent>
          <Typography variant="h3" component="div">
            First in class liquidity providers
          </Typography>
          <Typography variant="h5" component="div">
            Will Give You Lightning Fast Order Placement.
          </Typography>
          <Typography variant="body2" component="div">
            We offer all our clients the best trading solution in the form of
            our MT4, MT5 and cTrader accounts powered by data feed directly from
            our pool of prime liquidity providers.
          </Typography>
        </CardContent>
      </Card>
      </div>
    </div>
  );
};
export default FirstInClass;
