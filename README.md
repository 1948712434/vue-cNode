# vue-cNode

该项目是一个仿制CNode社区网站实例。

网站演示链接：https://1948712434.github.io/vue-cNode/

这是一个为了熟练运用这段时间所学的vuejs渐进式框架，该项目运用到了vue单文件组件，vue-router和vue-resource插件，vue-cli脚手架，以及element-ui框架；在页面布局方面主要是用了flex布局；再利用vueresource插件进行异步获取后台数据，在vue单文件组件中传输id获取详情页面，分页器是利用element-ui框架引入的。

## 技术栈

[vueJS]()

[vue-router]()

[vue-resource]()

[vue-cli]()

[element-ui]()

## 总结

1、使用vue框架必须要弄懂框架的原理以及使用方法和步骤；

2、使用vue的单文件组件要注意导入的方式，用es6的export和import命令；

3、vue-resource异步获取后台数据的方式有get和post，与ajax获取后台数据的方式相似；

4、在利用vue的嵌套组件就得在vue-router中设置子路由；

5、利用id进入详情页要在<router-link>组件中的to属性设置为一个对象{}，对象中有name和params属性，name的属性值为详情页的路由路径，parmas的属性值为{id：123456}，（例如<router-link to = '{name:"/detials" , parmas = { id:123456 }'>）,那么在详情页中使用this.router.parmas.id获取到传过来的id。

6、布局是利用flex进行布局，虽然支持IE10+，但是未来还是很重要的一种布局方式；

7、element-ui框架的使用快速构建网站。
