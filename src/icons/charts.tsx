import { SVG, Path } from "../template";
import { FC } from "react";
import { SVGComponentProps } from "./types";

export const BarChart01: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path {...pathProps} d="M18 20V10M12 20V4M6 20V14" />
    </SVG>
  );
};

export const BarChart02: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path {...pathProps} d="M18 20V4M6 20V16M12 20V10" />
    </SVG>
  );
};

export const BarChart03: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path {...pathProps} d="M6 20V4M18 20V16M12 20V10" />
    </SVG>
  );
};

export const BarChart04: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path {...pathProps} d="M3 11L3 21M15 11L15 21M9 3L9 21M21 3V21" />
    </SVG>
  );
};

export const BarChart05: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path {...pathProps} d="M3 17V21M15 8V21M9 13V21M21 3V21" />
    </SVG>
  );
};

export const BarChart06: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path {...pathProps} d="M9 8V21M21 17V21M3 3V21M15 13V21" />
    </SVG>
  );
};

export const BarChart07: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        {...pathProps}
        d="M21 21H6.2C5.07989 21 4.51984 21 4.09202 20.782C3.71569 20.5903 3.40973 20.2843 3.21799 19.908C3 19.4802 3 18.9201 3 17.8V3M7 10.5V17.5M11.5 5.5V17.5M16 10.5V17.5M20.5 5.5V17.5"
      />
    </SVG>
  );
};

export const BarChart08: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        {...pathProps}
        d="M21 21H6.2C5.07989 21 4.51984 21 4.09202 20.782C3.71569 20.5903 3.40973 20.2843 3.21799 19.908C3 19.4802 3 18.9201 3 17.8V3M7 14.5V17.5M11.5 11.5V17.5M16 8.5V17.5M20.5 5.5V17.5"
      />
    </SVG>
  );
};

export const BarChart09: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        {...pathProps}
        d="M21 21H6.2C5.07989 21 4.51984 21 4.09202 20.782C3.71569 20.5903 3.40973 20.2843 3.21799 19.908C3 19.4802 3 18.9201 3 17.8V3M7 5.5V17.5M11.5 8.5V17.5M16 11.5V17.5M20.5 14.5V17.5"
      />
    </SVG>
  );
};

export const BarChart10: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        {...pathProps}
        d="M9 7H4.6C4.03995 7 3.75992 7 3.54601 7.10899C3.35785 7.20487 3.20487 7.35785 3.10899 7.54601C3 7.75992 3 8.03995 3 8.6V19.4C3 19.9601 3 20.2401 3.10899 20.454C3.20487 20.6422 3.35785 20.7951 3.54601 20.891C3.75992 21 4.03995 21 4.6 21H9M9 21H15M9 21L9 4.6C9 4.03995 9 3.75992 9.10899 3.54601C9.20487 3.35785 9.35785 3.20487 9.54601 3.10899C9.75992 3 10.0399 3 10.6 3L13.4 3C13.9601 3 14.2401 3 14.454 3.10899C14.6422 3.20487 14.7951 3.35785 14.891 3.54601C15 3.75992 15 4.03995 15 4.6V21M15 11H19.4C19.9601 11 20.2401 11 20.454 11.109C20.6422 11.2049 20.7951 11.3578 20.891 11.546C21 11.7599 21 12.0399 21 12.6V19.4C21 19.9601 21 20.2401 20.891 20.454C20.7951 20.6422 20.6422 20.7951 20.454 20.891C20.2401 21 19.9601 21 19.4 21H15"
      />
    </SVG>
  );
};

export const BarChart11: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        {...pathProps}
        d="M9 21H4.6C4.03995 21 3.75992 21 3.54601 20.891C3.35785 20.7951 3.20487 20.6422 3.10899 20.454C3 20.2401 3 19.9601 3 19.4V4.6C3 4.03995 3 3.75992 3.10899 3.54601C3.20487 3.35785 3.35785 3.20487 3.54601 3.10899C3.75992 3 4.03995 3 4.6 3H7.4C7.96005 3 8.24008 3 8.45399 3.10899C8.64215 3.20487 8.79513 3.35785 8.89101 3.54601C9 3.75992 9 4.03995 9 4.6V7M9 21H15M9 21L9 7M9 7H13.4C13.9601 7 14.2401 7 14.454 7.10899C14.6422 7.20487 14.7951 7.35785 14.891 7.54601C15 7.75992 15 8.03995 15 8.6V21M15 11H19.4C19.9601 11 20.2401 11 20.454 11.109C20.6422 11.2049 20.7951 11.3578 20.891 11.546C21 11.7599 21 12.0399 21 12.6V19.4C21 19.9601 21 20.2401 20.891 20.454C20.7951 20.6422 20.6422 20.7951 20.454 20.891C20.2401 21 19.9601 21 19.4 21H15"
      />
    </SVG>
  );
};

