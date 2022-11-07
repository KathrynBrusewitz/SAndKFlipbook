export const Solutions = ["MATCH", "PHONE", "TACOS", "LATTE", "WORLD", "MARRY"];
export const PageStorageKey = "page";

export const saveGameStorage = (key: string, guesses: string[]) => {
  localStorage.setItem(key, JSON.stringify(guesses));
};

export const loadGameStorage = (key: string) => {
  const state = localStorage.getItem(key);
  return state ? (JSON.parse(state) as string[]) : null;
};

export const resetGameStorage = () => {
  localStorage.clear();
};

export const gameStateExistsStorage: boolean = Solutions.map((solution) =>
  localStorage.getItem(solution)
).some((game) => game !== null);

export const saveCurrentPage = (pageIndex: number) => {
  localStorage.setItem(PageStorageKey, JSON.stringify(pageIndex));
};
