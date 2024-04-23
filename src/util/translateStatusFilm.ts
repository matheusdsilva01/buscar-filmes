const statusEn = [
  "Rumored",
  "Planned",
  "In Production",
  "Post Production",
  "Released",
  "Canceled"
];

const statusPt = [
  "Rumores",
  "Planejado",
  "Em produção",
  "Pós-produção",
  "Lançado",
  "Cancelado"
];

export function translateStatusEnToPt(status: undefined | string) {
  if (!status) return null;
  const original = statusEn.filter(en => en === status).toString();
  const positionIntoEn = statusEn.indexOf(original);
  return statusPt[positionIntoEn];
}
