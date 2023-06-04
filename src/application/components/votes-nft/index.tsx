import React from 'react'
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
} from 'recharts'

export const VotesNft = ({ data }: any) => {
  const newData = data.sort(
    (a: { total_votes: number }, b: { total_votes: number }) =>
      b.total_votes - a.total_votes,
  )

  // const dataLog = newData.map((name: any, index: string | number) => {
  //   name.total_votes = Math.log(name.total_votes)

  //   return name
  // })

  // console.log(dataLog)

  return (
    <div className="w-fit shadow-lg rounded-[.5rem] py-[.5rem] px-[1.5rem]">
      <h3 className="text-center text-sm mb-[.8rem] font-[500]">
        Total votes and total NFT by ENS name
      </h3>

      <LineChart
        height={150}
        width={250}
        data={newData}
        margin={{
          right: 7,
          left: -12,
        }}
      >
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
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
        />
        <YAxis
          // scale="log"
          tick={false}
          type="number"
          dataKey="total_votes"
          // domain={[0, (dataMax: number) => Math.log(dataMax)]}
        />
        <Tooltip />
        <Legend />
        <Line
          name='Total votes'
          type="monotone"
          dataKey="total_votes"
          stroke="blue"
          // activeDot={{ r: 8 }}
        />
        <Line name='Total NFT' type="monotone" dataKey="total_nft" stroke="red" />
      </LineChart>
    </div>
  )
}
