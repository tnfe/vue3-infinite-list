export interface IILEvent {
  items: any[];
  offset: number;
  data?: any[] | null;
  start?: number;
  stop?: number;
  total?: number;
  toString(): string;
}

export class ILEvent implements IILEvent {
  items: any[] = [];
  offset: number = 0;
  data: any[] | null = null;
  start: number = 0;
  stop: number = 0;
  total: number = 0;

  toString(): string {
    return `start:${this.start} stop:${this.stop} total:${this.total} offset:${this.offset}`;
  }
}
