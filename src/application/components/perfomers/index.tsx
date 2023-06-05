import {
  BarChart,
  Legend,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  ResponsiveContainer,
} from "recharts";

export const Performers = ({ data }: any) => {
  const newData = data.sort(
    (a: { total_votes: number }, b: { total_votes: number }) =>
      b.total_votes - a.total_votes
  );

  return (
    <div className=" shadow-lg rounded-[.5rem] py-[.3rem] ">
      <h3 className="text-center text-sm mb-[.8rem] font-[500]">
        Top performers by total votes
      </h3>
      <ResponsiveContainer width="100%" height="80%">
        <BarChart data={newData} margin={{ left: 30, right: 20 }}>
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
            allowDataOverflow={true}
          />
          <YAxis tick={{ fontSize: "12px" }} />
          <Tooltip />
          <Bar dataKey="total_votes" stackId="a" fill="blue" />
          {/* <Legend verticalAlign="top" wrapperStyle={{ fontSize: '12px' }} /> */}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
