const CommonService = {
  generateData(
    min: number = 100000,
    max: number = -1
  ): { title: number; msg: string }[] {
    const data: { title: number; msg: string }[] = [];
    const length = CommonService.random(min, max);

    for (let i: number = 0; i < length; i++) {
      data.push({ title: i, msg: "hello wrold" });
    }
    return data;
  },

  clone(target: any[]): any[] {
    let data = [];
    for (let i = 0; i < target.length; i++) data.push(target[i]);

    return data;
  },

  random(min, max) {
    if (max <= 0) max = min;
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
};

export default CommonService;
