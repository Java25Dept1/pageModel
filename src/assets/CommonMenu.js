// 共用资料
const commonMenu = {
    path: "el-icon-s-grid",
    name: "common",
    component: () => import('@/Index.vue'),
    meta: {
        icon: "",
        title: "公共资料",
        permission: ""
    },
    children: [
        // 基本资料
        {
            path: "",
            name: "commonBasic",
            meta: {
                icon: "el-icon-s-grid",
                title: "基本资料",
                permission: ""
            },
            components:{
                dept: () => import('../views/commonMenu/basic/Department.vue'),
                // program: () => import('../views/Form1.vue'),
                // area: () => import('../views/Form2.vue'),
                // tax: () => import('../views/Form.vue'),
                // invoice: () => import('../views/Form.vue'),
                people: () => import('../views/commonMenu/basic/Personnel.vue')
            },
            children: [
                {
                    path: "/dept",
                    name: "dept",
                    meta: {
                        icon: "el-icon-setting",
                        title: "部门设定",
                        permission: ""
                    }
                },
                {
                    path: "/program",
                    name: "program",
                    meta: {
                        icon: "el-icon-setting",
                        title: '项目设定',
                        permission: ""
                    }
                },
                {
                    path: "/area",
                    name: "area",
                    meta: {
                        icon: "el-icon-setting",
                        title: '地区设定',
                        permission: ""
                    }
                },
                {
                    path: "/tax",
                    name: "tax",
                    meta: {
                        icon: "el-icon-setting",
                        title: '税目设定',
                        permission: ""
                    }
                },
                {
                    path: "/invoice",
                    name: "invoice",
                    meta: {
                        icon: "el-icon-setting",
                        title: '发票类型设定',
                        permission: ""
                    }
                },
                {
                    path: "/people",
                    name: "people",
                    meta: {
                        icon: "el-icon-setting",
                        title: '人员主文件设定',
                        permission: ""
                    }
                }
            ]
        },
        // 物料资料
        {
            path: "",
            name: "material",
            meta: {
                icon: "el-icon-box",
                title: "物料资料",
                permission: ""
            },
            components:{
                warehouse: () => import('../views/commonMenu/material/Warehouse.vue'),
                materialType: () => import('../views/commonMenu/material/Materialclass.vue'),
                unit: () => import('../views/commonMenu/material/Measure.vue'),
                materiaMaster: () => import('../views/commonMenu/material/Material.vue')
            },
            children: [
                {
                    path: "/warehouse",
                    name: "warehouse",
                    meta: {
                        icon: "el-icon-house",
                        title: "仓库设定",
                        permission: ""
                    }
                }, 
                {
                    path: "/materialType",
                    name: "materialType",
                    meta: {
                        icon: "el-icon-goods",
                        title: '物料类别设定',
                        permission: ""
                    }
                },
                {
                    path: "/unit",
                    name: "unit",
                    meta: {
                        icon: "el-icon-setting",
                        title: '计量单位设定',
                        permission: ""
                    }
                },
                {
                    path: "/materiaMaster",
                    icon: "",
                    name: "materiaMaster",
                    meta: {
                        icon: "el-icon-setting",
                        title: '物料主文件设定',
                        permission: ""
                    }
                }
            ]
        },
        {
            path: "",
            name: "contact",
            meta: {
                icon: "el-icon-folder-opened",
                title: "往来资料",
                permission: ""
            },
            components:{
                customerType: () => import('../views/commonMenu/contact/Clientclass.vue'),
                prospectiveCustomer: () => import('../views/Form.vue'),
                customerMaster: () => import('../views/commonMenu/contact/Client.vue'),
                prospectiveToMaster: () => import('../views/Form.vue'),
                supplierType: () => import('../views/commonMenu/contact/Supplierclass.vue'),
                supplierMaster: () => import('../views/commonMenu/contact/Supplier.vue')
            },
            children: [
                {
                    path: "/customerType",
                    name: "customerType",
                    meta: {
                        icon: "el-icon-s-custom",
                        title: "客户类别设定",
                        permission: ""
                    }
                },
                {
                    path: "/prospectiveCustomer",
                    name: "prospectiveCustomer",
                    meta: {
                        icon: "el-icon-s-custom",
                        title: '潜在客户主文件设定',
                        permission: ""
                    }
                },
                {
                    path: "/customerMaster",
                    name: "customerMaster",
                    meta: {
                        icon: "el-icon-s-custom",
                        title: '客户主文件设定',
                        permission: ""
                    }
                },
                {
                    path: "/prospectiveToMaster",
                    name: "prospectiveToMaster",
                    meta: {
                        icon: "el-icon-s-custom",
                        title: '潜在客户转正式客户',
                        permission: ""
                    }
                },
                {
                    path: "/supplierType",
                    name: "supplierType",
                    meta: {
                        icon: "el-icon-s-custom",
                        title: '供应商类别设定',
                        permission: ""
                    }
                },
                {
                    path: "/supplierMaster",
                    name: "supplierMaster",
                    meta: {
                        icon: "el-icon-s-custom",
                        title: '供应商主文件设定',
                        permission: ""
                    }
                }
            ]
        },
        {
            path: "",
            name: "subject",
            meta: {
                icon: "el-icon-s-operation",
                title: "科目资料",
                permission: ""
            },
            components:{
                subjectAll: () => import('../views/Form.vue'),
                subjectType: () => import('../views/Form.vue')
            },
            children: [
                {
                    path: "/subjectAll",
                    name: "subjectAll",
                    meta: {
                        icon: "el-icon-setting",
                        title: "科目总类设定",
                        permission: ""
                    }
                },
                {
                    path: "/subjectType",
                    name: "subjectType",
                    meta: {
                        icon: "el-icon-setting",
                        title: '项目类别设定',
                        permission: ""
                    }
                }
            ]
        }
    ]
}

export default commonMenu;