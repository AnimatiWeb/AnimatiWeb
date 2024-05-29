from datetime import datetime
from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Categoria(models.Model):
    Id_Categoria = models.AutoField(primary_key=True)
    Nombre_Categoria = models.CharField(max_length=100, blank=False)
    Descripcion_Categoria = models.CharField(max_length=100, blank=False)
    class Meta:
        db_table = 'categoria'
        verbose_name = 'Categoria'
        verbose_name_plural = 'Categorias'
    def __unicode__(self):
        return self.Nombre_Categoria
    def __str__(self):
        return self.Nombre_Categoria


class Producto(models.Model):
    Codigo_Producto = models.IntegerField(primary_key=True)
    Nombre_Producto = models.CharField(max_length=70, blank=False)
    Imagen = models.CharField(max_length=250)
    Precio = models.DecimalField(blank=False, default=2000, decimal_places=2, max_digits=10)
    Stock = models.PositiveIntegerField(blank=False, default=0)
    Id_Categoria = models.ForeignKey(Categoria, to_field='Id_Categoria', on_delete=models.CASCADE)
    class Meta:
        db_table = 'producto'
        verbose_name = 'Producto'
        verbose_name_plural = 'Productos'

    def __unicode__(self):
        return self.Nombre_Producto
    def __str__(self):
        return self.Nombre_Producto  
    @property
    def ImagenURL(self):
        try:
            url = self.Imagen.url
        except:
            url = ''
        return url


class CarritoCompras(models.Model):
        Nombre_Producto = models.CharField(max_length=200)
        Precio_Producto = models.DecimalField(max_length=10, blank=False, decimal_places=2, max_digits=10)
        Cantidad_Producto = models.PositiveIntegerField()

class Carrito(models.Model):
    Usuario = models.ForeignKey(User, on_delete=models.CASCADE)
    Creado = models.DateTimeField(default=datetime.now)

class ProductoCarrito(models.Model):
    Codigo = models.ForeignKey(Producto, on_delete=models.CASCADE)
    Cantidad = models.IntegerField(default=1)
    Precio = models.FloatField(blank=True)
    Carrito = models.ForeignKey(Carrito, on_delete=models.CASCADE)

    def __str__(self):
        return  self.cliente + " - " + self.product    

class Cliente(models.Model):
    DNI = models.IntegerField(primary_key=True)
    Nombre = models.CharField(max_length=100, blank=False)
    Apellido = models.CharField(max_length=100, blank=False)
    Correo_Electronico = models.CharField(max_length=130, blank=False)
    Direccion = models.CharField(max_length=120, blank=False)
    Telefono = models.IntegerField(blank=False, default=2000)
    Id_usuario = models.ForeignKey(User, to_field='id', on_delete=models.CASCADE)
    class Meta:
        db_table = 'cliente'
        verbose_name = 'Cliente'
        verbose_name_plural = 'Clientes'

    def __unicode__(self):
        return self.Nombre
    def __str__(self):
        return self.Nombre
    