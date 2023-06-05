import React from "react";
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";

export const Proposals = ({ data }: any) => {
  const total = data.reduce(
    (acc: any, item: { total_proposal_interaction: any }) =>
      acc + item.total_proposal_interaction,
    0
  );

  const inSpace = data.reduce(
    (acc: any, item: { total_proposal_interaction_in_space: any }) =>
      acc + item.total_proposal_interaction_in_space,
    0
  );

  const inNonSpace = data.reduce(
    (acc: any, item: { total_proposal_interaction_non_space: any }) =>
      acc + item.total_proposal_interaction_non_space,
    0
  );

  const data2 = [
    { value: inSpace, name: "total_proposal_interaction_space" },
    { value: inNonSpace, name: "total_proposal_interaction_non_space" },
  ];

  return (
    <div className=" shadow-md py-[.3rem] flex flex-col items-center rounded-[.5rem]">
      <h3 className="text-sm text-center mb-[.8rem] font-[500]">
        Total Proposals{" "}
        <span className="text-xs font-[400]">({total.toLocaleString()})</span>
      </h3>
      <ResponsiveContainer width="100%" height="80%">
        <PieChart
          margin={{ top: 10, bottom: 0 }}
          style={{ margin: "0px", padding: "0" }}
        >
          <Legend />
          <Pie
            label={true}
            startAngle={180}
            endAngle={0}
            innerRadius="55%"
            data={data2}
            dataKey="value"
            labelLine={false}
            blendStroke
            isAnimationActive={false}
            cy={"70%"}
          >
            <Cell name="In space" fill="blue" />
            <Cell name="Non space" fill="red" />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
