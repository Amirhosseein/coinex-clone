import Coine from "./Coine/Coine";
import { memo, useContext, useEffect, useState } from "react";
import Vr from "../../shared Comp/VerticalRule/Vr";

import { dataIndex } from "./dataSet.json";
import { Link } from "react-router-dom";
import useScroll from "../../CustomHooks/Usescroll";

import "./MarketSummery.css";

const cleanUpfun = (data) => {
  let newData = [
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
  ];
  if (data) {
    data.forEach((element) => {
      if (dataIndex[element.symbol]) {
        newData[dataIndex[element.symbol].outerIndex][
          dataIndex[element.symbol].innerIndex
        ] = element;
      }
    });

    return newData;
  } else {
    return null;
  }
};

const MarketSummery = ({ initCoinData }) => {
  const [set, SetHandeler] = useState({ allow: true, group: 1 });
  const { anime: coinAnimation } = useScroll();
  // const [coinData, setCoinData] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      if (set.allow && coinAnimation) {
        console.log("chnage");
        SetHandeler((pre) => {
          if (pre.group === 5) return { ...pre, group: 1 };
          return { ...pre, group: pre.group + 1 };
        });
      }
    }, 3000);
    return () => clearInterval(timer);
  });

  const enterMouseHandeler = () => {
    SetHandeler((pre) => ({ ...pre, allow: false }));
  };

  const leaveMouseHandeler = () => {
    SetHandeler((pre) => ({ ...pre, allow: true }));
  };

  const coinData = cleanUpfun(initCoinData);
  // laptop & DeskTop View
  if (coinData) {
    return (
      <>
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
                        show={set.group % 2 === 0}
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
                        show={set.group % 2 !== 0}
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
                      value={Number(data[0]["price"]["USD"]["price"]).toFixed(
                        4
                      )}
                      valueUsd={Number(
                        data[0]["price"]["USD"]["price"]
                      ).toFixed(2)}
                      show={set.group % 2 === 0}
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
                      show={set.group % 2 !== 0}
                    />
                  </Link>
                </div>
                <Vr style={{ height: "60px", borderColor: "#7d7f81" }} />
              </div>
            );
          })}
        </div>

        <div
          className="MS--container--min"
          onMouseEnter={enterMouseHandeler}
          onMouseLeave={leaveMouseHandeler}
          key={coinData[set.group - 1][0]["symbol"]+coinData[set.group -1][0]["symbol"]}
        >
          <Link
            to={`/coin/${coinData[set.group - 1][0]["symbol"]}`}
            style={{ color: "#000" }}
          >
            <div
              className="coin--min--hide"
            >
              <Coine
               
                className={set.allow ? "coin--min--animation" : null}
                ImgSrc={"./" + coinData[set.group - 1][0]["symbol"] + ".png"}
                ImgAlt={coinData[set.group - 1][0]["name"]}
                name={coinData[set.group - 1][0]["symbol"]}
                change={Number(
                  coinData[set.group - 1][0]["price"]["USD"][
                    "percent_change_24h"
                  ]
                ).toFixed(2)}
                value={Number(
                  coinData[set.group - 1][0]["price"]["USD"]["price"]
                ).toFixed(4)}
                valueUsd={Number(
                  coinData[set.group - 1][0]["price"]["USD"]["price"]
                ).toFixed(2)}
                show={true}
              />
            </div>
          </Link>

          <Vr className="MS--Vr--min" />

          <Link
            to={`/coin/${coinData[set.group - 1][1]["symbol"]}`}
            style={{ color: "#000" }}
          >
            <div
              className="coin--min--hide"
              
            >
              <Coine
                
                className={set.allow ? "coin--min--animation":null}
                ImgSrc={"./" + coinData[set.group - 1][1]["symbol"] + ".png"}
                ImgAlt={coinData[set.group - 1][1]["name"]}
                name={coinData[set.group - 1][1]["symbol"]}
                change={Number(
                  coinData[set.group - 1][1]["price"]["USD"][
                    "percent_change_24h"
                  ]
                ).toFixed(2)}
                value={Number(
                  coinData[set.group - 1][1]["price"]["USD"]["price"]
                ).toFixed(4)}
                valueUsd={Number(
                  coinData[set.group - 1][1]["price"]["USD"]["price"]
                ).toFixed(2)}
                show={true}
              />
            </div>
          </Link>
        </div>
      </>
    );
  }

  // befor data is ready !!!
  return (
    <>
      <div className="MS--container--space MS--container--space--light">
        <div></div>

        <div></div>

        <div></div>

        <div></div>

        <div></div>
      </div>

      <div className="MS--container--space--min MS--container--space--light">
        <div></div>

        <div></div>
      </div>
    </>
  );
};

export default MarketSummery;
