from django.contrib import admin
from .models import *
# Register your models here.

class CategoriaAdmin(admin.ModelAdmin):
    list_display =('Nombre_Categoria', 'Descripcion_Categoria')

class ProductoAdmin(admin.ModelAdmin):
    list_display = ('Nombre_Producto', 'Precio', 'Stock', 'Id_Categoria')

class ClienteAdmin(admin.ModelAdmin):
    list_display = ('Nombre', 'Apellido', 'Correo_Electronico', 'Direccion', 'Telefono')

admin.site.register(Categoria, CategoriaAdmin)
admin.site.register(Producto, ProductoAdmin)
admin.site.register(Cliente, ClienteAdmin)        