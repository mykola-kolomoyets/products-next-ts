import { FC, useEffect, useState } from "react";
import SalesService, { Sale } from "../api/sales";

type LastSalesPageProps = {};

const LastSalesPage: FC<LastSalesPageProps> = ({}) => {
  const [sales, setSales] = useState<Sale[]>([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    setIsFetching(true);

    SalesService.getSales()
      .then(({ data }) => {
        const transformedData: Sale[] = Object.entries(data).map(
          ([name, sale]) => ({ id: name, ...sale })
        );

        setSales(transformedData);
      })
      .finally(() => setIsFetching(false));
  }, []);

  useEffect(() => {
    console.log(sales);
  }, [sales]);

  if (isFetching) {
    return <h1>Loading...</h1>;
  }

  return (
    <ul>
      {sales.map((sale) => (
        <li key={sale.id}>
          <h3>{sale.username}</h3>
          <p>{sale.volume} UAH</p>
        </li>
      ))}
    </ul>
  );
};

export default LastSalesPage;
