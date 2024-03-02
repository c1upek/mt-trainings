import React, { useState } from "react";
import TrainingSegment from "../components/TrainingSegment";

function Trainings() {
    const [trainingSegments, setTrainingSegments] = useState([1]);

    const trainingSegmentsDisplay = trainingSegments.map(
        (trainingSegmentIndex) => (
            <TrainingSegment
                key={trainingSegmentIndex}
                index={trainingSegmentIndex}
            />
        )
    );

    function handleAddTrainingSegment() {
        const newTrainingSegments = trainingSegments.concat(
            trainingSegments.length + 1
        );
        setTrainingSegments(newTrainingSegments);
    }

    return (
        <div>
            {trainingSegmentsDisplay}
            <div>
                <button onClick={handleAddTrainingSegment}>
                    NADUŚ ABY DODAĆ
                </button>
            </div>
        </div>
    );
}

export default Trainings;
