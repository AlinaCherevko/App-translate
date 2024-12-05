import { StylesConfig } from "react-select";
import { useMediaQuery } from "react-responsive";

export const useSelectStyles = (): StylesConfig => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return {
    placeholder: (provided) => ({
      ...provided,
      color: "#262626",
      fontWeight: "500",
      fontSize: "16px",
      lineHeight: isMobile ? "18px" : "20px",
    }),
    control: (provided) => ({
      ...provided,
      backgroundColor: "transparent",
      border: "1px solid rgba(18, 20, 23, 0.1)",

      width: isMobile ? "full" : "164px",
      height: "48px",
      boxShadow: "none",
      borderRadius: "12px",
      "&:hover": {
        border: "1px solid #85AA9F",
      },
    }),
    singleValue: (provided) => ({
      ...provided,
      fontSize: isMobile ? "12px" : "14px",
      lineHeight: isMobile ? "18px" : "20px",
      fontWeight: "400",
      color: "#262626", // Колір обраного значення
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: "#262626", // Колір стрілочки
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
