/* eslint-disable */
// import { EPageType, EMessage } from "../utils";
// import i18n from "../i18n";

// 图层结构
interface Layer {
  readonly id: string;
  removed: boolean;
  hidden: boolean; // 是否隐藏
  locked: boolean; // 是否锁定
  readonly layers?: ReadonlyArray<Layer>; // 子图层
  remove(): void; // todo：1. remove可以添加是否移除成功的返回值。
}

interface Page {
  readonly id: string;
  readonly layers: ReadonlyArray<Layer>; // 所有子图层 ***
}

interface IMenu {
  checked: boolean;
  text: string;
  id: string; // 唯一
}

interface IClearLayerOption {
  menuList: IMenu[];
  pageType: EPageType;
}

interface IMessage {
  type: string;
  data: IClearLayerOption;
}

enum EPageType {
  currentPage,
  allPage
}

enum EMessage {
  text,
  success,
  fail
}

mockplus.ui.onmessage = (msg?: IMessage) => {
  if (msg?.type === "clear-layer") {
    new ClearLayer(msg.data);
  }
};

class ClearLayer {
  /* todo 
  readonly pages: Page[];
readonly deleteLayerIds: string[] = [];
   使用 readonly 限制 pages ，deleteLayerIds 被修改;
  */
  pages: Page[];
  selectedMenu: string[];
  deleteLayerIds: string[] = [];

  constructor({ menuList, pageType }: IClearLayerOption) {
    this.selectedMenu = menuList.filter((option: IMenu) => option.checked).map((option: IMenu) => option.text);
    /*  
    使用 Array.prototype.reduce 优化，减少一次循环
  this.selectedMenu = menuList.reduce((acc, option) => {
    if (option.checked) {
      acc.push(option.text);
    }
    return acc;
  }, []);
*/

    this.pages = this.setPages(pageType);

    this.clearLayerTree();
  }

  private setPages(pageType: EPageType): Page[] {
    // todo  const pages: Page[] = []; 设置pages数组项为 Page
    const pages: Page[] = [];

    /* 
      使用switch语句替代if-else
    switch (pageType) {  
      case EPageType.currentPage:  
        pages.push(mockplus.currentPage);  
        break;  
      case EPageType.allPage:  
        pages.push(...mockplus.root.pages);  
        break;  
      可以在这里添加其他case来处理其他可能的pageType  
      default:  
   进行默认处理  
        break;  
    }  
    */
    if (pageType == EPageType.currentPage) {
      pages.push(mockplus.currentPage);
    } else if (pageType == EPageType.allPage) {
      pages.push(...mockplus.root.pages);
    }

    return pages;
  }

  private clearLayerTree(): void {
    this.pages.forEach((page: Page) => {
      // page.layers    layers: Layer[]
      this.mapLayerTree(page.layers);
    });

    try {
      // todo   实用 this.deleteLayerIds.length === 0，更加准确的判断条件
      if (!this.deleteLayerIds.length) {
        this.postMessage(i18n("clear.noClearLayerYet"), EMessage.text);
        return;
      }

      this.deleteLayerIds.forEach((id: string) => {
        //  todo  mockplus.findLayerById(id) 可能是null,
        /* 防止null.remove()报错，判断后执行remove（）
        const layer = mockplus.findLayerById(id);
if (layer) {
  layer.remove();
}
        */
        mockplus.findLayerById(id)?.remove();
      });

      this.deleteLayerIds = [];
    } catch (err) {
      this.postMessage(i18n("clear.fail"), EMessage.fail);
      console.error("err", err);
    }

    this.postMessage(i18n("clear.success"), EMessage.success);
    mockplus.commitUndo();
  }

  // layers: Layer[] 改为  (layers: ReadonlyArray<Layer>) 
  private mapLayerTree(layers: Layer[]): void {
    layers.forEach((layer: Layer) => {
      if (layer.layers?.length > 0) {
        this.mapLayerTree(layer.layers);
      }
      this.handleLayers(layer);
    });
  }

  private handleLayers(layer: Layer): void {
    if (this.selectedMenu.includes(i18n("options.hidden")) && layer.hidden) {
      this.deleteLayerIds.push(layer.id);
    }

    if (this.selectedMenu.includes(i18n("options.locked")) && layer.locked) {
      this.deleteLayerIds.push(layer.id);
    }
    // 合并上面两个if判断
    // if ((this.selectedMenu.includes(i18n("options.hidden")) && layer.hidden) || (this.selectedMenu.includes(i18n("options.locked")) && layer.locked)) {
    //   this.deleteLayerIds.push(layer.id);
    // }
  }

  private postMessage(text: string, type: EMessage): void {
    /* 省略代码*/
  }
}
