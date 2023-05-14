import { SVG, Path } from "../template";
import { FC } from "react";
import { SVGComponentProps } from "./types";

export const Atom01: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M11.9995 12.0001H12.0095M15.535 15.5357C10.8488 20.222 5.46685 22.438 3.51423 20.4854C1.56161 18.5328 3.77769 13.1509 8.46398 8.46461C13.1503 3.77832 18.5322 1.56224 20.4848 3.51486C22.4374 5.46748 20.2213 10.8494 15.535 15.5357ZM15.535 8.46443C20.2213 13.1507 22.4374 18.5326 20.4848 20.4852C18.5321 22.4379 13.1502 20.2218 8.46394 15.5355C3.77765 10.8492 1.56157 5.4673 3.51419 3.51468C5.46681 1.56206 10.8487 3.77814 15.535 8.46443ZM12.4995 12.0001C12.4995 12.2763 12.2757 12.5001 11.9995 12.5001C11.7234 12.5001 11.4995 12.2763 11.4995 12.0001C11.4995 11.724 11.7234 11.5001 11.9995 11.5001C12.2757 11.5001 12.4995 11.724 12.4995 12.0001Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const Atom02: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M17.1153 15.3582C16.8446 15.6642 16.5606 15.9665 16.2635 16.2635C11.9678 20.5593 6.58585 22.1422 4.2427 19.7991C2.6363 18.1926 2.8752 15.158 4.56847 12.0242M6.88967 8.72526C7.17138 8.40495 7.46772 8.08875 7.77824 7.77824C12.074 3.48247 17.4559 1.89956 19.7991 4.2427C21.4066 5.85021 21.1662 8.88795 19.4698 12.024M16.2635 7.77824C20.5593 12.074 22.1422 17.4559 19.7991 19.7991C17.4559 22.1422 12.074 20.5593 7.77824 16.2635C3.48247 11.9678 1.89956 6.58585 4.2427 4.2427C6.58585 1.89956 11.9678 3.48247 16.2635 7.77824ZM13.0001 12C13.0001 12.5523 12.5523 13 12.0001 13C11.4478 13 11.0001 12.5523 11.0001 12C11.0001 11.4477 11.4478 11 12.0001 11C12.5523 11 13.0001 11.4477 13.0001 12Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const Award01: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M7.96668 14.7219L7 22L11.5884 19.247C11.7381 19.1572 11.8129 19.1123 11.8928 19.0947C11.9634 19.0792 12.0366 19.0792 12.1072 19.0947C12.1871 19.1123 12.2619 19.1572 12.4116 19.247L17 22L16.0343 14.7212M19 9C19 12.866 15.866 16 12 16C8.13401 16 5 12.866 5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const Award02: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M7 15.0903V22L11.7029 20.1188C11.8126 20.0749 11.8675 20.053 11.9242 20.0443C11.9744 20.0366 12.0256 20.0366 12.0758 20.0443C12.1325 20.053 12.1874 20.0749 12.2971 20.1188L17 22V15.0903M19.5 9.5C19.5 13.6421 16.1421 17 12 17C7.85786 17 4.5 13.6421 4.5 9.5C4.5 5.35786 7.85786 2 12 2C16.1421 2 19.5 5.35786 19.5 9.5Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const Award03: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M7.86866 15.4599L7 22L11.5884 19.247C11.7381 19.1572 11.8129 19.1123 11.8928 19.0947C11.9634 19.0792 12.0366 19.0792 12.1072 19.0947C12.1871 19.1123 12.2619 19.1572 12.4116 19.247L17 22L16.1319 15.4571M16.4259 4.24888C16.5803 4.6224 16.8768 4.9193 17.25 5.0743L18.5589 5.61648C18.9325 5.77121 19.2292 6.06799 19.384 6.44154C19.5387 6.81509 19.5387 7.23481 19.384 7.60836L18.8422 8.91635C18.6874 9.29007 18.6872 9.71021 18.8427 10.0837L19.3835 11.3913C19.4602 11.5764 19.4997 11.7747 19.4997 11.975C19.4998 12.1752 19.4603 12.3736 19.3837 12.5586C19.3071 12.7436 19.1947 12.9118 19.0531 13.0534C18.9114 13.195 18.7433 13.3073 18.5582 13.3839L17.2503 13.9256C16.8768 14.0801 16.5799 14.3765 16.4249 14.7498L15.8827 16.0588C15.728 16.4323 15.4312 16.7291 15.0577 16.8838C14.6841 17.0386 14.2644 17.0386 13.8909 16.8838L12.583 16.342C12.2094 16.1877 11.7899 16.188 11.4166 16.3429L10.1077 16.8843C9.73434 17.0387 9.31501 17.0386 8.94178 16.884C8.56854 16.7293 8.27194 16.4329 8.11711 16.0598L7.57479 14.7504C7.42035 14.3769 7.12391 14.08 6.75064 13.925L5.44175 13.3828C5.06838 13.2282 4.77169 12.9316 4.61691 12.5582C4.46213 12.1849 4.46192 11.7654 4.61633 11.3919L5.1581 10.0839C5.31244 9.71035 5.31213 9.29079 5.15722 8.91746L4.61623 7.60759C4.53953 7.42257 4.50003 7.22426 4.5 7.02397C4.49997 6.82369 4.5394 6.62536 4.61604 6.44032C4.69268 6.25529 4.80504 6.08716 4.94668 5.94556C5.08832 5.80396 5.25647 5.69166 5.44152 5.61508L6.74947 5.07329C7.12265 4.91898 7.41936 4.6229 7.57448 4.25004L8.11664 2.94111C8.27136 2.56756 8.56813 2.27078 8.94167 2.11605C9.3152 1.96132 9.7349 1.96132 10.1084 2.11605L11.4164 2.65784C11.7899 2.81218 12.2095 2.81187 12.5828 2.65696L13.8922 2.11689C14.2657 1.96224 14.6853 1.96228 15.0588 2.11697C15.4322 2.27167 15.729 2.56837 15.8837 2.94182L16.426 4.25115L16.4259 4.24888Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const Award04: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M8.87625 13.0953L4.70122 7.87653C4.44132 7.55166 4.31138 7.38922 4.21897 7.20834C4.13698 7.04787 4.07706 6.87705 4.04084 6.70052C4 6.50155 4 6.29354 4 5.8775V5.2C4 4.0799 4 3.51984 4.21799 3.09202C4.40973 2.71569 4.71569 2.40973 5.09202 2.21799C5.51984 2 6.0799 2 7.2 2H16.8C17.9201 2 18.4802 2 18.908 2.21799C19.2843 2.40973 19.5903 2.71569 19.782 3.09202C20 3.51984 20 4.0799 20 5.2V5.8775C20 6.29354 20 6.50155 19.9592 6.70052C19.9229 6.87705 19.863 7.04787 19.781 7.20834C19.6886 7.38922 19.5587 7.55166 19.2988 7.87652L15.1238 13.0953M5.00005 3L12.0001 12L19 3M15.5355 13.4645C17.4882 15.4171 17.4882 18.5829 15.5355 20.5355C13.5829 22.4882 10.4171 22.4882 8.46446 20.5355C6.51185 18.5829 6.51185 15.4171 8.46446 13.4645C10.4171 11.5118 13.5829 11.5118 15.5355 13.4645Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const Award05: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M7.13515 11.189L3.3304 4.38052C2.89291 3.59765 2.67417 3.20621 2.71103 2.88573C2.7432 2.60611 2.8917 2.353 3.1201 2.18852C3.38188 2 3.83029 2 4.72711 2H6.96193C7.29523 2 7.46187 2 7.61135 2.04813C7.74362 2.09073 7.86556 2.16042 7.96939 2.25276C8.08674 2.35712 8.17132 2.5007 8.3405 2.78788L12.0001 9L15.6597 2.78788C15.8289 2.5007 15.9135 2.35712 16.0308 2.25276C16.1347 2.16042 16.2566 2.09073 16.3889 2.04813C16.5383 2 16.705 2 17.0383 2H19.2731C20.1699 2 20.6183 2 20.8801 2.18852C21.1085 2.353 21.257 2.60611 21.2892 2.88573C21.326 3.20621 21.1073 3.59765 20.6698 4.38052L16.8651 11.189M10.5001 14L12.0001 13V18M10.7501 18H13.2501M16.5963 10.9038C19.1347 13.4422 19.1347 17.5578 16.5963 20.0962C14.0579 22.6346 9.94232 22.6346 7.40391 20.0962C4.8655 17.5578 4.8655 13.4422 7.40391 10.9038C9.94231 8.3654 14.0579 8.3654 16.5963 10.9038Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const Backpack: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M20 13V17.8C20 18.9201 20 19.4802 19.782 19.908C19.5903 20.2843 19.2843 20.5903 18.908 20.782C18.4802 21 17.9201 21 16.8 21H7.2C6.0799 21 5.51984 21 5.09202 20.782C4.71569 20.5903 4.40973 20.2843 4.21799 19.908C4 19.4802 4 18.9201 4 17.8V13M9 10H15M9.28571 14H14.7143C16.8467 14 17.913 14 18.7355 13.6039C19.552 13.2107 20.2107 12.552 20.6039 11.7355C21 10.913 21 9.84674 21 7.71429C21 6.11494 21 5.31527 20.7029 4.69835C20.408 4.08603 19.914 3.59197 19.3017 3.29709C18.6847 3 17.8851 3 16.2857 3H7.71429C6.11494 3 5.31527 3 4.69835 3.29709C4.08603 3.59197 3.59197 4.08603 3.29709 4.69835C3 5.31527 3 6.11494 3 7.71429C3 9.84674 3 10.913 3.39612 11.7355C3.7893 12.552 4.44803 13.2107 5.26447 13.6039C6.08703 14 7.15326 14 9.28571 14Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const Beaker01: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M10 2.00008V6.6605C10 6.87768 10 6.98626 9.9669 7.07264C9.93568 7.15413 9.89435 7.21328 9.82858 7.27063C9.75885 7.33142 9.64593 7.37279 9.42008 7.45553C6.54892 8.50734 4.5 11.2644 4.5 14.5C4.5 18.6421 7.85786 22 12 22C16.1421 22 19.5 18.6421 19.5 14.5C19.5 11.2644 17.4511 8.50734 14.5799 7.45553C14.3541 7.37279 14.2411 7.33142 14.1714 7.27063C14.1056 7.21328 14.0643 7.15413 14.0331 7.07264C14 6.98626 14 6.87768 14 6.6605V2.00008M8.5 2H15.5"
        {...pathProps}
      />
    </SVG>
  );
};

