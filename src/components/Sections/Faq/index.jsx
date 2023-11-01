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
                General settings
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                feugiat. Aliquam eget maximus est, id dignissim quam.
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
                Users
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Donec placerat, lectus sed mattis semper, neque lectus feugiat
                lectus, varius pulvinar diam eros in elit. Pellentesque
                convallis laoreet laoreet.
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
                Advanced settings
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                Integer sit amet egestas eros, vitae egestas augue. Duis vel est
                augue.
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
                Advanced settings
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                Integer sit amet egestas eros, vitae egestas augue. Duis vel est
                augue.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
};
export default FaqSection;
