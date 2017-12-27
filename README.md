## XMall-Front
### 基于Vue开发的XMall商城前台页面
### 项目已部署，在线Demo
- 前台商城：http://xmall.exrick.cn/
- 后台管理系统：http://xmadmin.exrick.cn/
- 第一次打开可能较慢，请耐心等待
### 感谢 [yucccc](https://github.com/yucccc) 的开源 [vue-mall](https://github.com/yucccc/vue-mall) 项目提供前端页面及框架支持
### 后端全部重新开发接口，实现后台系统管理，后端接口项目请跳转至 [xmall](https://github.com/Exrick/xmall) 项目仓库查看
### 新增与优化
- 优化页脚、增加商品搜索框组件
- 优化登录注册界面
- 新增搜索页面，实现高亮分页搜索
- 新增捐赠页面，捐赠列表显示
- 全部商品页面实现分页
- 优化订单详情，实现查看订单进度，可对订单进行处理
- 实现生成订单接口、优化地址管理编辑选择
- 实现查看个人订单分页
- 接入 XPay 个人收款支付系统
    
![](http://oweupqzdv.bkt.clouddn.com/QQ%E6%88%AA%E5%9B%BE20171022183906.jpg "首页")

![](http://oweupqzdv.bkt.clouddn.com/QQ%E6%88%AA%E5%9B%BE20171022222841.jpg "页脚")

![](http://oweupqzdv.bkt.clouddn.com/QQ%E6%88%AA%E5%9B%BE20171022223650.jpg "搜索框组件")

![](http://oweupqzdv.bkt.clouddn.com/QQ%E6%88%AA%E5%9B%BE20171109215656.jpg "搜索结果")

![](http://oweupqzdv.bkt.clouddn.com/QQ%E6%88%AA%E5%9B%BE20171022202842.jpg "无搜索结果")

![](http://oweupqzdv.bkt.clouddn.com/QQ%E6%88%AA%E5%9B%BE20171022223142.jpg "分页")

![](http://oweupqzdv.bkt.clouddn.com/QQ%E6%88%AA%E5%9B%BE20171022190036.jpg "订单详情")

![](http://oweupqzdv.bkt.clouddn.com/QQ%E6%88%AA%E5%9B%BE20171022190107.jpg "订单进度")

![](http://oweupqzdv.bkt.clouddn.com/QQ%E6%88%AA%E5%9B%BE20171114233321.jpg "登录界面")
    
### 所用技术

- Vue 2.x
- Vuex
- Vue Router
- [Element UI](http://element.eleme.io/#/zh-CN)
- ES6
- webpack
- axios
- Node.js
- 第三方SDK
    - [极验Test-button人机验证码](http://www.geetest.com/Test-button.html)
- 第三方插件
    - [hotjar](https://github.com/Exrick/xmall/blob/master/study/hotjar.md)：一体化分析和反馈
    - [搜狐畅言评论插件](http://changyan.kuaizhan.com/)

### 本地开发运行部署
- 启动后端 [xmall](https://github.com/Exrick/xmall) 项目后，在 `config/index.js` 中修改你的后端接口地址配置
- 在 `src/api/goods.js` 中的 `getQuickSearch` 方法里修改你的Elasticseach服务器IP以及RESTful快速查询提示接口配置
- `index.html` 中复制粘贴替换你的 [hotjar](https://github.com/Exrick/xmall/blob/master/study/hotjar.md) 代码
- 若不启动后端项目，预览运行此前端项目可注释掉 `src/main.js` 中第 `8、10、35-57` 行代码即可
- 在项目根文件夹下先后执行命令 `npm install` 、 `npm run dev`
- 商城前台端口默认9999 http://localhost:9999
### 技术疑问交流
- 给作者项目Star或捐赠后可加入交流群 `475743731`，还可免费获取最新源码和 [UI框架](https://github.com/Exrick/xmall/blob/master/study/FlatLab.md) [![](http://pub.idqqimg.com/wpa/images/group.png)](http://shang.qq.com/wpa/qunwpa?idkey=7b60cec12ba93ebed7568b0a63f22e6e034c0d1df33125ac43ed753342ec6ce7)
- 个人博客：[http://blog.exrick.cn](http://blog.exrick.cn)
### 捐赠
![](http://oweupqzdv.bkt.clouddn.com/FgwHSk1Rnd-8FKqNJhFSSdcq2QVB.png)