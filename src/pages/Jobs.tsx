import React from "react";
import Card from "../components/Card";
import { jobs } from "../data/mockData";

const Jobs: React.FC = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Jobs Board</h2>
      {jobs.map((job) => (
        <Card
          key={job.id}
          title={job.title}
          subtitle={job.company}
          description={`Type: ${job.type}`}
        />
      ))}
    </div>
  );
};

export default Jobs;
