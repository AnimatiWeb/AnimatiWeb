from django.urls import path, include, re_path
from rest_framework import routers
from knox import views as knox_views
from AnimatiApp import views
from .views import *


router=routers.DefaultRouter()
router.register(r'Categoria', views.CategoriaViewSet)




urlpatterns =[
    path('/login', LoginAPI.as_view(), name='login'),
    path('/logout', knox_views.LogoutView.as_view(), name='logout'),
    path('/logoutall', knox_views.LogoutAllView.as_view(), name='logoutall'),
    path('/registro', CreateUserAPI.as_view(), name='registro'),
    path('/perfilusuario', PerfilView.as_view(), name='perfilusuario'),
    path('/usuarios', ListaDeUsuarios.as_view(), name='listadeusuarios'),
    path('/añadirproducto', añadirProducto.as_view(), name='añadirproducto'),  
    path('/carrito', CarritoComprasVista.as_view(), name='carritodecompras'),
    path('/listacarrito', ListaCarritos.as_view(), name='listacarrito'),
    path('/carrito/<int:pk>', DetalleCarrito.as_view(), name='detallecarrito'),
    path('/carrito/crear', CrearCarrito.as_view(), name='crearcarrito'),
    path('/carrito/<int:pk>/actualizar', ActualizarCarrito.as_view(), name='actualizarcarrito'),
    path('/carrito/<int:pk>/eliminar', EliminarCarrito.as_view(), name='eliminarcarrito'),
    path('/carritoProductos', ListarProductosEnCarrito.as_view(), name='listarproductoencarrito'),
    path('/carritoProductos/<int:pk>', DetalleProductosCarrito.as_view(), name='detalleproductoencarrito'),
    path('/carritoProductos/crear', CrearProductosCarrito.as_view(), name='crearproductoencarrito'),
    path('/carritoProductos/<int:pk>/actualizar', ActualizarProductoenCarrito.as_view(), name='actualizarproductoencarrito'),
    path('/carritoProductos/<int:pk>/eliminar', EliminarItemEnCarrito.as_view(), name='eliminarproductodelcarrito'),
     
    path('', include(router.urls)),
]