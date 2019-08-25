// 账款管理
const commonMenu = {
    path:"",
    name:"credit",
    component: () => import('@/Index.vue'),
    meta:{
        icon: "",
        title: "账款管理",
        permission:""
    },
    children:[
        // 冲款作业
        {
            path: "",
            name:"newWashingOperation",
            meta:{
                icon: "el-icon-s-claim",
                title: "冲款作业",
                permission:""
            },
            components:{
                advancePayments: () => import('../views/creditMenu/newWashingOperation/AdvanceCollection.vue'),
                collectAndChargeInAdvance: () => import('../views/creditMenu/newWashingOperation/AdvancechargeCollection.vue'),
                // accountsReceivableChargeSheet: () => import('../views/creditMenu/newWashingOperation/Collectionadvances.vue'),
                advanceCharge: () => import('../views/creditMenu/newWashingOperation/Advancecharge.vue'),
                advanceChargePayable: () => import('../views/creditMenu/newWashingOperation/AdvancechargePayment.vue')
                // payThePaymentSlip: () => import('../views/creditMenu/newWashingOperation/Paymentadvances.vue')
            },
            children:[
                {
                    path:"/advancePayments",
                    name: "advancePayments",
                    meta: {
                        icon: "el-icon-upload2",
                        title: '预收款',
                        permission:""
                    }
                },
                {
                    path:"/collectAndChargeInAdvance",
                    name: "collectAndChargeInAdvance",
                    meta: {
                        icon: "el-icon-upload2",
                        title: '应收冲款单',
                        permission:""
                    }
                },
                // {
                //     path:"/accountsReceivableChargeSheet",
                //     name: "accountsReceivableChargeSheet",
                //     meta: {
                //         icon: "el-icon-download",
                //         title: "应收冲款单",
                //         permission:""
                //     }
                // },
                {
                    path:"/advanceCharge",
                    name: "advanceCharge",
                    meta: {
                        icon: "el-icon-upload2",
                        title: '预付款',
                        permission:""
                    }
                },
                {
                    path:"/advanceChargePayable",
                    name: "advanceChargePayable",
                    meta: {
                        icon: "el-icon-upload2",
                        title: '应付冲款单',
                        permission:""
                    }
                }
                // {
                //     path:"/payThePaymentSlip",
                //     name: "payThePaymentSlip",
                //     meta: {
                //         icon: "el-icon-upload2",
                //         title: '应付冲款单',
                //         permission:""
                //     }
                // }
            ]
        },
        // 其他应收付作业
        {
            path: "",
            name:"otherCollectAndPayOperations",
            meta:{
                icon: "el-icon-finished",
                title: "其他应收付作业",
                permission:""
            },
            components:{
                otherReceivables: () => import('../views/Form.vue'),
                otherNotesPayable: () => import('../views/Form.vue')
            },
            children:[
                {
                    path:"/otherReceivables",
                    name: "otherReceivables",
                    meta: {
                        icon: "el-icon-bottom",
                        title: "其他应收单",
                        permission:""
                    }
                },
                {
                    path:"/otherNotesPayable",
                    name: "otherNotesPayable",
                    meta: {
                        icon: "el-icon-top",
                        title: '其他应付单',
                        permission:""
                    }
                }
            ]
        },
        // 账款报表
        {
            path: "",
            name:"accountStatements",
            meta:{
                icon: "el-icon-finished",
                title: "账款报表",
                permission:""
            },
            components:{
                collectionAgingtheAccounts: () => import('../views/creditMenu/accountStatements/CollectionAgingtheAccounts.vue'),
                collectionDetails: () => import('../views/creditMenu/accountStatements/CollectionDetails.vue'),
                paymentAgingtheAccounts: () => import('../views/creditMenu/accountStatements/PaymentAgingtheAccounts.vue'),
                paymentDetails: () => import('../views/creditMenu/accountStatements/PaymentDetails.vue')
            },
            children:[
                {
                    path:"/collectionAgingtheAccounts",
                    name: "collectionAgingtheAccounts",
                    meta: {
                        icon: "el-icon-bottom",
                        title: "应收款帐龄分析表",
                        permission:""
                    }
                },
                {
                    path:"/collectionDetails",
                    name: "collectionDetails",
                    meta: {
                        icon: "el-icon-top",
                        title: '客户应收款明细表',
                        permission:""
                    }
                },
                {
                    path:"/paymentAgingtheAccounts",
                    name: "paymentAgingtheAccounts",
                    meta: {
                        icon: "el-icon-bottom",
                        title: "应付款帐龄分析表",
                        permission:""
                    }
                },
                {
                    path:"/paymentDetails",
                    name: "paymentDetails",
                    meta: {
                        icon: "el-icon-bottom",
                        title: "供应商应付款明细表",
                        permission:""
                    }
                }
            ]
        }
    ]
}

export default commonMenu;