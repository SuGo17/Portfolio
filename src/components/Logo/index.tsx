import { FC } from "react";

export type LogoProps = {
  height?: string;
  width?: string;
  bgColor?: string;
  fill?: string;
};

const Logo: FC<LogoProps> = ({
  bgColor = "none",
  height = "40",
  width = "49",
  fill = "#fff",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill={bgColor}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.49408 15.7577L18.6664 0H25.6073L7.09588 19.2257C4.26318 22.1677 4.30735 26.836 7.19523 29.7239C10.1222 32.6509 14.8677 32.6509 17.7947 29.7239L33.3979 14.1207L36.9334 17.6562L21.3302 33.2594C16.4506 38.139 8.53928 38.139 3.65969 33.2594C-1.15472 28.445 -1.22837 20.6623 3.49408 15.7577ZM44.503 23.8425C49.3959 19.0262 49.427 11.1457 44.5723 6.29097C39.7445 1.46324 31.9172 1.46324 27.0895 6.29097L11.3924 21.9881L14.9279 25.5236L30.625 9.82651C33.5001 6.9514 38.1616 6.95139 41.0367 9.82651C43.9279 12.7177 43.9094 17.4109 40.9955 20.2791L21.3621 39.605H28.4896L44.503 23.8425Z"
        fill={fill}
        style={{ transition: "all 1s ease 0.8s" }}
      />
    </svg>
  );
};

export default Logo;
