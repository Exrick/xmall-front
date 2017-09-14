import http from './public'
// 电脑列表
export const getComputer = (params) => {
  return http.fetchGet('/goods/computer', params)
}
// 获取购物车列表
export const getCartList = (params) => {
  return http.fetchPost('/users/cartList', params)
}
// 加入购物车
export const addCart = (params) => {
  return http.fetchPost('/goods/addCart', params)
}
// 加入购物车
export const addCart1 = (params) => {
  return http.fetchPost('/goods/addCart1', params)
}
// 删除购物车
export const delCart = (params) => {
  return http.fetchPost('/goods/delCart', params)
}
// 编辑购物车
export const cartEdit = (params) => {
  return http.fetchPost('/users/cartEdit', params)
}
// 全选
export const editCheckAll = (params) => {
  return http.fetchPost('/users/editCheckAll', params)
}
// 删除整条购物车
export const cartDel = (params) => {
  return http.fetchPost('/users/cartDel', params)
}
// 获取用户地址
export const addressList = (params) => {
  return http.fetchPost('/users/addressList', params)
}
// 修改收货地址
export const addressUpdate = (params) => {
  return http.fetchPost('/users/addressUpdate', params)
}
// 添加收货地址
export const addressAdd = (params) => {
  return http.fetchPost('/users/addressAdd', params)
}
// 删除收货地址
export const addressDel = (params) => {
  return http.fetchPost('/users/addressDel', params)
}
// 支付
export const payMent = (params) => {
  return http.fetchPost('/users/payMent', params)
}
// 订单
export const orderList = (params) => {
  return http.fetchPost('/users/orderList', params)
}
// 商品详情
export const productDet = (params) => {
  return http.fetchGet('/goods/productDet', params)
}
// 删除订单
export const delOrder = (params) => {
  return http.fetchPost('/users/delOrder', params)
}
