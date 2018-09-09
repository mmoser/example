export interface INavigationItem {
  link: string,
  name: string,
  icon: string,
  children: Array<INavigationItem>
}
