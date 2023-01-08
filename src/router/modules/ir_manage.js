import Layout from '@/layout'

const IrRouter = {
  path: '/ir',
  component: Layout,
  redirect: 'noRedirect',
  name: 'ir',
  meta: {
    title: '피해지원현황',
    icon: 'table'
  },
  children: [
    {
      path: 'IR',
      component: () => import('@/views/charts/keyboard'),
      name: 'IR',
      meta: { title: '전체보기', noCache: true }
    },
    {
      path: 'IR01',
      //component: () => import('@/views/charts/line'),
      component: () => import('@/views/IR/index'),
      name: 'IR01',
      meta: { title: 'IR01', noCache: true }
    },
    {
      path: 'IR02',
      component: () => import('@/views/charts/mix-chart'),
      name: 'IR02',
      meta: { title: 'IR02', noCache: true }
    }
  ]
}

export default IrRouter 
