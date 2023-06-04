import { BarChart, Legend, XAxis, YAxis, Tooltip, Bar } from 'recharts'

export const Performers = ({ data }: any) => {
  const newData = data.sort(
    (a: { total_votes: number }, b: { total_votes: number }) =>
      b.total_votes - a.total_votes,
  )

  return (
    <div className="w-fit shadow-lg rounded-[.5rem] py-[.3rem] px-[2.3rem]">
      <h3 className="text-center text-sm mb-[.8rem] font-[500]">
        Top performers by total votes
      </h3>

      <BarChart width={250} height={150} data={newData} margin={{left: 12}}>
        <XAxis
          dataKey="ens_name"
          height={90}
          style={{ overflow: 'visible', height: 'auto' }}
          interval={0}
          angle={-90}
          tick={{ fontSize: '8px' }}
          orientation="bottom"
          dy={30}
          padding="gap"
          tickMargin={18}
          allowDataOverflow={true}
        />
        <YAxis tick={{ fontSize: '12px' }} />
        <Tooltip />
        <Bar dataKey="total_votes" stackId="a" fill="blue" />
        {/* <Legend verticalAlign="top" wrapperStyle={{ fontSize: '12px' }} /> */}
      </BarChart>
    </div>
  )
}
