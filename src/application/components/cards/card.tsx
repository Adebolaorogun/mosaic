import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  AreaChart,
  XAxis,
  YAxis,
  Tooltip,
  Area,
  ResponsiveContainer,
} from "recharts";

export const Card = ({ icon, title, data, dataKey, value }: any) => {
  return (
    <div className=" lg:w-auto pt-[1rem] px-[1rem] shadow-md rounded-[.5rem]">
      <header className="flex max-md:flex-col items-center gap-[.6rem] mb-[1.5rem]">
        <div>
          <FontAwesomeIcon
            icon={icon}
            size="lg"
            border
            className="text-[blue]"
          />
        </div>

        <article>
          <h3 className="text-sm ">{title}</h3>
          <h2 className="font-[700] text-[blue]">{value}</h2>
        </article>
      </header>

      <div className="max-md:hidden h-[100px] min-w-[200px]">
        <ResponsiveContainer width="100%" height="80%">
          <AreaChart data={data} margin={{ left: -60, bottom: -10, top: 8 }}>
            <XAxis dataKey="ens_name" tick={false} />
            <YAxis tick={false} />
            <Tooltip />
            <Area type="monotone" dataKey={dataKey} stroke="red" fill="blue" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
