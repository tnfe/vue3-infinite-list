English | [简体中文](./README.zh-CN.md)

<div align="center" style="margin-bottom: 30px;">
<img src="https://github.com/tnfe/vue3-infinite-list/blob/main/demo/assets/logo-big.png?raw=true" width="500"/>
</div>

#

> A short and powerful infinite scroll list library for vue, with zero dependencies 💪

- **Tiny & dependency free** – Only 3kb gzipped
- **Render millions of items**, without breaking a sweat
- **Scroll to index** or **set the initial scroll offset**
- **Supports fixed** or **variable** heights/widths
- **Vertical** or **Horizontal** lists


see full examples on this [demo](https://tnfe.github.io/vue3-infinite-list).

## Getting Started

### Using [npm](https://www.npmjs.com/):

```
npm install vue3-infinite-list --save
```

### Using [yarn](https://yarnpkg.com/):

```
yarn add vue3-infinite-list
```

### Import vue Infinite list module into your app module

```js
import InfiniteList from 'vue3-infinite-list';

```

### Wrap Infinite list tag around list items

```html
  <InfiniteList :data="data" :width="'100%'" :height="500" :itemSize="50" :debug="debug" v-slot="{ item, index }">
    <div class="li-con">{{ index + 1 }} : {{ item }}</div>
  </InfiniteList>
```
The default direction is `vertical`

### Basic Usage: Fixed Height, Scroll Vertical(default)

```html
  <InfiniteList :data="data" :width="'100%'" :height="500" :itemSize="50" :debug="debug" v-slot="{ item, index }">
    <div class="li-con">{{ index + 1 }} : {{ item }}</div>
  </InfiniteList>
```
The default direction is `vertical`

### Scroll Direction: Horizontal

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

### Dynamic Height

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
where `getItemSize` is a function with it's signature as : `(i: number): number`, with this you can dynamic set your item height.

### Scroll to Index

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
you can also use prop `scrollToIndex` to scroll to special index。


### Scroll to Index （More fine-grained with Alignment）

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


you can also use prop `scrollToIndex` with `scrollToAlignment` to special how the item align to the container, which has four value: `auto`, `start`, `center`, `end`。

### Scroll to Offset

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


you can also use prop `scrollOffset` to scroll to special offset。


### Dynamic Data is also Support

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

just change the bind `data` dynamic.

### Set overscanCount

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

Number of extra buffer items to render above/below the visible items. Tweaking this can help reduce scroll flickering on certain browsers/devices.
### Prop Types

| Property          | Type               | Required? | Description                                                                                                                                                                                                                                                                                                                                                                                                                           |
| :---------------- | :----------------- | :-------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| width             | Number or String\* | ✓         | Width of List. This property will determine the number of rendered items when scrollDirection is `'horizontal'`.                                                                                                                                                                                                                                                                                                                      |
| height            | Number or String\* | ✓         | Height of List. This property will determine the number of rendered items when scrollDirection is `'vertical'`.                                                                                                                                                                                                                                                                                                                       |
| data              | any[]              | ✓         | The data that builds the templates within the Infinite scroll.                                                                                                                                                                                                                                                                                                                                                                        |
| itemSize          |  `(index: number): number`                  |          | Either a fixed height/width (depending on the scrollDirection), an array containing the heights of all the items in your list, or a function that returns the height of an item given its index: `(index: number): number`                                                                                                                                                                                                            |
| scrollDirection   | String             |           | Whether the list should scroll vertically or horizontally. One of `'vertical'` (default) or `'horizontal'`.                                                                                                                                                                                                                                                                                                                           |
| scrollOffset      | Number             |           | Can be used to control the scroll offset; Also useful for setting an initial scroll offset                                                                                                                                                                                                                                                                                                                                            |
| scrollToIndex     | Number             |           | Item index to scroll to (by forcefully scrolling if necessary)                                                                                                                                                                                                                                                                                                                                                                        |
| scrollToAlignment | String             |           | Used in combination with `scrollToIndex`, this prop controls the alignment of the scrolled to item. One of: `'start'`, `'center'`, `'end'` or `'auto'`. Use `'start'` to always align items to the top of the container and `'end'` to align them bottom. Use `'center`' to align them in the middle of the container. `'auto'` scrolls the least amount possible to ensure that the specified `scrollToIndex` item is fully visible. |
| overscanCount     | Number             |           | Number of extra buffer items to render above/below the visible items. Tweaking this can help reduce scroll flickering on certain browsers/devices.                                                                                                                                                                                                                                                                                    |


_\* Width may only be a string when `scrollDirection` is `'vertical'`. Similarly, Height may only be a string if `scrollDirection` is `'horizontal'`_


## Reporting Issues

Found an issue? Please [report it](https://github.com/tnfe/vue3-infinite-list/issues) along with any relevant details to reproduce it.

## Acknowledgments

This library is transplanted from [react-tiny-virtual-list](https://github.com/clauderic/react-tiny-virtual-list) and [react-virtualized](https://github.com/bvaughn/react-virtualized/).
Thanks for the great works of author [Claudéric Demers](https://twitter.com/clauderic_d) ❤️

## License

is available under the MIT License.
