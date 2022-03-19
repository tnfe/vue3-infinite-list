export interface ItemStyle {
  position: "absolute";
  top?: number;
  left: number;
  width: string | number;
  height?: number;
}

export interface StyleCache {
  [id: number]: ItemStyle;
}

export interface ItemInfo {
  index: number;
  style: ItemStyle;
}

export interface RenderedRows {
  startIndex: number;
  stopIndex: number;
}