export const Beaker02: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M9 6V10.5012C9 11.0521 9 11.3276 8.93132 11.5829C8.87047 11.809 8.77037 12.0228 8.63557 12.2143C8.48344 12.4305 8.27182 12.6068 7.84859 12.9595L4.15141 16.0405C3.72818 16.3932 3.51656 16.5695 3.36443 16.7857C3.22963 16.9772 3.12953 17.191 3.06868 17.4171C3 17.6724 3 17.9479 3 18.4988V18.8C3 19.9201 3 20.4802 3.21799 20.908C3.40973 21.2843 3.71569 21.5903 4.09202 21.782C4.51984 22 5.0799 22 6.2 22H17.8C18.9201 22 19.4802 22 19.908 21.782C20.2843 21.5903 20.5903 21.2843 20.782 20.908C21 20.4802 21 19.9201 21 18.8V18.4988C21 17.9479 21 17.6724 20.9313 17.4171C20.8705 17.191 20.7704 16.9772 20.6356 16.7857C20.4834 16.5695 20.2718 16.3932 19.8486 16.0405L16.1514 12.9595C15.7282 12.6068 15.5166 12.4305 15.3644 12.2143C15.2296 12.0228 15.1295 11.809 15.0687 11.5829C15 11.3276 15 11.0521 15 10.5012V6M8.3 6H15.7C15.98 6 16.12 6 16.227 5.9455C16.3211 5.89757 16.3976 5.82108 16.4455 5.727C16.5 5.62004 16.5 5.48003 16.5 5.2V2.8C16.5 2.51997 16.5 2.37996 16.4455 2.273C16.3976 2.17892 16.3211 2.10243 16.227 2.0545C16.12 2 15.98 2 15.7 2H8.3C8.01997 2 7.87996 2 7.773 2.0545C7.67892 2.10243 7.60243 2.17892 7.5545 2.273C7.5 2.37996 7.5 2.51997 7.5 2.8V5.2C7.5 5.48003 7.5 5.62004 7.5545 5.727C7.60243 5.82108 7.67892 5.89757 7.773 5.9455C7.87996 6 8.01997 6 8.3 6ZM5.5 17H18.5C18.9647 17 19.197 17 19.3902 17.0384C20.1836 17.1962 20.8038 17.8164 20.9616 18.6098C21 18.803 21 19.0353 21 19.5C21 19.9647 21 20.197 20.9616 20.3902C20.8038 21.1836 20.1836 21.8038 19.3902 21.9616C19.197 22 18.9647 22 18.5 22H5.5C5.03534 22 4.80302 22 4.60982 21.9616C3.81644 21.8038 3.19624 21.1836 3.03843 20.3902C3 20.197 3 19.9647 3 19.5C3 19.0353 3 18.803 3.03843 18.6098C3.19624 17.8164 3.81644 17.1962 4.60982 17.0384C4.80302 17 5.03534 17 5.5 17Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const BookClosed: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M20 19V16H7C5.34315 16 4 17.3431 4 19M8.8 22H16.8C17.9201 22 18.4802 22 18.908 21.782C19.2843 21.5903 19.5903 21.2843 19.782 20.908C20 20.4802 20 19.9201 20 18.8V5.2C20 4.07989 20 3.51984 19.782 3.09202C19.5903 2.71569 19.2843 2.40973 18.908 2.21799C18.4802 2 17.9201 2 16.8 2H8.8C7.11984 2 6.27976 2 5.63803 2.32698C5.07354 2.6146 4.6146 3.07354 4.32698 3.63803C4 4.27976 4 5.11984 4 6.8V17.2C4 18.8802 4 19.7202 4.32698 20.362C4.6146 20.9265 5.07354 21.3854 5.63803 21.673C6.27976 22 7.11984 22 8.8 22Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const BookOpen01: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M12 21L11.8999 20.8499C11.2053 19.808 10.858 19.287 10.3991 18.9098C9.99286 18.5759 9.52476 18.3254 9.02161 18.1726C8.45325 18 7.82711 18 6.57482 18H5.2C4.07989 18 3.51984 18 3.09202 17.782C2.71569 17.5903 2.40973 17.2843 2.21799 16.908C2 16.4802 2 15.9201 2 14.8V6.2C2 5.07989 2 4.51984 2.21799 4.09202C2.40973 3.71569 2.71569 3.40973 3.09202 3.21799C3.51984 3 4.07989 3 5.2 3H5.6C7.84021 3 8.96031 3 9.81596 3.43597C10.5686 3.81947 11.1805 4.43139 11.564 5.18404C12 6.03968 12 7.15979 12 9.4M12 21V9.4M12 21L12.1001 20.8499C12.7947 19.808 13.142 19.287 13.6009 18.9098C14.0071 18.5759 14.4752 18.3254 14.9784 18.1726C15.5467 18 16.1729 18 17.4252 18H18.8C19.9201 18 20.4802 18 20.908 17.782C21.2843 17.5903 21.5903 17.2843 21.782 16.908C22 16.4802 22 15.9201 22 14.8V6.2C22 5.07989 22 4.51984 21.782 4.09202C21.5903 3.71569 21.2843 3.40973 20.908 3.21799C20.4802 3 19.9201 3 18.8 3H18.4C16.1598 3 15.0397 3 14.184 3.43597C13.4314 3.81947 12.8195 4.43139 12.436 5.18404C12 6.03968 12 7.15979 12 9.4"
        {...pathProps}
      />
    </SVG>
  );
};

