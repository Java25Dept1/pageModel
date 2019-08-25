// 采购管理
const commonMenu = {
    path:"",
    name:"purchase",
    component: () => import('@/Index.vue'),
    meta:{
        icon: "",
        title: "采购管理",
        permission:""
    },
    children:[
        // 基本资料
        {
            path: "el-icon-s-grid",
            name:"purchaseBasic",
            meta:{
                icon: "el-icon-s-grid",
                title: "基本资料",
                permission:""
            },
            components:{
                purchaseRequisitionTypeSetting: () => import('../views/Form.vue'),
                purchaseWarehousingTypeSetting: () => import('../views/Form.vue'),
                purchaseOrderTypeSetting: () => import('../views/Form.vue')
            },
            children:[
                {
                    path:"/purchaseRequisitionTypeSetting",
                    name: "purchaseRequisitionTypeSetting",
                    meta: {
                        icon: "el-icon-setting",
                        title: "采购请购类型设定",
                        permission:""
                    }
                },
                {
                    path:"/purchaseWarehousingTypeSetting",
                    name: "purchaseWarehousingTypeSetting",
                    meta: {
                        icon: "el-icon-setting",
                        title: '采购入库类型设定',
                        permission:""
                    }
                },
                {
                    path:"/purchaseOrderTypeSetting",
                    name: "purchaseOrderTypeSetting",
                    meta: {
                        icon: "el-icon-setting",
                        title: '采购订单类型设定',
                        permission:""
                    }
                }
            ]
        },
        // 采购作业
        {
            path: "",
            name:"purchaseOrder",
            meta:{
                icon: "el-icon-edit-outline",
                title: "采购订单",
                permission:""
            },
            components:{
                order: () => import('../views/purchaseMenu/purchaseOrder/Order.vue'),
                purchaseInquiry: () => import('../views/purchaseMenu/purchaseOrder/InquirySheet.vue'),
                purchaseRequisition: () => import('../views/purchaseMenu/purchaseOrder/PurchaseRequisition.vue'),
                purchaseReceipt: () => import('../views/purchaseMenu/purchaseOrder/Warehousing.vue'),
                purchaseReturn: () => import('../views/purchaseMenu/purchaseOrder/ReturnGoods.vue'),
                purchaseInvoice: () => import('../views/purchaseMenu/purchaseOrder/Invoice.vue'),
                orderList: () => import('../views/purchaseMenu/purchaseOrder/OrderList.vue'),
                purchasingList: () => import('../views/purchaseMenu/purchaseOrder/caigou.vue')
            },
            children:[
                {
                    path:"/order",
                    name: "order",
                    meta: {
                        icon: "el-icon-document",
                        title: "采购订单",
                        permission:""
                    },
                    children:[
                        {
                            path:"/orderList",
                            name: "orderList",
                            meta: {
                                icon: "el-icon-document",
                                title: "采购订单详情",
                                permission:""
                            }
                        }
                    ]
                },
                {
                    path:"/purchaseInquiry",
                    name: "purchaseInquiry",
                    meta: {
                        icon: "el-icon-document",
                        title: "采购询价单",
                        permission:""
                    }
                },
                {
                    path:"/purchaseRequisition",
                    name: "purchaseRequisition",
                    meta: {
                        icon: "el-icon-document",
                        title: '采购请购单',
                        permission:""
                    }
                },
                {
                    path:"purchaseReceipt",
                    name: "purchaseReceipt",
                    meta: {
                        icon: "el-icon-document",
                        title: '采购入库单',
                        permission:""
                    }
                },
                {
                    path:"/purchaseReturn",
                    name: "purchaseReturn",
                    meta: {
                        icon: "el-icon-document",
                        title: '采购退货单',
                        permission:""
                    }
                },
                {
                    path:"/purchaseInvoice",
                    name: "purchaseInvoice",
                    meta: {
                        icon: "el-icon-document",
                        title: '采购发票',
                        permission:""
                    }
                },
                {
                    path:"/purchasingList",
                    name: "purchasingList",
                    meta: {
                        icon: "el-icon-tickets",
                        title: "采购排行表",
                        permission:""
                    }
                }
            ]
        },
        {
            path: "",
            name:"shareTheHomework",
            meta:{
                icon: "el-icon-document-copy",
                title: "分摊作业",
                permission:""
            },
            components:{
                procurementAllocationOperation: () => import('../views/purchaseMenu/shareTheHomework/PurchaseShare.vue'),
                purchaseShareDetails: () => import('../views/purchaseMenu/shareTheHomework/PurchaseShareDetails.vue')
            },
            children:[
                {
                    path:"/procurementAllocationOperation",
                    name: "procurementAllocationOperation",
                    meta: {
                        icon: "el-icon-tickets",
                        title: "采购分摊作业",
                        permission:""
                    }
                },
                {
                    path:"/purchaseShareDetails",
                    name: "purchaseShareDetails",
                    meta: {
                        icon: "el-icon-tickets",
                        title: "采购分摊明细表单",
                        permission:""
                    }
                }
            ]
        }
    ]
}

export default commonMenu;