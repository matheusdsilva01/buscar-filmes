import { IFilmDetails } from "../interfaces/Film";

export default function recentsReducer(
  state: any,
  action: { type: any; payload: any }
) {
  switch (action.type) {
    case "ADD": {
      const data = localStorage.getItem("recents");
      const oldData = data ? JSON.parse(data) : [];
      const newData = [
        ...oldData,
        oldData.filter((el: IFilmDetails) => el.id === action.payload.id)
          .length > 0
          ? null
          : { ...action.payload },
      ];
      localStorage.setItem("recents", JSON.stringify(newData.filter(Boolean)));

      return [...newData.filter(Boolean)];
    }
    default:
      return state;
  }
}
