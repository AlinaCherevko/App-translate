import { HStack } from "@chakra-ui/react";
import { Radio, RadioGroup } from "../ui/radio";
import { FC } from "react";
import { Style } from "../Button/Button";

type RadioGroupProps = {
  setIsIrregular: (value: boolean) => void;
  setPage?: (value: number) => void;
  style: Style;
};

export const RadioGroupEl: FC<RadioGroupProps> = ({
  setIsIrregular,
  setPage,
  style,
}) => {
  const handleToggleRadioBtn = (e: { value: string }) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    e.value === "Regular" && setIsIrregular(false);
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    e.value === "Irregular" && setIsIrregular(true);
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    setPage && setPage(1);
  };
  return (
    <RadioGroup
      variant="subtle"
      defaultValue="Regular"
      colorPalette="accent"
      size="sm"
      onValueChange={handleToggleRadioBtn}
    >
      <HStack gap="6">
        <Radio
          className={`text-mediumSmall tablet:text-tiny ${
            style === Style.Dark
              ? "text-main-text-color"
              : "text-primary-white-color"
          } `}
          value="Regular"
        >
          Regular
        </Radio>
        <Radio
          className={`text-mediumSmall tablet:text-tiny ${
            style === Style.Dark
              ? "text-main-text-color"
              : "text-primary-white-color"
          } `}
          value="Irregular"
        >
          Irregular
        </Radio>
      </HStack>
    </RadioGroup>
  );
};
