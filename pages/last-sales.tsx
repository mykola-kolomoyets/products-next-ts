import { FC, useEffect, useState } from "react";
import useSWR from "swr";

import SalesService, { DB_URL, Sale, Sales } from "../api/sales";

type LastSalesPageProps = {};

const LastSalesPage: FC<LastSalesPageProps> = ({}) => {
  //   const [sales, setSales] = useState<Sale[]>([]);
  //   const [isFetching, setIsFetching] = useState(false);

  const { data, error } = useSWR(DB_URL);

  //   useEffect(() => {
  //     setIsFetching(true);

  //     SalesService.getSales()
  //       .then(({ data }) => {
  //   const transformedData: Sale[] = Object.entries(data).map(
  //     ([name, sale]) => ({ id: name, ...sale })
  //   );

  //         setSales(transformedData);
  //       })
  //       .finally(() => setIsFetching(false));
  //   }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (!data) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error to load.</h1>;
  }

  return (
    <ul>
      {/* {Object.entries(data).map(([name, sale]) => (
        <li key={name}>
          <h3>{sale.username}</h3>
          <p>{sale.volume} UAH</p>
        </li>
      ))} */}
    </ul>
  );
};

export default LastSalesPage;
