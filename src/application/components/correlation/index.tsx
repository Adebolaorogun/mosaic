import {
  Label,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
  ZAxis,
} from "recharts";

export const Correlation = ({ data }: any) => {
  return (
    <div className="shadow-lg rounded-[.5rem] py-[.3rem] ">
      <h3 className="text-center text-sm mb-[.8rem] font-[500]">
        Correlation analysis of users
      </h3>
      <ResponsiveContainer width="100%" height="80%">
        <ScatterChart margin={{ left: -10, top: 8, right: 10 }}>
          <XAxis tick={false} type="number" dataKey="total_nft">
            <Label>Total NFTs</Label>
          </XAxis>

          <YAxis
            tick={false}
            type="number"
            dataKey="total_proposal_interaction"
            label={{
              value: "Total Proposals",
              angle: -90,
              position: "outsideLeft",
            }}
          />
          <ZAxis type="category" dataKey="ens_name" name="ENS Name" />
          <Tooltip cursor={{ strokeDasharray: "3 3" }} />
          <Scatter data={data} fill="blue" />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
};