export const BookOpen02: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M12 20H5.2C4.07989 20 3.51984 20 3.09202 19.782C2.71569 19.5903 2.40973 19.2843 2.21799 18.908C2 18.4802 2 17.9201 2 16.8V7.2C2 6.07989 2 5.51984 2.21799 5.09202C2.40973 4.71569 2.71569 4.40973 3.09202 4.21799C3.51984 4 4.07989 4 5.2 4H5.6C7.84021 4 8.96031 4 9.81596 4.43597C10.5686 4.81947 11.1805 5.43139 11.564 6.18404C12 7.03968 12 8.15979 12 10.4M12 20V10.4M12 20H18.8C19.9201 20 20.4802 20 20.908 19.782C21.2843 19.5903 21.5903 19.2843 21.782 18.908C22 18.4802 22 17.9201 22 16.8V7.2C22 6.07989 22 5.51984 21.782 5.09202C21.5903 4.71569 21.2843 4.40973 20.908 4.21799C20.4802 4 19.9201 4 18.8 4H18.4C16.1598 4 15.0397 4 14.184 4.43597C13.4314 4.81947 12.8195 5.43139 12.436 6.18404C12 7.03968 12 8.15979 12 10.4"
        {...pathProps}
      />
    </SVG>
  );
};

export const BriefCase01: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M16 7C16 6.07003 16 5.60504 15.8978 5.22354C15.6204 4.18827 14.8117 3.37962 13.7765 3.10222C13.395 3 12.93 3 12 3C11.07 3 10.605 3 10.2235 3.10222C9.18827 3.37962 8.37962 4.18827 8.10222 5.22354C8 5.60504 8 6.07003 8 7M5.2 21H18.8C19.9201 21 20.4802 21 20.908 20.782C21.2843 20.5903 21.5903 20.2843 21.782 19.908C22 19.4802 22 18.9201 22 17.8V10.2C22 9.07989 22 8.51984 21.782 8.09202C21.5903 7.71569 21.2843 7.40973 20.908 7.21799C20.4802 7 19.9201 7 18.8 7H5.2C4.07989 7 3.51984 7 3.09202 7.21799C2.71569 7.40973 2.40973 7.71569 2.21799 8.09202C2 8.51984 2 9.07989 2 10.2V17.8C2 18.9201 2 19.4802 2.21799 19.908C2.40973 20.2843 2.71569 20.5903 3.09202 20.782C3.51984 21 4.0799 21 5.2 21Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const BriefCase02: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M8 21V7C8 6.07003 8 5.60504 8.10222 5.22354C8.37962 4.18827 9.18827 3.37962 10.2235 3.10222C10.605 3 11.07 3 12 3C12.93 3 13.395 3 13.7765 3.10222C14.8117 3.37962 15.6204 4.18827 15.8978 5.22354C16 5.60504 16 6.07003 16 7V21M5.2 21H18.8C19.9201 21 20.4802 21 20.908 20.782C21.2843 20.5903 21.5903 20.2843 21.782 19.908C22 19.4802 22 18.9201 22 17.8V10.2C22 9.07989 22 8.51984 21.782 8.09202C21.5903 7.71569 21.2843 7.40973 20.908 7.21799C20.4802 7 19.9201 7 18.8 7H5.2C4.07989 7 3.51984 7 3.09202 7.21799C2.71569 7.40973 2.40973 7.71569 2.21799 8.09202C2 8.51984 2 9.07989 2 10.2V17.8C2 18.9201 2 19.4802 2.21799 19.908C2.40973 20.2843 2.71569 20.5903 3.09202 20.782C3.51984 21 4.0799 21 5.2 21Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const Calculator: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M17.5 6.5L6.5 17.5M8.5 10.5V6.5M6.5 8.5H10.5M13.5 15.5H17.5M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const Certificate01: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M6.5 20H5C3.89543 20 3 19.1046 3 18V4C3 2.89543 3.89543 2 5 2H19C20.1046 2 21 2.89543 21 4V18C21 19.1046 20.1046 20 19 20H17.5M12 19C13.6569 19 15 17.6569 15 16C15 14.3431 13.6569 13 12 13C10.3431 13 9 14.3431 9 16C9 17.6569 10.3431 19 12 19ZM12 19L12.0214 18.9998L8.82867 22.1926L6.00024 19.3641L9.01965 16.3447M12 19L15.1928 22.1926L18.0212 19.3641L15.0018 16.3447M9 6H15M7 9.5H17"
        {...pathProps}
      />
    </SVG>
  );
};

