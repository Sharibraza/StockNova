import { React, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Orders = () => {

  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    axios.get("https://stocknova.onrender.com/allorders").then((res) => {
      // console.log(res.data); 
      setAllOrders(res.data);
    })
  }, []);

  let ExitAllBox = document.getElementById("ExitAll");

  const handleExitAllBox = () => {
    if(ExitAllBox.checked ){
      document.querySelectorAll('#Exit').forEach(cb => { cb.checked = "checked"; });
    }else{
      document.querySelectorAll('#Exit').forEach(cb => { cb.checked = null; });
    }
    
  }

  const handleCancelBtn = ()=>{
  //  const btn = document.getElementById('#CancelBtn');
  //  btn.style.display="block";
  }

    return (
      <>
        {
          !allOrders ?
            <div className="no-orders" >
              <p>You haven't placed any orders today</p>

              <Link to={"/"} className="btn">
                Get started
              </Link>
            </div>
            :
            <div className="order-table">
              <table>
                <tr>
                  <th>
                    <input type="checkbox" id="ExitAll" onClick={handleExitAllBox}></input>
                  </th>
                  <th>Time</th>
                  <th>Type</th>
                  <th>Name</th>
                  <th>Qty.</th>
                  <th>Price</th>
                  <th>Status</th>
                </tr>

                {allOrders.map((stock, index) => {
                  const profClass = stock.mode == "BUY" ? "profit" : "loss";
                  return (
                    <tr key={index}>
                      <td><input type="checkbox" id="Exit" onClick={handleCancelBtn} ></input></td>
                      <td>{stock.time}</td>
                      <td className={profClass} >{stock.mode}</td>
                      <td>{stock.name}</td>
                      <td>{stock.qty}</td>
                      <td>{stock.price.toFixed(2)}</td>
                      <td ><button style={{ backgroundColor: "grey", width: "3rem", opacity: "0.6", border: "none" }}>  Open  </button> </td>
                    </tr>
                  )
                })}
              </table>
              <button className="btn btn-primary " id="CancelBtn" style={{ border: "hidden", borderRadius:"5px", display:"none"}}>Cancel 1 order</button>
            </div>
        }
      </>
    );
  };

  export default Orders;
