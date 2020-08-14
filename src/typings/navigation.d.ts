interface IQuery {
    fromScreen: string;
    settleId: string;
  }
  interface IContent {
    module: string;
    query: IQuery;
    nav_hide: boolean;
  }
  interface IProps {
    content: IContent;
    protocolUri: string;
    rootTag: number;
    onRef: object;
  }
  
  interface IParams {
    params: {
      [x: string]: any;
    };
    routeName: string;
  }
  
  declare class Navigation {
    state: IParams;
    getParam(key?: string): object;
    setParams(params: object): void;
    initialParams(props: IProps): object;
    navigate(routerName: string, params?: object | null, platform?: string): void;
    replace(routerName: string, params?: object, platform?: string): void;
    goBack(): void;
    pop(n?: number, animate?: boolean): void;
    popToTop(): void;
    getStackLength(): Promise<any[]>;
    getStacks(): Promise<any[]>;
    backToRouter(routerName: string, params?: object, platform?: string, animate?: boolean): Promise<void>;
    backToRouteByUri(routerUri: string): Promise<void>;
    getLastestStackIndex(routerName: string, platform?: string): Promise<number>;
    getLastestStack(): Promise<any>;
    getCurrentRouterName(): string;
  }
  export default Navigation;