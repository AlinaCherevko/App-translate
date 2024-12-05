import { FC, useState } from "react";
import {
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverRoot,
  PopoverTrigger,
} from "../ui/popover";

type PopupProps = {
  children: React.ReactNode;
  content: string;
};

export const PopupEl: FC<PopupProps> = ({ children, content }) => {
  const [open, setOpen] = useState(false);

  return (
    <PopoverRoot open={open} onOpenChange={(e) => setOpen(e.open)}>
      <PopoverTrigger>{content}</PopoverTrigger>
      <PopoverContent width="auto">
        <PopoverArrow />
        <PopoverBody className="px-5 py-3">{children}</PopoverBody>
      </PopoverContent>
    </PopoverRoot>
  );
};
