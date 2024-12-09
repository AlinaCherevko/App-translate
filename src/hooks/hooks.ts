import { StylesConfig } from "react-select";
import { useMediaQuery } from "react-responsive";
import { Style } from "../components/Button/Button";

export const useSelectStyles = (style: Style): StylesConfig => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return {
    placeholder: (provided) => ({
      ...provided,
      color: style === Style.Dark ? "#262626" : "#f9f9f9",
      fontWeight: "500",
      fontSize: isMobile ? "14px" : "16px",
      lineHeight: isMobile ? "18px" : "20px",
    }),
    control: (provided) => ({
      ...provided,
      backgroundColor: "transparent",
      border:
        style === Style.Dark
          ? "1px solid rgba(18, 20, 23, 0.1)"
          : "1px solid #f9f9f9",

      width: isMobile ? "full" : "164px",
      height: "48px",
      boxShadow: "none",
      borderRadius: "12px",
      "&:hover": {
        border:
          style === Style.Dark ? "1px solid #85AA9F" : "1px solid #f9f9f9",
      },
    }),
    singleValue: (provided) => ({
      ...provided,
      fontSize: isMobile ? "14px" : "16px",
      lineHeight: isMobile ? "18px" : "20px",
      fontWeight: "400",
      color: style === Style.Dark ? "#262626" : "#f9f9f9", // Колір обраного значення
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: style === Style.Dark ? "#262626" : "#f9f9f9", // Колір стрілочки
      "&:hover": {
        color: style === Style.Dark ? "1px solid #85AA9F" : "1px solid #f9f9f9",
      },
    }),
    menu: (provided) => ({
      ...provided,
      borderRadius: "10px",
      marginTop: "4px",
    }),
    menuList: (provided) => ({
      ...provided,
      padding: "0",
      borderRadius: "10px",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: "#f9f9f9",
      color: state.isSelected ? "#85AA9F" : "#686868",
      "&:hover": {
        color: "#686868",
      },
    }),
  };
};
