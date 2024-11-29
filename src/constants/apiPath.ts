export const auth = {
  register: "/users/signup",
  login: "/users/signin",
  logout: "/users/signout",
  current: "/users/current",
};

export const words = {
  getCategories: "/words/categories",
  createNewWord: "/words/create",
  addNewUsersWord: (id: string) => `/words/add/${id}`,
  editWord: (id: string) => `/words/edit/${id}`,
  getAllWords: "/words/all",
  getUsersWords: "/words/own",
  deleteUsersWord: (id: string) => `/words/delete/${id}`,
  getUsersStatistic: "/words/statistics",
  getUsersTasks: "/words/tasks",
  postAnswers: "/words/answers",
};