export const BarChart12: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        {...pathProps}
        d="M9 12H4.6C4.03995 12 3.75992 12 3.54601 12.109C3.35785 12.2049 3.20487 12.3578 3.10899 12.546C3 12.7599 3 13.0399 3 13.6V19.4C3 19.9601 3 20.2401 3.10899 20.454C3.20487 20.6422 3.35785 20.7951 3.54601 20.891C3.75992 21 4.03995 21 4.6 21H9M9 21H15M9 21L9 8.6C9 8.03995 9 7.75992 9.10899 7.54601C9.20487 7.35785 9.35785 7.20487 9.54601 7.10899C9.75992 7 10.0399 7 10.6 7H13.4C13.9601 7 14.2401 7 14.454 7.10899C14.6422 7.20487 14.7951 7.35785 14.891 7.54601C15 7.75992 15 8.03995 15 8.6V21M15 21H19.4C19.9601 21 20.2401 21 20.454 20.891C20.6422 20.7951 20.7951 20.6422 20.891 20.454C21 20.2401 21 19.9601 21 19.4V4.6C21 4.03995 21 3.75992 20.891 3.54601C20.7951 3.35785 20.6422 3.20487 20.454 3.10899C20.2401 3 19.9601 3 19.4 3H16.6C16.0399 3 15.7599 3 15.546 3.10899C15.3578 3.20487 15.2049 3.35785 15.109 3.54601C15 3.75992 15 4.03995 15 4.6V8"
      />
    </SVG>
  );
};

export const BarChartCircle01: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        {...pathProps}
        d="M8 13V17M16 11V17M12 7V17M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
      />
    </SVG>
  );
};

export const BarChartCircle02: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        {...pathProps}
        d="M8 15V17M12 11V17M16 7V17M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
      />
    </SVG>
  );
};

export const BarChartCircle03: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        {...pathProps}
        d="M8 7V17M12 11V17M16 15V17M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
      />
    </SVG>
  );
};

export const BarChartSquare01: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        {...pathProps}
        d="M8 13V17M16 11V17M12 7V17M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z"
      />
    </SVG>
  );
};

export const BarChartSquare02: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        {...pathProps}
        d="M8 15V17M12 11V17M16 7V17M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z"
      />
    </SVG>
  );
};

export const BarChartSquare03: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        {...pathProps}
        d="M8 7V17M12 11V17M16 15V17M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z"
      />
    </SVG>
  );
};

export const BarChartSquareDown: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        {...pathProps}
        d="M12 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V12M8 13V17M16 11V17M12 7V17M2 5L5 8M5 8L8 5M5 8L5 2"
      />
    </SVG>
  );
};

export const BarChartSquareMinus: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        {...pathProps}
        d="M12 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V12M8 13V17M16 11V17M12 7V17M2 5H8"
      />
    </SVG>
  );
};

export const BarChartSquarePlus: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        {...pathProps}
        d="M12 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V12M8 13V17M16 11V17M12 7V17M5 8V2M2 5H8"
      />
    </SVG>
  );
};

export const BarChartSquareUp: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        {...pathProps}
        d="M12 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V12M8 13V17M16 11V17M12 7V17M2 5L5 2M5 2L8 5M5 2L5 8"
      />
    </SVG>
  );
};

