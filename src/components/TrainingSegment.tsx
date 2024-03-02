import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function TrainingSegment({ index }: any) {
    function shouldBeExpanded() {
        return index === 1;
    }

    return (
        <Accordion
            defaultExpanded={shouldBeExpanded()}
            aria-controls={`training-segment-${index}`}
            id={`training-segment-${index}`}
        >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`training-segment-${index}-summary`}
                id={`training-segment-${index}-summary`}
            >
                <strong>Segment treningowy {index}.</strong>
            </AccordionSummary>
            <AccordionDetails>
                <p>Rodzaj treningu</p>
                <p>Kilometry</p>
                <p>Tętno</p>
                <p>Tępo</p>
            </AccordionDetails>
        </Accordion>
    );
}

export default TrainingSegment;
