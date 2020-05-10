import {
  Cart, 
  Category, 
  Collect, 
  Goods_detail, 
  Goods_list, 
  Home, 
  NotFound, 
  Order,
  Search,
  User
} from '../views'

const routes = [
  {
    pathname: '/cart',
    component: Cart,
  },
  {
    pathname: '/category',
    component: Category,
  },
  {
    pathname: '/collect',
    component: Collect,
  },
  {
    pathname: '/category',
    component: Category,
  },
  {
    pathname: '/detail',
    component: Goods_detail,
  },
  {
    pathname: '/list/:id',
    component: Goods_list,
  },
  {
    pathname: '/home',
    component: Home,
  },
  {
    pathname: '/404',
    component: NotFound,
  },
  {
    pathname: '/order',
    component: Order,
  },
  {
    pathname: '/search',
    component: Search,
  },
  {
    pathname: '/user',
    component: User,
  },
]

export default routes