export const BarLineChart: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        {...pathProps}
        d="M20 20V13M12 20V10M4 20L4 16M13.4067 5.0275L18.5751 6.96567M10.7988 5.40092L5.20023 9.59983M21.0607 6.43934C21.6464 7.02513 21.6464 7.97487 21.0607 8.56066C20.4749 9.14645 19.5251 9.14645 18.9393 8.56066C18.3536 7.97487 18.3536 7.02513 18.9393 6.43934C19.5251 5.85355 20.4749 5.85355 21.0607 6.43934ZM5.06066 9.43934C5.64645 10.0251 5.64645 10.9749 5.06066 11.5607C4.47487 12.1464 3.52513 12.1464 2.93934 11.5607C2.35355 10.9749 2.35355 10.0251 2.93934 9.43934C3.52513 8.85355 4.47487 8.85355 5.06066 9.43934ZM13.0607 3.43934C13.6464 4.02513 13.6464 4.97487 13.0607 5.56066C12.4749 6.14645 11.5251 6.14645 10.9393 5.56066C10.3536 4.97487 10.3536 4.02513 10.9393 3.43934C11.5251 2.85355 12.4749 2.85355 13.0607 3.43934Z"
      />
    </SVG>
  );
};

export const ChartBreakoutCircle: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        {...pathProps}
        d="M15.5 3.5V2M19.4393 4.56066L20.5 3.5M20.5103 8.5H22.0103M21.9506 13C21.4489 18.0533 17.1853 22 12 22C6.47715 22 2 17.5228 2 12C2 6.81465 5.94668 2.5511 11 2.04938M12 8H16V12M15.6197 8C13.2653 11.3276 9.38636 13.5 5 13.5C3.9971 13.5 3.02072 13.3864 2.08302 13.1715"
      />
    </SVG>
  );
};

export const ChartBreakoutSquare: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        {...pathProps}
        d="M11 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V13M12 8H16V12M15.5 3.5V2M19.4393 4.56066L20.5 3.5M20.5103 8.5H22.0103M3 13.3471C3.65194 13.4478 4.31987 13.5 5 13.5C9.38636 13.5 13.2653 11.3276 15.6197 8"
      />
    </SVG>
  );
};

export const HorizontalBarChart01: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        {...pathProps}
        d="M17 9.5V6.1C17 5.53995 17 5.25992 16.891 5.04601C16.7951 4.85785 16.6422 4.70487 16.454 4.60899C16.2401 4.5 15.9601 4.5 15.4 4.5H3M13 14.5V17.9C13 18.4601 13 18.7401 12.891 18.954C12.7951 19.1422 12.6422 19.2951 12.454 19.391C12.2401 19.5 11.9601 19.5 11.4 19.5H3M3 2L3 22M3 14.5L19.4 14.5C19.9601 14.5 20.2401 14.5 20.454 14.391C20.6422 14.2951 20.7951 14.1422 20.891 13.954C21 13.7401 21 13.4601 21 12.9V11.1C21 10.5399 21 10.2599 20.891 10.046C20.7951 9.85785 20.6422 9.70487 20.454 9.60899C20.2401 9.5 19.9601 9.5 19.4 9.5L3 9.5L3 14.5Z"
      />
    </SVG>
  );
};

export const HorizontalBarChart02: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        {...pathProps}
        d="M17 9.5V12.9C17 13.4601 17 13.7401 16.891 13.954C16.7951 14.1422 16.6422 14.2951 16.454 14.391C16.2401 14.5 15.9601 14.5 15.4 14.5L3 14.5M13 14.5V17.9C13 18.4601 13 18.7401 12.891 18.954C12.7951 19.1422 12.6422 19.2951 12.454 19.391C12.2401 19.5 11.9601 19.5 11.4 19.5H3M3 2L3 22M3 9.5L19.4 9.5C19.9601 9.5 20.2401 9.5 20.454 9.39101C20.6422 9.29513 20.7951 9.14215 20.891 8.95399C21 8.74008 21 8.46005 21 7.9V6.1C21 5.53995 21 5.25992 20.891 5.04601C20.7951 4.85785 20.6422 4.70487 20.454 4.60899C20.2401 4.5 19.9601 4.5 19.4 4.5L3 4.5L3 9.5Z"
      />
    </SVG>
  );
};

