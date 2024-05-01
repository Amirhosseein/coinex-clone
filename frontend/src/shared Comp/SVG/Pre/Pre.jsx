import "./Pre.css";

const Pre = (props) => {
  return (
    <svg
      className="pre--light pre--btn"
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 300.000000 300.000000"
      data-btn={props["data-btn"]}
      onClick={props.onClick}
    >
      <g
        transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
        stroke="none"
        data-btn={props["data-btn"]}
      >
        <path
        data-btn={props["data-btn"]}
          d="M1295 2984 c-346 -53 -628 -197 -867 -442 -325 -335 -478 -794 -412
   -1241 49 -336 180 -604 412 -843 524 -539 1330 -609 1951 -170 171 121 360
   342 457 535 192 381 215 818 63 1212 -153 395 -470 712 -868 866 -224 87 -505
   119 -736 83z m508 -748 c46 -19 67 -55 67 -117 l0 -52 -282 -283 -282 -284
   282 -284 282 -283 0 -56 c0 -46 -4 -59 -28 -85 -31 -33 -85 -49 -129 -37 -29
   7 -628 593 -684 669 -33 45 -38 98 -13 136 24 36 612 627 658 661 43 32 79 36
   129 15z"
        />
      </g>
    </svg>
  );
};

export default Pre;