export const Certificate02: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M9 18.5H15M7 15H17M5 2H19C20.1046 2 21 2.99492 21 4.22222V19.7778C21 21.0051 20.1046 22 19 22H5C3.89543 22 3 21.0051 3 19.7778V4.22222C3 2.99492 3.89543 2 5 2ZM11.9976 6.21194C11.2978 5.4328 10.1309 5.22321 9.25414 5.93667C8.37738 6.65013 8.25394 7.84299 8.94247 8.6868C9.631 9.53061 11.9976 11.5 11.9976 11.5C11.9976 11.5 14.3642 9.53061 15.0527 8.6868C15.7413 7.84299 15.6329 6.64262 14.7411 5.93667C13.8492 5.23072 12.6974 5.4328 11.9976 6.21194Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const Compass: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M12 4C10.6193 4 9.5 5.11929 9.5 6.5C9.5 7.88071 10.6193 9 12 9C13.3807 9 14.5 7.88071 14.5 6.5C14.5 5.11929 13.3807 4 12 4ZM12 4V2M21 14.9375C18.8012 17.4287 15.5841 19 12 19C8.41592 19 5.19883 17.4287 3 14.9375M10.7448 8.66169L3 22M13.2552 8.66169L21 22"
        {...pathProps}
      />
    </SVG>
  );
};