export const HorizontalBarChart03: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        {...pathProps}
        d="M13 9.5V6.1C13 5.53995 13 5.25992 12.891 5.04601C12.7951 4.85785 12.6422 4.70487 12.454 4.60899C12.2401 4.5 11.9601 4.5 11.4 4.5H3M17 14.5V11.1C17 10.5399 17 10.2599 16.891 10.046C16.7951 9.85785 16.6422 9.70487 16.454 9.60899C16.2401 9.5 15.9601 9.5 15.4 9.5H3M3 2L3 22M3 19.5H19.4C19.9601 19.5 20.2401 19.5 20.454 19.391C20.6422 19.2951 20.7951 19.1422 20.891 18.954C21 18.7401 21 18.4601 21 17.9V16.1C21 15.5399 21 15.2599 20.891 15.046C20.7951 14.8578 20.6422 14.7049 20.454 14.609C20.2401 14.5 19.9601 14.5 19.4 14.5L3 14.5L3 19.5Z"
      />
    </SVG>
  );
};

export const LineChartDown01: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        {...pathProps}
        d="M21 21H4.6C4.03995 21 3.75992 21 3.54601 20.891C3.35785 20.7951 3.20487 20.6422 3.10899 20.454C3 20.2401 3 19.9601 3 19.4V3M20 15L16.0811 10.8173C15.9326 10.6588 15.8584 10.5796 15.7688 10.5386C15.6897 10.5024 15.6026 10.4875 15.516 10.4953C15.4179 10.5042 15.3215 10.5542 15.1287 10.6543L11.8713 12.3457C11.6785 12.4458 11.5821 12.4958 11.484 12.5047C11.3974 12.5125 11.3103 12.4976 11.2312 12.4614C11.1416 12.4204 11.0674 12.3412 10.9189 12.1827L7 8"
      />
    </SVG>
  );
};

export const LineChartDown02: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        {...pathProps}
        d="M21 21H4.6C4.03995 21 3.75992 21 3.54601 20.891C3.35785 20.7951 3.20487 20.6422 3.10899 20.454C3 20.2401 3 19.9601 3 19.4V3M21 15L15.5657 9.56569C15.3677 9.36768 15.2687 9.26867 15.1545 9.23158C15.0541 9.19895 14.9459 9.19895 14.8455 9.23158C14.7313 9.26867 14.6323 9.36768 14.4343 9.56569L12.5657 11.4343C12.3677 11.6323 12.2687 11.7313 12.1545 11.7684C12.0541 11.8011 11.9459 11.8011 11.8455 11.7684C11.7313 11.7313 11.6323 11.6323 11.4343 11.4343L7 7M21 15H17M21 15V11"
      />
    </SVG>
  );
};

export const LineChartDown03: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        {...pathProps}
        d="M17 15L11.5657 9.56569C11.3677 9.36768 11.2687 9.26867 11.1545 9.23158C11.0541 9.19895 10.9459 9.19895 10.8455 9.23158C10.7313 9.26867 10.6323 9.36768 10.4343 9.56569L8.56569 11.4343C8.36768 11.6323 8.26867 11.7313 8.15451 11.7684C8.05409 11.8011 7.94591 11.8011 7.84549 11.7684C7.73133 11.7313 7.63232 11.6323 7.43431 11.4343L3 7M17 15H13M17 15V11M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z"
      />
    </SVG>
  );
};

export const LineChartDown04: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        {...pathProps}
        d="M3 9L9.65533 13.7538C9.85422 13.8959 10.1267 13.8733 10.2995 13.7005L13.7005 10.2995C13.8733 10.1267 14.1458 10.1041 14.3447 10.2462L21 15M6 21H18C19.6569 21 21 19.6569 21 18V6C21 4.34315 19.6569 3 18 3H6C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34315 21 6 21Z"
      />
    </SVG>
  );
};

export const LineChartDown05: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        {...pathProps}
        d="M6 10L9.43431 13.4343C9.63232 13.6323 9.73133 13.7313 9.84549 13.7684C9.94591 13.8011 10.0541 13.8011 10.1545 13.7684C10.2687 13.7313 10.3677 13.6323 10.5657 13.4343L13.4343 10.5657C13.6323 10.3677 13.7313 10.2687 13.8455 10.2316C13.9459 10.1989 14.0541 10.1989 14.1545 10.2316C14.2687 10.2687 14.3677 10.3677 14.5657 10.5657L18 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
      />
    </SVG>
  );
};

