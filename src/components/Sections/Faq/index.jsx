import * as React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import "./Styles.css";

const FaqSection = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="app-section-faq">
    <div className="container">
      <Card className="card">
        <Typography className="section-header">FAQ</Typography>

        <CardContent>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={
                expanded === "panel1" ? (
                  <RemoveIcon color={"primary"} />
                ) : (
                  <AddIcon color={"primary"} />
                )
              }
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography
                variant="subtitle1"
                sx={{ width: "33%", flexShrink: 0 }}
              >
                What is TradeWithCapital?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                At TradeWithCapital, we're in the business of investing in traders. Our mission is to identify and back talented individuals with a passion for trading. We believe in giving traders the opportunity they deserve, and that is why we offer funding to those who prove themselves through our rigorous evaluation process.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={
                expanded === "panel1" ? (
                  <RemoveIcon color={"primary"} />
                ) : (
                  <AddIcon color={"primary"} />
                )
              }
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography
                variant="subtitle1"
                sx={{ width: "33%", flexShrink: 0 }}
              >
                How do I get started?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Simply sign up for our Evaluation Phase and prove that you are a profitable trader by passing both stage 1 and stage 2.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              expandIcon={expanded === "panel3" ? <RemoveIcon /> : <AddIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography
                variant="subtitle1"
                sx={{ width: "33%", flexShrink: 0 }}
              >
                How long will it take for me to become a Funded Trader?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                We only have a minimum of 8 trading days in our Evaluation Phase. This means that you can become a Funded Trader in just over a week!
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              expandIcon={
                expanded === "panel1" ? (
                  <RemoveIcon color={"primary"} />
                ) : (
                  <AddIcon color={"primary"} />
                )
              }
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              {" "}
              <Typography
                variant="subtitle1"
                sx={{ width: "33%", flexShrink: 0 }}
              >
                What platforms can I trade on?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                You have the option to choose cTrader, MT4, MT5, or TradeLocker.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}
          >
            <AccordionSummary
              expandIcon={
                expanded === "panel1" ? (
                  <RemoveIcon color={"primary"} />
                ) : (
                  <AddIcon color={"primary"} />
                )
              }
              aria-controls="panel5bh-content"
              id="panel5bh-header"
            >
              {" "}
              <Typography
                variant="subtitle1"
                sx={{ width: "33%", flexShrink: 0 }}
              >
                What instruments do you offer and how much leverage can I trade with?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Commodities: 1:20
              </Typography>
              <Typography>
                Forex: 1:100
              </Typography>
              <Typography>
                Indices: 1:20
              </Typography>
            </AccordionDetails>
          </Accordion>
        </CardContent>
      </Card>
      </div>
    </div>
  );
};
export default FaqSection;
