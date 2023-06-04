// import Papa from 'papaparse'
import Data from 'shared/files/data.json'
import { useEffect, useState } from 'react'
import {
  Cards,
  Correlation,
  Followers,
  NftReward,
  Performers,
  Proposals,
  VotesNft,
} from 'application/components'

const App = () => {
  const [value, setValue] = useState('')
  const [selectedAccount, setSelectedAccount] = useState<any>([])

  useEffect(() => {
    if (value === 'all') setSelectedAccount([])

    const filteredAccount = newData.filter(
      (data: { address: string }) => data.address === value,
    )

    setSelectedAccount(filteredAccount)
  }, [value])

  let newData: any = []

  for (let i in Data) {
    if (Data[i].ens_name !== 'NULL' && !newData.includes(Data[i])) {
      newData.push(Data[i])
    }
  }

  const initialData: any = newData.sort(
    (a: { total_votes: number }, b: { total_votes: number }) =>
      b.total_votes - a.total_votes,
  )

  const refinedData = selectedAccount.length > 0 ? selectedAccount : newData

  let dataCount =
    selectedAccount.length > 0 && value
      ? selectedAccount
      : initialData.slice(0, 10)

  const scatterGraphData = selectedAccount.length > 0 ? selectedAccount : Data

  const handleSelect = (e: { target: { value: string } }) => {
    setValue(e.target.value)
  }

  return (
    <section className="flex items-start gap-[2rem] px-[1rem] lg:px-[4rem] py-[4rem]">
      <main className="w-[80%]">
        <Cards
          value={value}
          initialData={initialData}
          selectedAccount={selectedAccount}
        />

        <section>
          <div className="flex items-center gap-[2rem] mb-[4rem]">
            <NftReward data={refinedData} />

            <Proposals data={dataCount} />

            <Performers data={dataCount} />
          </div>

          <div className="flex items-center gap-[2rem] mb-[4rem]">
            <VotesNft data={dataCount} />

            <Followers data={dataCount} />

            <Correlation data={scatterGraphData} />
          </div>
        </section>
      </main>

      <aside className="w-[18%]">
        <h1 className="text-xl text-[blue] font-[700] mb-[4rem]">
          Optimism PoC
        </h1>

        <select
          value={value}
          onChange={handleSelect}
          className="w-full h-fit p-[.8rem] border-[1px] border-gray-200 rounded-[.5rem]"
        >
          <option defaultValue="all">Select all accounts</option>
          {newData.map(
            (item: { address: string; ens_name: string }, key: number) => (
              <option
                className="min-w-[4px] w-[4px] max-w-[4px]"
                key={key}
                value={item.address}
              >
                {item.ens_name}
              </option>
            ),
          )}
        </select>
      </aside>
    </section>
  )
}

export default App