export const LineChartUp01: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        {...pathProps}
        d="M21 21H4.6C4.03995 21 3.75992 21 3.54601 20.891C3.35785 20.7951 3.20487 20.6422 3.10899 20.454C3 20.2401 3 19.9601 3 19.4V3M20 8L16.0811 12.1827C15.9326 12.3412 15.8584 12.4204 15.7688 12.4614C15.6897 12.4976 15.6026 12.5125 15.516 12.5047C15.4179 12.4958 15.3215 12.4458 15.1287 12.3457L11.8713 10.6543C11.6785 10.5542 11.5821 10.5042 11.484 10.4953C11.3974 10.4875 11.3103 10.5024 11.2312 10.5386C11.1416 10.5796 11.0674 10.6588 10.9189 10.8173L7 15"
      />
    </SVG>
  );
};

export const LineChartUp02: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        {...pathProps}
        d="M21 21H4.6C4.03995 21 3.75992 21 3.54601 20.891C3.35785 20.7951 3.20487 20.6422 3.10899 20.454C3 20.2401 3 19.9601 3 19.4V3M21 7L15.5657 12.4343C15.3677 12.6323 15.2687 12.7313 15.1545 12.7684C15.0541 12.8011 14.9459 12.8011 14.8455 12.7684C14.7313 12.7313 14.6323 12.6323 14.4343 12.4343L12.5657 10.5657C12.3677 10.3677 12.2687 10.2687 12.1545 10.2316C12.0541 10.1989 11.9459 10.1989 11.8455 10.2316C11.7313 10.2687 11.6323 10.3677 11.4343 10.5657L7 15M21 7H17M21 7V11"
      />
    </SVG>
  );
};

export const LineChartUp03: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        {...pathProps}
        d="M17 9L11.5657 14.4343C11.3677 14.6323 11.2687 14.7313 11.1545 14.7684C11.0541 14.8011 10.9459 14.8011 10.8455 14.7684C10.7313 14.7313 10.6323 14.6323 10.4343 14.4343L8.56569 12.5657C8.36768 12.3677 8.26867 12.2687 8.15451 12.2316C8.05409 12.1989 7.94591 12.1989 7.84549 12.2316C7.73133 12.2687 7.63232 12.3677 7.43431 12.5657L3 17M17 9H13M17 9V13M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z"
      />
    </SVG>
  );
};

export const LineChartUp04: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        {...pathProps}
        d="M21 9L14.5515 13.6061C14.3555 13.746 14.2576 13.816 14.1527 13.8371C14.0602 13.8557 13.9643 13.8478 13.8762 13.8142C13.7762 13.7762 13.691 13.691 13.5208 13.5208L10.4792 10.4792C10.309 10.309 10.2238 10.2238 10.1238 10.1858C10.0357 10.1522 9.9398 10.1443 9.84732 10.1629C9.74241 10.184 9.64445 10.254 9.44853 10.3939L3 15M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z"
      />
    </SVG>
  );
};

export const LineChartUp05: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        {...pathProps}
        d="M18 10L14.5657 13.4343C14.3677 13.6323 14.2687 13.7313 14.1545 13.7684C14.0541 13.8011 13.9459 13.8011 13.8455 13.7684C13.7313 13.7313 13.6323 13.6323 13.4343 13.4343L10.5657 10.5657C10.3677 10.3677 10.2687 10.2687 10.1545 10.2316C10.0541 10.1989 9.94591 10.1989 9.84549 10.2316C9.73133 10.2687 9.63232 10.3677 9.43431 10.5657L6 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
      />
    </SVG>
  );
};

export const PieChart01: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        {...pathProps}
        d="M21.2104 15.8899C20.5742 17.3944 19.5792 18.7202 18.3123 19.7512C17.0454 20.7823 15.5452 21.4874 13.9428 21.8047C12.3405 22.1221 10.6848 22.0421 9.12055 21.5717C7.55627 21.1014 6.13103 20.255 4.96942 19.1066C3.80782 17.9582 2.94522 16.5427 2.45704 14.9839C1.96886 13.4251 1.86996 11.7704 2.169 10.1646C2.46804 8.55873 3.1559 7.05058 4.17245 5.77198C5.189 4.49338 6.50329 3.48327 8.0004 2.82995M21.2392 8.17311C21.6395 9.13958 21.8851 10.1613 21.9684 11.2008C21.989 11.4576 21.9993 11.586 21.9483 11.7017C21.9057 11.7983 21.8213 11.8897 21.7284 11.9399C21.6172 11.9999 21.4783 11.9999 21.2004 11.9999H12.8004C12.5204 11.9999 12.3804 11.9999 12.2734 11.9455C12.1793 11.8975 12.1028 11.821 12.0549 11.7269C12.0004 11.62 12.0004 11.48 12.0004 11.1999V2.79995C12.0004 2.52208 12.0004 2.38315 12.0605 2.27193C12.1107 2.17903 12.2021 2.09464 12.2987 2.05204C12.4144 2.00105 12.5428 2.01134 12.7996 2.03193C13.839 2.11527 14.8608 2.36083 15.8272 2.76115C17.0405 3.2637 18.1429 4.00029 19.0715 4.92888C20.0001 5.85747 20.7367 6.95986 21.2392 8.17311Z"
      />
    </SVG>
  );
};

