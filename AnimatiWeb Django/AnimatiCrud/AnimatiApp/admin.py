from django.contrib import admin
from .models import *

# Register your models here.


class CategoriaAdmin(admin.ModelAdmin):
    list_display =('Nombre_Categoria', 'Descripcion_Categoria')

class ProductoAdmin(admin.ModelAdmin):
    list_display = ('Nombre_Producto', 'Precio', 'Stock', 'Id_Categoria')

class ClienteAdmin(admin.ModelAdmin):
    list_display = ('Nombre', 'Apellido', 'Correo_Electronico', 'Direccion', 'Telefono')

class PedidosAdmin(admin.ModelAdmin):
    list_display = ('Nro_Pedido', 'Id_Producto', 'DNI', 'Cantidad')

   

admin.site.register(Categoria, CategoriaAdmin)
admin.site.register(Producto, ProductoAdmin)
admin.site.register(Cliente, ClienteAdmin)
admin.site.register(Pedidos, PedidosAdmin)

admin.site.register(Usuario)