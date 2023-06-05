import React from "react";
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";

export const Followers = ({ data }: any) => {
  const total = data.reduce(
    (acc: any, item: { follow_count: any }) => acc + item.follow_count,
    0
  );

  const inSpace = data.reduce(
    (acc: any, item: { follow_count_space: any }) =>
      acc + item.follow_count_space,
    0
  );

  const inNonSpace = data.reduce(
    (acc: any, item: { follow_count_non_space: any }) =>
      acc + item.follow_count_non_space,
    0
  );

  const data2 = [
    { value: inSpace, name: "follow_count_space" },
    { value: inNonSpace, name: "follow_count_non_space" },
  ];

  return (
    <div className="min-h-[300px] shadow-md py-[.3rem] flex flex-col items-center rounded-[.5rem]">
      <h3 className="text-center text-sm mb-[.8rem] font-[500]">
        Total Followers{" "}
        <span className="text-xs font-[400]">({total.toLocaleString()})</span>
      </h3>
      <ResponsiveContainer width="100%" height="80%">
        <PieChart
          height={140}
          width={200}
          margin={{ top: 0, bottom: 0 }}
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
