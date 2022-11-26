declare module "lodash" {
  function head<T>(arr: T[]): T | undefined;
  function hasIn(obj: object, key: string): boolean;
  function isBoolean<T>(value: T): boolean;
  function toString<T>(value: T | T[]): string;

  function split(string: string, separator: string, limit?: number): string[];
  function hasPath(Obj: object, path: string[] | string): boolean;
  function filter<T>(arr: T[], Fn: Function): T;
  function every<T>(arr: T[], Fn: Function): boolean;
  function map<T>(arr: T[], Fn: Function): T[];
}
