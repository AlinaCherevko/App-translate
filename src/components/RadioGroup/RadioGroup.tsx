import { HStack } from "@chakra-ui/react";
import { Radio, RadioGroup } from "../ui/radio";
import { FC } from "react";

type RadioGroupProps = {
  setIsIrregular: (value: boolean) => void;
  setPage: (value: number) => void;
};

export const RadioGroupEl: FC<RadioGroupProps> = ({
  setIsIrregular,
  setPage,
}) => {
  const handleToggleRadioBtn = (e: { value: string }) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    e.value === "Regular" && setIsIrregular(false);
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    e.value === "Irregular" && setIsIrregular(true);
    setPage(1);
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
        <Radio className="text-mediumSmall tablet:text-tiny" value="Regular">
          Regular
        </Radio>
        <Radio className="text-mediumSmall tablet:text-tiny" value="Irregular">
          Irregular
        </Radio>
      </HStack>
    </RadioGroup>
  );
};
