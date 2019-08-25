import Vue from 'vue'
import Router from 'vue-router'
import Login from './Login.vue'
import Index from './Index.vue'
import commonMenu from './assets/CommonMenu.js'
import saleMenu from './assets/SaleMenu.js'
import inventoryMenu from './assets/InventoryMenu.js'
import creditMenu from './assets/CreditMenu.js'
import purchaseMenu from './assets/PurchaseMenu.js'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/index',
      name: 'index',
      component: Index,
      children: [
        {
          path: "/",
          name: "mm",
          components: {
            default: Index,
            // 公共资料
            // 基本资料
            dept: () => import('./views/commonMenu/basic/Department.vue'),
            // program: () => import('../views/Form1.vue'),
            // area: () => import('../views/Form2.vue'),
            // tax: () => import('../views/Form.vue'),
            // invoice: () => import('../views/Form.vue'),
            people: () => import('./views/commonMenu/basic/Personnel.vue'),
            // 物料资料
            warehouse: () => import('./views/commonMenu/material/Warehouse.vue'),
            materialType: () => import('./views/commonMenu/material/Materialclass.vue'),
            unit: () => import('./views/commonMenu/material/Measure.vue'),
            materiaMaster: () => import('./views/commonMenu/material/Material.vue'),
            // 往来资料
            customerType: () => import('./views/commonMenu/contact/Clientclass.vue'),
            prospectiveCustomer: () => import('./views/Form.vue'),
            customerMaster: () => import('./views/commonMenu/contact/Client.vue'),
            prospectiveToMaster: () => import('./views/Form.vue'),
            supplierType: () => import('./views/commonMenu/contact/Supplierclass.vue'),
            supplierMaster: () => import('./views/commonMenu/contact/Supplier.vue'),
            // 科目资料
            subjectAll: () => import('./views/Form.vue'),
            subjectType: () => import('./views/Form.vue'),

            // 采购管理
            // 基本资料
            purchaseRequisitionTypeSetting: () => import('./views/Form.vue'),
            purchaseWarehousingTypeSetting: () => import('./views/Form.vue'),
            purchaseOrderTypeSetting: () => import('./views/Form.vue'),
            // 采购作业
            order: () => import('./views/purchaseMenu/purchaseOrder/Order.vue'),
            purchaseInquiry: () => import('./views/purchaseMenu/purchaseOrder/InquirySheet.vue'),
            purchaseRequisition: () => import('./views/purchaseMenu/purchaseOrder/PurchaseRequisition.vue'),
            purchaseReceipt: () => import('./views/purchaseMenu/purchaseOrder/Warehousing.vue'),
            purchaseReturn: () => import('./views/purchaseMenu/purchaseOrder/ReturnGoods.vue'),
            purchaseInvoice: () => import('./views/purchaseMenu/purchaseOrder/Invoice.vue'),
            orderList: () => import('./views/purchaseMenu/purchaseOrder/OrderList.vue'),
            purchasingList: () => import('./views/purchaseMenu/purchaseOrder/caigou.vue'),
            //分摊作业
            procurementAllocationOperation: () => import('./views/purchaseMenu/shareTheHomework/PurchaseShare.vue'),
            purchaseShareDetails: () => import('./views/purchaseMenu/shareTheHomework/PurchaseShareDetails.vue'),

            //销售管理
            // 基本资料
            salesOrderTypeSetting: () => import('./views/Form.vue'),
            settingOfSalesOutboundType: () => import('./views/Form.vue'),
            // 销售作业
            salesQuotation: () => import('./views/saleMenu/salesJob/Salesprice.vue'),
            saleOrder: () => import('./views/saleMenu/salesJob/Salesorder.vue'),
            salesReleaseOrder: () => import('./views/saleMenu/salesJob/chuku.vue'),
            salesReturn: () => import('./views/saleMenu/salesJob/tuihuo.vue'),
            saleInvoice: () => import('./views/saleMenu/salesJob/fapiao.vue'),
            salesRanking: () => import('./views/saleMenu/salesJob/xiaoshou.vue'),
            // 金税接口
            exportOfSalesInvoice: () => import('./views/Form.vue'),

            // 库存管理
            // 基本资料
            storageTypeSetting: () => import('./views/Form.vue'),
            outboundTypeSetting: () => import('./views/Form.vue'),
            // 其他出入库作业
            otherWarehousingDocuments: () => import('./views/inventoryMenu/otherInboundAndOutboundOperations/Orderin.vue'),
            otherOutboundOrders: () => import('./views/inventoryMenu/otherInboundAndOutboundOperations/Orderout.vue'),
            // 调拨盘点作业
            requisition: () => import('./views/inventoryMenu/allocateInventory/Stock.vue'),
            printInventoryCard: () => import('./views/Form.vue'),
            inventoryList: () => import('./views/inventoryMenu/allocateInventory/Check.vue'),
            // 调价作业
            dueToTheSingle: () => import('./views/inventoryMenu/adjustTheHomework/Adjust.vue'),
            // 常用报表
            dead: () => import('./views/inventoryMenu/commonStatements/Dead.vue'),
            detail: () => import('./views/inventoryMenu/commonStatements/Detail.vue'),
            ledgerSelect: () => import('./views/inventoryMenu/commonStatements/LedgerSelect.vue'),

            // 账款管理
            // 冲款作业
            advancePayments: () => import('./views/creditMenu/newWashingOperation/AdvanceCollection.vue'),
            collectAndChargeInAdvance: () => import('./views/creditMenu/newWashingOperation/AdvancechargeCollection.vue'),
            // accountsReceivableChargeSheet: () => import('./views/creditMenu/newWashingOperation/Collectionadvances.vue'),
            advanceCharge: () => import('./views/creditMenu/newWashingOperation/Advancecharge.vue'),
            advanceChargePayable: () => import('./views/creditMenu/newWashingOperation/AdvancechargePayment.vue'),
            // payThePaymentSlip: () => import('./views/creditMenu/newWashingOperation/Paymentadvances.vue'),
            // 其他应收付作业
            otherReceivables: () => import('./views/Form.vue'),
            otherNotesPayable: () => import('./views/Form.vue'),
            // 账款报表
            collectionAgingtheAccounts: () => import('./views/creditMenu/accountStatements/CollectionAgingtheAccounts.vue'),
            collectionDetails: () => import('./views/creditMenu/accountStatements/CollectionDetails.vue'),
            paymentAgingtheAccounts: () => import('./views/creditMenu/accountStatements/PaymentAgingtheAccounts.vue'),
            paymentDetails: () => import('./views/creditMenu/accountStatements/PaymentDetails.vue')

          }
        }
      ]
    },
    commonMenu,
    saleMenu,
    creditMenu,
    purchaseMenu,
    inventoryMenu
  ]
})