export const PieChart02: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        {...pathProps}
        d="M17.2 14C17.477 14 17.6155 14 17.7278 14.0615C17.8204 14.1122 17.9065 14.2075 17.9478 14.3047C17.9978 14.4225 17.9852 14.5479 17.96 14.7987C17.8296 16.0987 17.3822 17.3514 16.6518 18.4445C15.7727 19.7601 14.5233 20.7855 13.0615 21.391C11.5997 21.9965 9.99113 22.155 8.43928 21.8463C6.88743 21.5376 5.46197 20.7757 4.34315 19.6568C3.22433 18.538 2.4624 17.1126 2.15372 15.5607C1.84504 14.0089 2.00347 12.4003 2.60897 10.9385C3.21447 9.47671 4.23985 8.22728 5.55544 7.34823C6.64856 6.61783 7.90125 6.17039 9.20131 6.03995C9.45207 6.01479 9.57745 6.00221 9.69528 6.0522C9.79249 6.09344 9.88776 6.17964 9.9385 6.27224C10 6.38449 10 6.52299 10 6.79999V13.2C10 13.48 10 13.62 10.0545 13.727C10.1024 13.8211 10.1789 13.8976 10.273 13.9455C10.38 14 10.52 14 10.8 14H17.2Z"
      />
      <Path
        {...pathProps}
        d="M14 2.79999C14 2.52298 14 2.38448 14.0615 2.27223C14.1122 2.17963 14.2075 2.09344 14.3047 2.0522C14.4225 2.0022 14.5479 2.01478 14.7987 2.03993C16.6271 2.22333 18.346 3.03229 19.6569 4.34313C20.9677 5.65398 21.7767 7.37289 21.9601 9.20129C21.9852 9.45206 21.9978 9.57744 21.9478 9.69527C21.9066 9.79248 21.8204 9.88774 21.7278 9.93848C21.6155 9.99998 21.477 9.99999 21.2 9.99999L14.8 9.99999C14.52 9.99999 14.38 9.99999 14.273 9.94549C14.1789 9.89755 14.1024 9.82106 14.0545 9.72698C14 9.62003 14 9.48001 14 9.19999V2.79999Z"
      />
    </SVG>
  );
};

export const PieChart03: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        {...pathProps}
        d="M12 2C13.3132 2 14.6136 2.25866 15.8268 2.76121C17.0401 3.26375 18.1425 4.00035 19.0711 4.92893C19.9997 5.85752 20.7363 6.95991 21.2388 8.17317C21.7413 9.38643 22 10.6868 22 12M12 2V12M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5229 22 12M12 2C17.5228 2 22 6.47716 22 12M22 12L12 12M22 12C22 13.5781 21.6265 15.1338 20.9101 16.5399C20.1936 17.946 19.1546 19.1626 17.8779 20.0902L12 12"
      />
    </SVG>
  );
};

export const PieChart04: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        {...pathProps}
        d="M12 12L2.33178 9.44554C1.70974 11.7999 1.96813 14.3002 3.05847 16.4776C4.14881 18.6549 5.99616 20.3596 8.25395 21.2718L12 12ZM12 12L12.1047 2.00055C9.88558 1.97731 7.72174 2.69293 5.95402 4.0347C4.1863 5.37647 2.91514 7.26815 2.34075 9.41181L12 12ZM22 12C22 17.5228 17.5229 22 12 22C6.47716 22 2.00001 17.5228 2.00001 12C2.00001 6.47715 6.47716 2 12 2C17.5229 2 22 6.47715 22 12Z"
      />
    </SVG>
  );
};

