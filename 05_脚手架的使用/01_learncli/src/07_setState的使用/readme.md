### 为什么使用setState？

### setState是同步还是异步的？

- 同步和异步都有，需要看情况。

- 在setTimeout里面是同步的，在addEventListener里面也是同步的

- 普通使用时，生命周期调用，React合成事件中，是异步的

### 多个更新时的情况

### 多个state的合并(数据合并和本身合并)

### react的更新机制
- 该更DOM时，一个一个更新开销太大

- diff算法

  - 比较同层间的节点
  - 不同类型的节点，产生不同的树结构。div->span直接挂载span树不会管div下面的了
  - 属性不同时只会改属性
  - key的优化：
    - 插入数据时使用
    - 用index作为key是没有优化的，一般使用id/item
    - diff新旧DOM进行比较时，没有key就会全部删除，全部添加
    - diff算法时，ul li 里面内容一样，但是顺序不一样，就需要用到key便于更新，而不用全部删除全部添加更新

render函数被调用

组件嵌套时，改变祖先组件的state渲染，会引发所有组件的render()非常影响性能。所以需要shouldComponentUpdate（nextProps, nextState）生命周期函数

默认是返回true的，改为false就行，但是不会阻止第一次的渲染

有些属性要更新，有些属性又不需要

- 该方法又是类特有的，function没有
- 每个类里面都写太麻烦了

解决办法，不使用extends Component 使用 pureComponent内部会自动调用shouldComponentUpdate函数

内部：浅层比较

但是函数式组件还是会调用render函数



### memo的使用

是一个函数，参数是一个组件，生成一个新的组件

const Mymemo = memo(函数式组件)

就不会被调用 