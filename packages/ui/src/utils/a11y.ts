export function getSafeId(id: string | undefined, fallback: string) {
  return id ?? fallback;
}

export function getDescribedBy(...ids: Array<string | undefined>) {
  return ids.filter(Boolean).join(' ') || undefined;
}