export const PresentationChart01: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        {...pathProps}
        d="M12 16V21M12 16L18 21M12 16L6 21M21 3V11.2C21 12.8802 21 13.7202 20.673 14.362C20.3854 14.9265 19.9265 15.3854 19.362 15.673C18.7202 16 17.8802 16 16.2 16H7.8C6.11984 16 5.27976 16 4.63803 15.673C4.07354 15.3854 3.6146 14.9265 3.32698 14.362C3 13.7202 3 12.8802 3 11.2V3M8 9V12M12 7V12M16 11V12M22 3H2"
      />
    </SVG>
  );
};

export const PresentationChart02: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        {...pathProps}
        d="M12 16V21M18 21L14.0486 17.7072C13.3198 17.0998 12.9554 16.7962 12.5487 16.6801C12.19 16.5778 11.81 16.5778 11.4513 16.6801C11.0446 16.7962 10.6802 17.0998 9.95141 17.7072L6 21M8 11V12M12 9V12M16 7V12M22 3H2M3 3H21V11.2C21 12.8802 21 13.7202 20.673 14.362C20.3854 14.9265 19.9265 15.3854 19.362 15.673C18.7202 16 17.8802 16 16.2 16H7.8C6.11984 16 5.27976 16 4.63803 15.673C4.07354 15.3854 3.6146 14.9265 3.32698 14.362C3 13.7202 3 12.8802 3 11.2V3Z"
      />
    </SVG>
  );
};

export const PresentationChart03: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        {...pathProps}
        d="M12 16V21M12 16L18 21M12 16L6 21M8 7V12M12 9V12M16 11V12M22 3H2M3 3H21V11.2C21 12.8802 21 13.7202 20.673 14.362C20.3854 14.9265 19.9265 15.3854 19.362 15.673C18.7202 16 17.8802 16 16.2 16H7.8C6.11984 16 5.27976 16 4.63803 15.673C4.07354 15.3854 3.6146 14.9265 3.32698 14.362C3 13.7202 3 12.8802 3 11.2V3Z"
      />
    </SVG>
  );
};

export const TrendDown01: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        {...pathProps}
        d="M22 17L14.1314 9.13137C13.7354 8.73535 13.5373 8.53735 13.309 8.46316C13.1082 8.3979 12.8918 8.3979 12.691 8.46316C12.4627 8.53735 12.2646 8.73535 11.8686 9.13137L9.13137 11.8686C8.73535 12.2646 8.53735 12.4627 8.30902 12.5368C8.10817 12.6021 7.89183 12.6021 7.69098 12.5368C7.46265 12.4627 7.26465 12.2646 6.86863 11.8686L2 7M22 17H15M22 17V10"
      />
    </SVG>
  );
};

export const TrendDown02: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path {...pathProps} d="M7 7L17 17M17 17V7M17 17H7" />
    </SVG>
  );
};

export const TrendUp01: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        {...pathProps}
        d="M22 7L14.1314 14.8686C13.7354 15.2646 13.5373 15.4627 13.309 15.5368C13.1082 15.6021 12.8918 15.6021 12.691 15.5368C12.4627 15.4627 12.2646 15.2646 11.8686 14.8686L9.13137 12.1314C8.73535 11.7354 8.53735 11.5373 8.30902 11.4632C8.10817 11.3979 7.89183 11.3979 7.69098 11.4632C7.46265 11.5373 7.26465 11.7354 6.86863 12.1314L2 17M22 7H15M22 7V14"
      />
    </SVG>
  );
};

export const TrendUp02: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        {...pathProps}
        d="M22 7L14.1314 14.8686C13.7354 15.2646 13.5373 15.4627 13.309 15.5368C13.1082 15.6021 12.8918 15.6021 12.691 15.5368C12.4627 15.4627 12.2646 15.2646 11.8686 14.8686L9.13137 12.1314C8.73535 11.7354 8.53735 11.5373 8.30902 11.4632C8.10817 11.3979 7.89183 11.3979 7.69098 11.4632C7.46265 11.5373 7.26465 11.7354 6.86863 12.1314L2 17M22 7H15M22 7V14"
      />
    </SVG>
  );
};
