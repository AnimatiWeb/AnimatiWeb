export const environment = {
  production: false,
  urlHost:'http://localhost:8000/',
  urlApi: 'http://localhost:8000/api/',
  API_END_POINT: 'http://localhost:8000/api/',

  METHODS: {
    GET_ALL_PRODUCT: 'Productos',
    GET_PRODUCT_BY_ID: '',
    GET_ALL_CATEGORY: 'Categoria',
    GET_ALL_PRODUCT_BY_CATEGORY: 'GetAllProductsByCategoryId?id=',
    CREATE_NEW_CATEGORY: 'CreateNewCategory',
    CREATE_PRODUCT: 'añadirproducto',
    UPDATE_PRODUCT: '/Productos/{Codigo_Producto}',
    DELETE_PRODUCT: '/Productos/{Codigo_Producto}',
    ADD_TO_CART: 'ADDTOCART',
    GET_CART_BY_CUST: 'GetCartProductsByCustomerId?id=',
    REMOVE_CART: 'DeleteProductFromCartById?ID=',
    LOGIN: 'Login',
    USER_TOKEN_LOGIN: 'Login',
    REGISTER: 'RegisterCustomer',
    PLACE_ORDER: 'PlaceOrder',
    GET_ALL_OFFERS: 'GetAllOffers',
    CREATE_NEW_OFFER: 'CreateNewOffer',
    GET_CUSTOMER_BY_ID: 'GetCustomerById?id=',
    UPDATE_PROFILE: 'UpdateProfile',
    GET_ALL_SALE_BY_CUSTOMER_ID: 'GetAllSaleByCustomerId?id=',
    CANCEL_ORDER_BY_SALE_ID: 'cancelOrder?saleId=',
    OPEN_SALE_BY_SALE_ID: 'OpenSaleBySaleId?saleId='
  }
};
  