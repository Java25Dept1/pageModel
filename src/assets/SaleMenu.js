// 销售管理
const saleMenu = {
    path:"",
    name:"sale",
    component: () => import('@/Index.vue'),
    meta:{
        icon: "",
        title: "销售管理",
        permission:""
    },
    children:[
        // 基本资料
        {
            path: "",
            name:"saleBasic",
            meta:{
                icon: "el-icon-s-grid",
                title: "基本资料",
                permission:""
            },
            components:{
                salesOrderTypeSetting: () => import('../views/Form.vue'),
                settingOfSalesOutboundType: () => import('../views/Form.vue')
            },
            children:[
                {
                    path:"/salesOrderTypeSetting",
                    name: "salesOrderTypeSetting",
                    meta: {
                        icon: "el-icon-setting",
                        title: "销售订单类型设定",
                        permission:""
                    }
                },
                {
                    path:"/settingOfSalesOutboundType",
                    name: "settingOfSalesOutboundType",
                    meta: {
                        icon: "el-icon-setting",
                        title: '销售出库类型设定',
                        permission:""
                    }
                }
            ]
        },
        // 销售作业
        {
            path: "",
            name:"salesJob",
            meta:{
                icon: "el-icon-upload2",
                title: "销售作业",
                permission:""
            },
            components:{
                salesQuotation: () => import('../views/saleMenu/salesJob/Salesprice.vue'),
                saleOrder: () => import('../views/saleMenu/salesJob/Salesorder.vue'),
                salesReleaseOrder: () => import('../views/saleMenu/salesJob/chuku.vue'),
                salesReturn: () => import('../views/saleMenu/salesJob/tuihuo.vue'),
                saleInvoice: () => import('../views/saleMenu/salesJob/fapiao.vue'),
                salesRanking: () => import('../views/saleMenu/salesJob/xiaoshou.vue')
            },
            children:[
                {
                    path:"/salesQuotation",
                    name: "salesQuotation",
                    meta: {
                        icon: "el-icon-s-order",
                        title: "销售报价单",
                        permission:""
                    }
                },
                {
                    path:"/saleOrder",
                    name: "saleOrder",
                    meta: {
                        icon: "el-icon-s-order",
                        title: '销售订单',
                        permission:""
                    }
                },
                {
                    path:"salesReleaseOrder",
                    name: "salesReleaseOrder",
                    meta: {
                        icon: "el-icon-s-order",
                        title: '销售出库单',
                        permission:""
                    }
                },
                {
                    path:"/salesReturn",
                    name: "salesReturn",
                    meta: {
                        icon: "el-icon-s-order",
                        title: '销售退货单',
                        permission:""
                    }
                },
                {
                    path:"/saleInvoice",
                    name: "saleInvoice",
                    meta: {
                        icon: "el-icon-s-order",
                        title: '销售发票',
                        permission:""
                    }
                },
                {
                    path:"/salesRanking",
                    name: "salesRanking",
                    meta: {
                        icon: "el-icon-tickets",
                        title: "销售排行表",
                        permission:""
                    }
                }
            ]
        },
        {
            path: "",
            name:"goldInterface",
            meta:{
                icon: "el-icon-paperclip",
                title: "金税接口",
                permission:""
            },
            components:{
                exportOfSalesInvoice: () => import('../views/Form.vue')
            },
            children:[
                {
                    path:"/exportOfSalesInvoice",
                    name: "exportOfSalesInvoice",
                    meta: {
                        icon: "el-icon-printer",
                        title: "销售发票导出",
                        permission:""
                    }
                }
            ]
        }
    ]
}

export default saleMenu;