export const Glasses01: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M10 11.5347C11.2335 10.8218 12.7663 10.8218 13.9999 11.5347M8.82843 9.17157C10.3905 10.7337 10.3905 13.2663 8.82843 14.8284C7.26634 16.3905 4.73367 16.3905 3.17157 14.8284C1.60948 13.2663 1.60948 10.7337 3.17157 9.17157C4.73366 7.60948 7.26633 7.60948 8.82843 9.17157ZM20.8284 9.17157C22.3905 10.7337 22.3905 13.2663 20.8284 14.8284C19.2663 16.3905 16.7337 16.3905 15.1716 14.8284C13.6095 13.2663 13.6095 10.7337 15.1716 9.17157C16.7337 7.60948 19.2663 7.60948 20.8284 9.17157Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const Glasses02: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M10 14.5347C11.2335 13.8218 12.7663 13.8218 13.9999 14.5347M2 15L2.70149 7.98511C2.72808 7.71915 2.74138 7.58617 2.76178 7.47208C3.00222 6.12702 4.1212 5.11436 5.48352 5.00894C5.59907 5 5.73271 5 6 5M22 15L21.2985 7.98511C21.2719 7.71916 21.2586 7.58617 21.2382 7.47208C20.9978 6.12702 19.8788 5.11436 18.5165 5.00894C18.4009 5 18.2673 5 18 5M8.82843 12.1716C10.3905 13.7337 10.3905 16.2663 8.82843 17.8284C7.26634 19.3905 4.73367 19.3905 3.17157 17.8284C1.60948 16.2663 1.60948 13.7337 3.17157 12.1716C4.73366 10.6095 7.26633 10.6095 8.82843 12.1716ZM20.8284 12.1716C22.3905 13.7337 22.3905 16.2663 20.8284 17.8284C19.2663 19.3905 16.7337 19.3905 15.1716 17.8284C13.6095 16.2663 13.6095 13.7337 15.1716 12.1716C16.7337 10.6095 19.2663 10.6095 20.8284 12.1716Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const Globe07: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M18.6317 2.36816C23.1227 6.85919 23.1227 14.1406 18.6317 18.6316C14.3308 22.9325 7.47094 23.1146 2.95335 19.178C2.75634 19.0064 2.65783 18.9205 2.61336 18.8032C2.57595 18.7044 2.57176 18.5824 2.60232 18.4813C2.63863 18.3612 2.73705 18.2628 2.93388 18.0659L5.14913 15.8507M17.9999 10.4999C17.9999 14.642 14.6421 17.9999 10.4999 17.9999C6.35779 17.9999 2.99992 14.642 2.99992 10.4999C2.99992 6.35776 6.35779 2.99989 10.4999 2.99989C14.6421 2.99989 17.9999 6.35776 17.9999 10.4999Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const GraduationHat01: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M5 10.0001V16.0112C5 16.3702 5 16.5496 5.05465 16.7081C5.10299 16.8482 5.18187 16.9759 5.28558 17.0817C5.40287 17.2015 5.5634 17.2818 5.88446 17.4423L11.2845 20.1423C11.5468 20.2735 11.678 20.3391 11.8156 20.3649C11.9375 20.3877 12.0625 20.3877 12.1844 20.3649C12.322 20.3391 12.4532 20.2735 12.7155 20.1423L18.1155 17.4423C18.4366 17.2818 18.5971 17.2015 18.7144 17.0817C18.8181 16.9759 18.897 16.8482 18.9453 16.7081C19 16.5496 19 16.3702 19 16.0112V10.0001M2 8.50006L11.6422 3.67895C11.7734 3.61336 11.839 3.58056 11.9078 3.56766C11.9687 3.55622 12.0313 3.55622 12.0922 3.56766C12.161 3.58056 12.2266 3.61336 12.3578 3.67895L22 8.50006L12.3578 13.3212C12.2266 13.3868 12.161 13.4196 12.0922 13.4325C12.0313 13.4439 11.9687 13.4439 11.9078 13.4325C11.839 13.4196 11.7734 13.3868 11.6422 13.3212L2 8.50006Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const GraduationHat02: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M17 14.5001V11.4945C17 11.315 17 11.2253 16.9727 11.146C16.9485 11.076 16.9091 11.0122 16.8572 10.9592C16.7986 10.8993 16.7183 10.8592 16.5578 10.779L12 8.50006M4 9.50006V16.3067C4 16.6786 4 16.8645 4.05802 17.0274C4.10931 17.1713 4.1929 17.3016 4.30238 17.4082C4.42622 17.5287 4.59527 17.6062 4.93335 17.7612L11.3334 20.6945C11.5786 20.8069 11.7012 20.8631 11.8289 20.8853C11.9421 20.9049 12.0579 20.9049 12.1711 20.8853C12.2988 20.8631 12.4214 20.8069 12.6666 20.6945L19.0666 17.7612C19.4047 17.6062 19.5738 17.5287 19.6976 17.4082C19.8071 17.3016 19.8907 17.1713 19.942 17.0274C20 16.8645 20 16.6786 20 16.3067V9.50006M2 8.50006L11.6422 3.67895C11.7734 3.61336 11.839 3.58056 11.9078 3.56766C11.9687 3.55622 12.0313 3.55622 12.0922 3.56766C12.161 3.58056 12.2266 3.61336 12.3578 3.67895L22 8.50006L12.3578 13.3212C12.2266 13.3868 12.161 13.4196 12.0922 13.4325C12.0313 13.4439 11.9687 13.4439 11.9078 13.4325C11.839 13.4196 11.7734 13.3868 11.6422 13.3212L2 8.50006Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const Microscope: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M3 22H12M11 6.25204C11.6392 6.08751 12.3094 6 13 6C17.4183 6 21 9.58172 21 14C21 17.3574 18.9318 20.2317 16 21.4185M5.5 13H9.5C9.96466 13 10.197 13 10.3902 13.0384C11.1836 13.1962 11.8038 13.8164 11.9616 14.6098C12 14.803 12 15.0353 12 15.5C12 15.9647 12 16.197 11.9616 16.3902C11.8038 17.1836 11.1836 17.8038 10.3902 17.9616C10.197 18 9.96466 18 9.5 18H5.5C5.03534 18 4.80302 18 4.60982 17.9616C3.81644 17.8038 3.19624 17.1836 3.03843 16.3902C3 16.197 3 15.9647 3 15.5C3 15.0353 3 14.803 3.03843 14.6098C3.19624 13.8164 3.81644 13.1962 4.60982 13.0384C4.80302 13 5.03534 13 5.5 13ZM4 5.5V13H11V5.5C11 3.567 9.433 2 7.5 2C5.567 2 4 3.567 4 5.5Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const Ruler: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M14.5 5.49989L16 6.99989M11.5 8.49989L13 9.99989M8.49996 11.4999L9.99996 12.9999M5.49996 14.4999L6.99996 15.9999M2.56561 17.5656L6.43424 21.4342C6.63225 21.6322 6.73125 21.7313 6.84542 21.7683C6.94584 21.801 7.05401 21.801 7.15443 21.7683C7.2686 21.7313 7.3676 21.6322 7.56561 21.4342L21.4342 7.56561C21.6322 7.3676 21.7313 7.2686 21.7683 7.15443C21.801 7.05401 21.801 6.94584 21.7683 6.84542C21.7313 6.73125 21.6322 6.63225 21.4342 6.43424L17.5656 2.56561C17.3676 2.3676 17.2686 2.2686 17.1544 2.2315C17.054 2.19887 16.9458 2.19887 16.8454 2.2315C16.7313 2.2686 16.6322 2.3676 16.4342 2.56561L2.56561 16.4342C2.3676 16.6322 2.2686 16.7313 2.2315 16.8454C2.19887 16.9458 2.19887 17.054 2.2315 17.1544C2.2686 17.2686 2.3676 17.3676 2.56561 17.5656Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const Stand: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M9 17L4 22M15 17L20 22M12 2V4M12 22V17M5.2 17H18.8C19.9201 17 20.4802 17 20.908 16.782C21.2843 16.5903 21.5903 16.2843 21.782 15.908C22 15.4802 22 14.9201 22 13.8V7.2C22 6.07989 22 5.51984 21.782 5.09202C21.5903 4.71569 21.2843 4.40973 20.908 4.21799C20.4802 4 19.9201 4 18.8 4H5.2C4.07989 4 3.51984 4 3.09202 4.21799C2.71569 4.40973 2.40973 4.71569 2.21799 5.09202C2 5.51984 2 6.07989 2 7.2V13.8C2 14.9201 2 15.4802 2.21799 15.908C2.40973 16.2843 2.71569 16.5903 3.09202 16.782C3.51984 17 4.0799 17 5.2 17Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const Telescope: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M13.1218 14.8446L18.0004 21.9999M10.879 14.8446L6.00041 21.9999M14.0004 13.2C14.0004 14.3045 13.105 15.2 12.0004 15.2C10.8958 15.2 10.0004 14.3045 10.0004 13.2C10.0004 12.0954 10.8958 11.2 12.0004 11.2C13.105 11.2 14.0004 12.0954 14.0004 13.2ZM17.1489 4.53225L5.36462 7.68984C5.09414 7.76232 4.95889 7.79855 4.86969 7.87888C4.79122 7.94953 4.73713 8.04321 4.71518 8.14649C4.69022 8.26391 4.72646 8.39915 4.79893 8.66964L5.67892 11.9538C5.7514 12.2243 5.78763 12.3595 5.86796 12.4487C5.93861 12.5272 6.03229 12.5813 6.13557 12.6032C6.25299 12.6282 6.38823 12.5919 6.65871 12.5195L18.443 9.36188L17.1489 4.53225ZM21.7928 9.49958C20.7109 9.78949 20.1699 9.93444 19.7002 9.83461C19.2871 9.74679 18.9124 9.53045 18.6298 9.21657C18.3085 8.85975 18.1635 8.31878 17.8736 7.23684L17.7183 6.65728C17.4284 5.57535 17.2835 5.03438 17.3833 4.56471C17.4711 4.15158 17.6875 3.77686 18.0013 3.49425C18.3582 3.17296 18.8991 3.02801 19.9811 2.7381C20.2515 2.66562 20.3868 2.62939 20.5042 2.65434C20.6075 2.6763 20.7012 2.73038 20.7718 2.80885C20.8521 2.89806 20.8884 3.0333 20.9609 3.30379L22.3585 8.51979C22.431 8.79027 22.4672 8.92551 22.4422 9.04293C22.4203 9.14621 22.3662 9.23989 22.2877 9.31055C22.1985 9.39087 22.0633 9.42711 21.7928 9.49958ZM3.50212 12.33L4.85441 11.9677C5.1249 11.8952 5.26014 11.8589 5.34935 11.7786C5.42782 11.708 5.4819 11.6143 5.50386 11.511C5.52881 11.3936 5.49258 11.2583 5.4201 10.9879L5.05775 9.63556C4.98528 9.36508 4.94904 9.22983 4.86872 9.14063C4.79806 9.06216 4.70438 9.00807 4.6011 8.98612C4.48368 8.96116 4.34844 8.9974 4.07796 9.06988L2.72566 9.43222C2.45518 9.5047 2.31993 9.54094 2.23073 9.62126C2.15226 9.69191 2.09817 9.78559 2.07622 9.88888C2.05126 10.0063 2.0875 10.1415 2.15998 10.412L2.52232 11.7643C2.5948 12.0348 2.63104 12.17 2.71136 12.2592C2.78201 12.3377 2.87569 12.3918 2.97898 12.4138C3.09639 12.4387 3.23163 12.4025 3.50212 12.33Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const Trophy01: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M12 15C8.68629 15 6 12.3137 6 9V3.44444C6 3.0306 6 2.82367 6.06031 2.65798C6.16141 2.38021 6.38021 2.16141 6.65798 2.06031C6.82367 2 7.0306 2 7.44444 2H16.5556C16.9694 2 17.1763 2 17.342 2.06031C17.6198 2.16141 17.8386 2.38021 17.9397 2.65798C18 2.82367 18 3.0306 18 3.44444V9C18 12.3137 15.3137 15 12 15ZM12 15V18M18 4H20.5C20.9659 4 21.1989 4 21.3827 4.07612C21.6277 4.17761 21.8224 4.37229 21.9239 4.61732C22 4.80109 22 5.03406 22 5.5V6C22 6.92997 22 7.39496 21.8978 7.77646C21.6204 8.81173 20.8117 9.62038 19.7765 9.89778C19.395 10 18.93 10 18 10M6 4H3.5C3.03406 4 2.80109 4 2.61732 4.07612C2.37229 4.17761 2.17761 4.37229 2.07612 4.61732C2 4.80109 2 5.03406 2 5.5V6C2 6.92997 2 7.39496 2.10222 7.77646C2.37962 8.81173 3.18827 9.62038 4.22354 9.89778C4.60504 10 5.07003 10 6 10M7.44444 22H16.5556C16.801 22 17 21.801 17 21.5556C17 19.5919 15.4081 18 13.4444 18H10.5556C8.59188 18 7 19.5919 7 21.5556C7 21.801 7.19898 22 7.44444 22Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const Trophy02: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M12 17C8.41015 17 5.5 14.0899 5.5 10.5V4.55556C5.5 4.03739 5.5 3.77831 5.59369 3.57738C5.69305 3.36431 5.86431 3.19305 6.07738 3.09369C6.27831 3 6.53739 3 7.05556 3H16.9444C17.4626 3 17.7217 3 17.9226 3.09369C18.1357 3.19305 18.3069 3.36431 18.4063 3.57738C18.5 3.77831 18.5 4.03739 18.5 4.55556V10.5C18.5 14.0899 15.5899 17 12 17ZM12 17V21M17 21H7M22 5V10M2 5V10"
        {...pathProps}
      />
    </SVG>
  );
};
