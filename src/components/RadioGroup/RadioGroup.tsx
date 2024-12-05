import { HStack } from "@chakra-ui/react";
import { Radio, RadioGroup } from "../ui/radio";
import { FC } from "react";

export const RadioGroupEl: FC = () => {
  return (
    <RadioGroup defaultValue="Regular" colorPalette="teal" size="sm">
      <HStack gap="6">
        <Radio value="Regular">Regular</Radio>
        <Radio value="Irregular">Irregular 2</Radio>
      </HStack>
    </RadioGroup>
  );
};
