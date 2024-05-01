import "./Next.css"

const Next = (props) => {
  return (
    <svg
      className="next--light next--btn"
      version="1.0"
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
119 -736 83z m31 -763 c46 -34 634 -625 658 -661 25 -38 20 -91 -13 -136 -56
-76 -655 -662 -684 -669 -44 -12 -98 4 -129 37 -24 26 -28 39 -28 85 l0 56
282 283 282 284 -282 284 -282 283 0 52 c0 61 20 98 65 117 49 21 88 17 131
-15z"
        />
      </g>
    </svg>
  );
};


export default Next;