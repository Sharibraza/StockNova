import { React, useEffect, useState } from "react";
import axios from "axios";
import { AreaChart } from "./AreaChart";


function Holdings() {

  const [allholdings, setAllHoldings] = useState([]);

  useEffect(() => {
    axios.get("process.env.REACT_APP_API_BASE_URL/allholdings").then((res) => {
      // console.log(res.data); 
      setAllHoldings(res.data);
    })
  }, []);


  const labels = allholdings.map((subArray) => subArray["name"] );
   const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: 'Stock Price ',
        data: allholdings.map((stock) => stock.price),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  

  return (
    <>
      <h3 className="title">Holdings ({allholdings.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>

          {allholdings.map((stock, index) => {
            const currValue = stock.price * stock.qty;
            const isProfit = currValue - stock.avg * stock.qty >= 0.0;
            const profClass = isProfit ? "profit" : "loss";
            const dayClass = stock.isLoss ? "loss" : "profit";

            return (
              <tr key={index} >
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td>{currValue.toFixed(2)}</td>
                <td className={profClass}>{(currValue - stock.avg * stock.qty).toFixed(2)}</td>
                <td className={profClass}>{stock.net}</td>
                <td className={dayClass}>{stock.day}</td>
              </tr>
            );
          })}

        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>
      <AreaChart data={data} />
    </>
  );
};

export default Holdings;
