import { Card } from './card'
import {
  faUser,
  faCoins,
  faEnvelope,
  faSquarePollVertical,
} from '@fortawesome/free-solid-svg-icons'

export const Cards = ({ value, selectedAccount, initialData }: any) => {
  const refinedData = selectedAccount.length > 0 ? selectedAccount : initialData

  const data =
    selectedAccount.length > 0 && value
      ? selectedAccount
      : initialData.slice(0, 10)

  const totalNft = refinedData.reduce(
    (acc: any, value: { total_nft: any }) => acc + value.total_nft,
    0,
  )

  const totalProposal = refinedData.reduce(
    (acc: any, value: { total_proposal_interaction: any }) =>
      acc + value.total_proposal_interaction,
    0,
  )

  const totalVotes = refinedData.reduce(
    (acc: any, value: { total_votes: any }) => acc + value.total_votes,
    0,
  )

  return (
    <section className="w-full flex flex-wrap items-center gap-[1rem] lg:gap-[2rem] mb-[4rem]">
      <Card
        data={data}
        icon={faUser}
        title="Total users"
        value={refinedData.length}
        dataKey="follow_count_non_space"
        desc="Current estimate of our users"
      />

      <Card
        data={data}
        icon={faCoins}
        title="Total NFTs"
        dataKey="total_nft"
        desc="Current evaluation of our NFTs"
        value={totalNft.toLocaleString()}
      />

      <Card
        data={data}
        icon={faEnvelope}
        title="Total Proposal Invitation"
        desc="Total count of our invites"
        value={totalProposal.toLocaleString()}
        dataKey="total_proposal_interaction"
      />

      <Card
        data={data}
        title="Total Votes"
        dataKey="total_votes"
        icon={faSquarePollVertical}
        desc="Current summation of votes"
        value={totalVotes.toLocaleString()}
      />
    </section>
  )
}
