// import Papa from 'papaparse'
import Data from "shared/files/data.json";
import { useEffect, useState } from "react";
import {
  Cards,
  Correlation,
  Followers,
  NftProposal,
  NftReward,
  Performers,
  Proposals,
  VotesNft,
} from "application/components";

const App = () => {
  const [value, setValue] = useState("");
  const [selectedAccount, setSelectedAccount] = useState<any>([]);

  useEffect(() => {
    if (value === "all") setSelectedAccount([]);

    const filteredAccount = newData.filter(
      (data: { address: string }) => data.address === value
    );

    setSelectedAccount(filteredAccount);
  }, [value]);

  let newData: any = [];

  for (let i in Data) {
    if (Data[i].ens_name !== "NULL" && !newData.includes(Data[i])) {
      newData.push(Data[i]);
    }
  }

  const initialData: any = newData.sort(
    (a: { total_votes: number }, b: { total_votes: number }) =>
      b.total_votes - a.total_votes
  );

  const refinedData = selectedAccount.length > 0 ? selectedAccount : newData;

  let dataCount =
    selectedAccount.length > 0 && value
      ? selectedAccount
      : initialData.slice(0, 10);

  const scatterGraphData = selectedAccount.length > 0 ? selectedAccount : Data;

  const handleSelect = (e: { target: { value: string } }) => {
    setValue(e.target.value);
  };

  return (
    <section className=" h-screen pt-6  flex items-start gap-4   lg:px-[4rem] ">
      <main className="w-[80%] h-full overflow-y-auto pr-4">
        <Cards
          value={value}
          initialData={initialData}
          selectedAccount={selectedAccount}
        />

        <section>
          <NftReward data={refinedData} />
        </section>
        <section>
          <div className="h-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  gap-4 ">
            <NftProposal data={dataCount} />
            <Proposals data={dataCount} />

            <Performers data={dataCount} />

            <VotesNft data={dataCount} />

            <Followers data={dataCount} />

            <Correlation data={scatterGraphData} />
          </div>
        </section>
      </main>

      <aside className="w-[20%]  h-full">
        <h1 className="text-xl text-blue-600 font-[700] mb-2">Optimism PoC</h1>

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
            )
          )}
        </select>

        <div className="flex items-center gap-[2rem] mt-[4rem]"></div>
      </aside>
    </section>
  );
};

export default App;
