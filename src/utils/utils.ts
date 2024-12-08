import { WordCategory } from "../redux/words/types";

export function CreateOptionsArray(data: WordCategory[]) {
  const newArrayOption = data.map((item) => ({ value: item, label: item }));

  return [{ value: "all", label: "all" }, ...newArrayOption];
}
