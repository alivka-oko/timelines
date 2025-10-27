type connectGroupsType = Record<string, number>;

const connectGroups: connectGroupsType = {};

export function useActiveId(connectName: string) {
  if (connectGroups[connectName]) {
    return connectGroups[connectName];
  }
}
