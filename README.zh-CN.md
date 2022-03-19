简体中文 | [English](./README.md)

<div align="center" style="margin-bottom: 30px;">
<img src="https://github.com/tnfe/vue-infinite-list/blob/main/demo/assets/logo-big.png?raw=true" width="500"/>
</div>

#

> 一个适用于vue的短小精悍的无限滚动加载库，零依赖💪

- **体积小 & 零依赖** – gzipped 后只有 3kb
- **百万级列表渲染**, 不费吹灰之力
- **支持滚动到指定条目** 或 **指定初始滚动偏移量**
- **支持固定** 或 **可变** 宽/高
- **垂直** or **水平** 列表

可以从这个在线[Demo](https://tnfe.github.io/vue-infinite-list)查看更多示例。

## 起步

### 使用 [npm](https://www.npmjs.com/):

```
npm install vue-infinite-list --save
```

### 使用 [yarn](https://yarnpkg.com/):

```
yarn add vue-infinite-list --save
```

### 在应用模块内引入无限滚动组件

```js
import { InfiniteListModule } from 'vue-infinite-list';

```

### 用无限滚动组件标签包裹待滚动数据列表

```html
  <InfiniteList :data="data" :width="'100%'" :height="500" :itemSize="50" :debug="debug" v-slot="{ item, index }">
    <div class="li-con">{{ index + 1 }} : {{ item }}</div>
  </InfiniteList>
```

### 基本用法: 固定高度, 垂直滚动(默认)

```html
  <InfiniteList :data="data" :width="'100%'" :height="500" :itemSize="50" :debug="debug" v-slot="{ item, index }">
    <div class="li-con">{{ index + 1 }} : {{ item }}</div>
  </InfiniteList>
```
默认滚动方向是垂直方向（`vertical`）

### 滚动方向: 水平

```html
  <InfiniteList
    :data="data"
    :width="900"
    :height="220"
    :itemSize="115"
    scrollDirection="horizontal"
    :debug="debug"
    v-slot="{ item, index }"
  >
    <div class="li-con li-con-r">
      item{{ index }} <br />
      xxxxxxx <br />
      xxxxxxx <br />
      <el-button type="primary" round>Primary</el-button>
    </div>
  </InfiniteList>
```

### 动态高度

```html

  <InfiniteList
    :data="data"
    :width="'100%'"
    :height="520"
    :itemSize="getItemSize"
    :debug="debug"
    v-slot="{ item, index }"
  >
    <div class="li-con">item {{ index }} : {{ item }}</div>
  </InfiniteList>

```
这里 `getItemSize` 是一个有如下语法的函数 : `(i: number): number`, 通过这个函数可以动态设置元素宽高.

### 滚动到指定元素

```html
  <InfiniteList
    :data="data"
    :width="'100%'"
    :height="500"
    :itemSize="getItemSize"
    :scrollToIndex="scrollToIndex"
    :debug="debug"
    v-slot="{ item, index }"
  >
    <div class="li-con" :class="getClass(index)">item{{ index + 1 }} : {{ item }}</div>
  </InfiniteList>

```
你也可以使用 `scrollToIndex` 来滚动到指定元素。


### 滚动到指定元素 （更精细的对齐方式）

```html
   <InfiniteList
      :data="data"
      :width="'100%'"
      :height="500"
      :itemSize="getItemSize"
      :scrollToIndex="scrollToIndex"
      :scrollToAlignment="scrollToAlignment"
      :debug="debug"
      v-slot="{ item, index }"
    >
      <div class="li-con" :class="getClass(index)">item{{ index + 1 }} : {{ item }}</div>
    </InfiniteList>
```


你可以使用 `scrollToIndex` 和 `scrollToAlignment` 属性来指定滚动元素如何与滚动区域对齐, 由四个选项: `auto`, `start`, `center`, `end`，分别对应自动对齐、位于容器起始，位于容器中间，位于容器末尾。

### 滚动到指定位置，单位是px

```html
   <InfiniteList
    :data="data"
    :width="'100%'"
    :height="500"
    :itemSize="90"
    :scrollOffset="scrollOffset"
    :debug="debug"
    v-slot="{ item, index }"
  >
    <el-row class="mb-4 li-con">
      <el-col :span="8">index: {{ index + 1 }} </el-col>
      <el-col :span="8">xxxxxxxxxx</el-col>
      <el-col :span="8">
        <el-button type="primary">Primary</el-button> <el-button type="success">Success</el-button></el-col
      >
    </el-row>
  </InfiniteList>
```


你也可以使用 `scrollOffset` 来滚动到指定位置。


### 支持动态数据

```html

  <InfiniteList :data="data" :width="'100%'" :height="500" :itemSize="60" :debug="debug" v-slot="{ item, index }">
    <el-row class="li-con">
      <el-col :span="6">item{{ index + 1 }}</el-col>
      <el-col :span="6">2022-05-01</el-col>
      <el-col :span="6">Name: Tom</el-col>
      <el-col :span="6">
        <el-button type="primary">Button</el-button>
        <el-button type="success">Button</el-button>
      </el-col>
    </el-row>
  </InfiniteList>

```

只需要动态的改变绑定的 `data`.

### 设置额外渲染元素的数量

```html 

    <InfiniteList :data="data" :width="'100%'" :height="500" :itemSize="60" :debug="debug" v-slot="{ item, index }" :overscanCount="2">
      <el-row class="li-con">
        <el-col :span="6">item{{ index + 1 }}</el-col>
        <el-col :span="6">2022-05-01</el-col>
        <el-col :span="6">Name: Tom</el-col>
        <el-col :span="6">
          <el-button type="primary">Button</el-button>
          <el-button type="success">Button</el-button>
        </el-col>
      </el-row>
    </InfiniteList>

```

在可见的item上/下再各多渲染额外的overscanCount个item。调整它可以帮助减少某些浏览器/设备上的滚动闪烁。
### 支持的属性和类型

| 属性          | 类型               | 是否必须? | 描述                                                                                                                                                                                                                                                                                                                                                                                                                           |
| :---------------- | :----------------- | :-------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| width             | Number or String\* | ✓         | 列表宽度. 在滚动方向是 `'horizontal'`是用于确定滚动元素个数.                                                                                                                                                                                                                                                                                                                      |
| height            | Number or String\* | ✓         | 列表宽度. 在滚动方向是 `'vertical'`是用于确定滚动元素个数.                                                                                                                                                                                                                                                                                                                |
| data              | any[]              | ✓         | 构建滚动元素的数据                                                                                                                                                                                                                                                                                                                                                                       |
| itemSize          |  `(index: number): number`                  |          | 可以是一个固定的宽/高（取决于滚动方向）, 一个包含列表所有元素的数组, 或者是返回指定位置元素高度的函数: `(index: number): number`                                                                                                                                                                                                            |
| scrollDirection   | String             |           | 指定滚动方向 `'vertical'` (默认) 或 `'horizontal'`.                                                                                                                                                                                                                                                                                                                           |
| scrollOffset      | Number             |           | 可以指定滚动位置                                                                                                                                                                                                                                                                                                                       |
| scrollToIndex     | Number             |           | 可以指定到滚动到哪个元素                                                                                                                                                                                                                                                                                                                                                                |
| scrollToAlignment | String             |           | 结合 `scrollToIndex`一起用, 用于控制滚动到的元素的对齐方式. 可选: `'start'`, `'center'`, `'end'` or `'auto'`. 使用 `'start'` 将对齐到容器的起始位置， `'end'` 则对齐到元素的结尾. 使用 `'center`可以对齐到容器正中间. `'auto'` 则是滚动到`scrollToIndex`指定元素恰好完全可见的位置 |
| overscanCount     | Number             |           | 在可见元素上/下额外渲染的元素数量. 这可以减少在特定浏览器/设备上的闪烁                                                                                                                                                                                                                                                                       |


_\* width 在 `scrollDirection` 是 `'vertical'`时只能是string类型. 类似的, Height 在 `scrollDirection` 是 `'horizontal'`时也只能是string类型_


## 反馈问题

找到bug了? 请在此 [report it](https://github.com/tnfe/vue-infinite-list/issues) 提报，可以详细描述任何有用的信息.

## 致谢

这个库是从 [react-tiny-virtual-list](https://github.com/clauderic/react-tiny-virtual-list) 以及 [react-virtualized](https://github.com/bvaughn/react-virtualized/) 移植过来的.
感谢作者 [Claudéric Demers](https://twitter.com/clauderic_d)的伟大工作 ❤️

## 许可证

MIT.
