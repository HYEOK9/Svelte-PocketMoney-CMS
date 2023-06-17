export interface IMenu {
  title: string;
  subMenus: {
    title: string;
    link: string;
    description: string;
  }[];
}

export interface IMenus extends Array<IMenu> {}
