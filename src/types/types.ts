export type route = {
  routeType: string | null;
  routes:
    | {
        label: string;
        url: string;
      }[]
    | null;
};
