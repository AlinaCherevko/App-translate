export interface IWordsState {
  results: IWordsResult[];
  own: null | IAllWordsResult;
  categories: IWordsCategories[];
  words: IWords[];
  error: string | undefined;
  isLoading: boolean;
  totalPages: number;
  page: number;
  perPage: number;
  totalCount: number;
}

export interface IWordsCategories {
  categories: string;
}

export interface IWordsResult {
  _id: string;
  en: string;
  ua: string;
  category: string;
  isIrregular: boolean;
}

export interface IAllWordsResult {
  results: IWordsResult[];
  totalPages: number;
  page: number;
  perPage: number;
}

export interface IStatistic {
  totalCount: number;
}

export interface IWords {
  _id: string;
  ua: string;
  task: string;
}
export interface IWordsTasks {
  words: IWords[];
}
