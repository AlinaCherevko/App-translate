export interface IWordsState {
  recommendedWords: IRecommendedWords;
  own: IAllWordsResult;
  categories: WordCategory[];
  words: IWords[];
  error: string | undefined;
  notification: string;
  isLoading: boolean;
  totalCount: number;
}
export interface IRecommendedWords {
  results: IWordsResult[];
  totalPages: number;
  page: number;
  perPage: number;
}

export type WordCategory =
  | "verb"
  | "participle"
  | "noun"
  | "adjective"
  | "pronoun"
  | "numerals"
  | "adverb"
  | "preposition"
  | "conjunction"
  | "phrasal verb"
  | "functional phrase";

export interface IWordsResult {
  _id: string;
  en: string;
  ua: string;
  category: WordCategory;
  isIrregular: boolean;
  progress?: number;
  owner?: string;
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
export interface IGetAllWordsReq {
  page?: number;
  category?: string;
  keyword?: string;
  isIrregular?: boolean | string;
}

export interface IDeleteWord {
  id: string;
  message: string;
}

export interface ICreateWord {
  en: string;
  ua: string;
  category: WordCategory;
  isIrregular?: boolean;
}

export interface IEditWord extends ICreateWord {
  id: string;
}
