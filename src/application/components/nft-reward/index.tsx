import { BarChart, Legend, XAxis, YAxis, Tooltip, Bar } from 'recharts'

export const NftReward = ({ data }: any) => {
  const newData = data
    .sort(
      (a: { rewards_nft: number }, b: { rewards_nft: number }) =>
        b.rewards_nft - a.rewards_nft,
    )
    .slice(0, 10)

  return (
    <div className="w-fit shadow-lg rounded-[.5rem] py-[.3rem] px-[2.3rem]">
      <h3 className="text-center text-sm mb-[.8rem] font-[500]">
        Total no NFT and Rewards
      </h3>

      <BarChart
        width={250}
        height={150}
        margin={{ left: -12 }}
        data={newData && newData}
      >
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
        <Bar name="Rewards NFT" dataKey="rewards_nft" stackId="a" fill="red" />
        <Bar name="Total NFT" dataKey="total_nft" stackId="a" fill="blue" />
        <Legend verticalAlign="top" wrapperStyle={{ fontSize: '12px' }} />
      </BarChart>
    </div>
  )
}
