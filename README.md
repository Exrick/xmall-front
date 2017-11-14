## XMall-Front
### 基于Vue开发的XMall商城前台页面
- 感谢 [yucccc](https://github.com/yucccc) 的开源 [vue-mall](https://github.com/yucccc/vue-mall) 项目提供前端页面及框架支持
- 重新开发后端接口，实现后台系统管理，后端接口项目请跳转至 [xmall](https://github.com/Exrick/xmall) 项目仓库查看
- 新增与优化
    - 优化页脚、增加商品搜索框组件
    - 优化登录注册界面
    - 新增搜索页面，实现高亮分页搜索
    - 新增捐赠页面，捐赠列表显示
    - 全部商品页面实现分页
    - 优化订单详情，实现查看订单进度，可对订单进行处理
    - 实现生成订单接口、优化地址管理编辑选择
    
    ![](http://oweupqzdv.bkt.clouddn.com/QQ%E6%88%AA%E5%9B%BE20171022183906.jpg "首页")

    ![](http://oweupqzdv.bkt.clouddn.com/QQ%E6%88%AA%E5%9B%BE20171022222841.jpg "页脚")

    ![](http://oweupqzdv.bkt.clouddn.com/QQ%E6%88%AA%E5%9B%BE20171022223650.jpg "搜索框组件")

    ![](http://oweupqzdv.bkt.clouddn.com/QQ%E6%88%AA%E5%9B%BE20171109215656.jpg "搜索结果")

    ![](http://oweupqzdv.bkt.clouddn.com/QQ%E6%88%AA%E5%9B%BE20171022202842.jpg "无搜索结果")

    ![](http://oweupqzdv.bkt.clouddn.com/QQ%E6%88%AA%E5%9B%BE20171022223142.jpg "分页")

    ![](http://oweupqzdv.bkt.clouddn.com/QQ%E6%88%AA%E5%9B%BE20171022190036.jpg "订单详情")

    ![](http://oweupqzdv.bkt.clouddn.com/QQ%E6%88%AA%E5%9B%BE20171022190107.jpg "订单进度")

    ![](http://oweupqzdv.bkt.clouddn.com/QQ%E6%88%AA%E5%9B%BE20171114233321.jpg "登录界面")

### 后端接口项目请跳转至 [xmall](https://github.com/Exrick/xmall) 项目仓库查看
    
### 所用技术

- Vue 2.x
- Vuex
- Vue Router
- [Element UI](http://element.eleme.io/#/zh-CN)
- ES6
- webpack
- axios
- Node.js
- 第三方插件
    - [搜狐畅言评论插件](http://changyan.kuaizhan.com/)

### 本地开发运行部署
- 在 `config/index.js` 中修改你的后端接口地址配置
- 在项目根文件夹下先后执行命令 `npm install` 、 `npm run dev`
- 商城前台端口默认9999 http://localhost:9999