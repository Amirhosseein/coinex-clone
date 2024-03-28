import Coine from "./Coine/Coine";
import { memo, useContext, useEffect, useState } from "react";
import Vr from "../../shared Comp/VerticalRule/Vr";
import ContextApi from "../../contextAPI/ContextApi";
import { dataIndex } from "./dataSet.json";
import { Link } from "react-router-dom";

import "./MarketSummery.css";
import { socket } from "../../socket/socket";

const cleanUpfun = (data) => {
  let newData = [
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
  ];

  data.forEach((element) => {
    if (dataIndex[element.symbol]) {
      newData[dataIndex[element.symbol].outerIndex][
        dataIndex[element.symbol].innerIndex
      ] = element;
    }
  });

  return newData;
};

const MarketSummery = () => {
  const [set, SetHandeler] = useState({ allow: true, group: true });
  const { coinAnimation, width } = useContext(ContextApi);
  const [pageData, setPageData] = useState(null);
  const [coinData, setCoinData] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      if (set.allow && coinAnimation) {
        console.log("chnage");
        SetHandeler((pre) => ({ ...pre, group: !pre.group }));
      }
    }, 3000);
    return () => clearInterval(timer);
  });

  useEffect(() => {
    fetch("http://localhost:3000/api/coin")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("fetch failed");
        }
      })
      .then((data) => {
        console.log(data);
        if (data.cause || data === "error") return;
        setPageData(data);
        const newData = cleanUpfun(data);
        setCoinData(newData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    console.log(pageData);
    let timer;

    timer = setInterval(() => {
      socket.emit("checkData", pageData);
    }, 5000);

    return () => clearInterval(timer);
  }, [pageData]);

  useEffect(() => {
    console.log("done!");
    socket.on(
      "changeData",
      (data) => {
        let changeData = [];
        if (Array.isArray(pageData) && Array.isArray(data)) {
          changeData = data.filter(
            (elm, index) =>
              elm.price.USD.price !== pageData[index].price.USD.price
          );

          console.log(changeData);
        }

        if (changeData.length > 0) {
          setPageData(data);
          const newData = cleanUpfun(data);
          setCoinData(newData);
        }
      },
      []
    );
  });

  const enterMouseHandeler = () => {
    SetHandeler((pre) => ({ ...pre, allow: false }));
  };

  const leaveMouseHandeler = () => {
    SetHandeler((pre) => ({ ...pre, allow: true }));
  };

  // laptop & DeskTop View
  if (coinData && width >= 890) {
    return (
      <div
        className="MS--container"
        onMouseEnter={enterMouseHandeler}
        onMouseLeave={leaveMouseHandeler}
      >
        {coinData.map((data, index) => {
          if (index === 4) {
            return (
              <div className="MS--div" key={data[0].symbol + data[1].symbol}>
                <div className="coines">
                  <Link
                    to={`/coin/${data[0]["symbol"]}`}
                    style={{ color: "#000" }}
                  >
                    <Coine
                      ImgSrc={"./" + data[0]["symbol"] + ".png"}
                      ImgAlt={data[0]["name"]}
                      name={data[0]["symbol"]}
                      change={Number(
                        data[0]["price"]["USD"]["percent_change_24h"]
                      ).toFixed(2)}
                      value={Number(data[0]["price"]["USD"]["price"]).toFixed(
                        4
                      )}
                      valueUsd={Number(
                        data[0]["price"]["USD"]["price"]
                      ).toFixed(2)}
                      hide={set.group}
                    />
                  </Link>
                  <Link
                    to={`/coin/${data[1]["symbol"]}`}
                    style={{ color: "#000" }}
                  >
                    <Coine
                      ImgSrc={"./" + data[1]["symbol"] + ".png"}
                      ImgAlt={data[1]["name"]}
                      name={data[1]["symbol"]}
                      change={Number(
                        data[1]["price"]["USD"]["percent_change_24h"]
                      ).toFixed(2)}
                      value={Number(data[1]["price"]["USD"]["price"]).toFixed(
                        4
                      )}
                      valueUsd={Number(
                        data[1]["price"]["USD"]["price"]
                      ).toFixed(2)}
                      hide={!set.group}
                    />
                  </Link>
                </div>
              </div>
            );
          }
          return (
            <div className="MS--div" key={data[0].symbol + data[1].symbol}>
              <div className="coines">
                <Link
                  to={`/coin/${data[0]["symbol"]}`}
                  style={{ color: "#000" }}
                >
                  <Coine
                    ImgSrc={"./" + data[0]["symbol"] + ".png"}
                    ImgAlt={data[0]["name"]}
                    name={data[0]["symbol"]}
                    change={Number(
                      data[0]["price"]["USD"]["percent_change_24h"]
                    ).toFixed(2)}
                    value={Number(data[0]["price"]["USD"]["price"]).toFixed(4)}
                    valueUsd={Number(data[0]["price"]["USD"]["price"]).toFixed(
                      2
                    )}
                    hide={set.group}
                  />
                </Link>
                <Link
                  to={`/coin/${data[1]["symbol"]}`}
                  style={{ color: "#000" }}
                >
                  <Coine
                    ImgSrc={"./" + data[1]["symbol"] + ".png"}
                    ImgAlt={data[1]["name"]}
                    name={data[1]["symbol"]}
                    change={Number(
                      data[1]["price"]["USD"]["percent_change_24h"]
                    ).toFixed(2)}
                    value={Number(data[1]["price"]["USD"]["price"]).toFixed(4)}
                    valueUsd={Number(data[1]["price"]["USD"]["price"]).toFixed(
                      2
                    )}
                    hide={!set.group}
                  />
                </Link>
              </div>
              <Vr style={{ height: "60px", borderColor: "#7d7f81" }} />
            </div>
          );
        })}
      </div>
    );
  }

  // mobile and tablet view
  if (coinData && width < 890) {
    return (
      <div className="MS--container--min">
      </div>
    );
  }

  // befor data is ready !!!
  return (
    <div className="MS--container--space">
      <div></div>

      <div></div>

      <div></div>

      <div></div>

      <div></div>
    </div>
  );
};

export default MarketSummery;
