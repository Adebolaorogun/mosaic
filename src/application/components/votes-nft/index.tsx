import React from "react";
import {
  ComposedChart,
  LineChart,
  CartesianGrid,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  ResponsiveContainer,
} from "recharts";

type DataObj = {
  total_votes: number;
};

export const VotesNft = ({ data }: any) => {
  const newData = data.sort(
    (a: { total_votes: number }, b: { total_votes: number }) =>
      b.total_votes - a.total_votes
  );

  const mainData = newData.map((obj: DataObj) => ({
    ...obj,
    total_votes: Math.log(Number(obj.total_votes)),
  }));

  // const dataLog = newData.map((name: any, index: string | number) => {
  //   name.total_votes = Math.log(name.total_votes)

  //   return name
  // })

  // console.log(dataLog)

  return (
    <div className="min-h-[300px] shadow-lg rounded-[.5rem] py-[.5rem] ">
      <h3 className="text-center text-sm mb-[.8rem] font-[500]">
        Total votes and total NFT by ENS name
      </h3>
      <ResponsiveContainer width="100%" height="80%">
        <ComposedChart
          data={mainData}
          margin={{
            right: 17,
            left: -12,
          }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis
            dataKey="ens_name"
            height={90}
            style={{ overflow: "visible", height: "auto" }}
            interval={0}
            angle={-90}
            tick={{ fontSize: "8px" }}
            orientation="bottom"
            dy={30}
            padding="gap"
            tickMargin={18}
          />
          <YAxis
            tick={{ fontSize: "12px" }}
            // domain={[0, (dataMax: number) => Math.log(dataMax)]}
          />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="total_nft"
            name="Total NFT"
            type="monotone"
            barSize={20}
            fill="blue"
          />
          <Line
            name="Total votes"
            type="monotone"
            dataKey="total_votes"
            stroke="red"
          />

          {/* <Line
          name="Total NFT"
          type="monotone"
          dataKey="total_nft"
          stroke="red"
        /> */}
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};
