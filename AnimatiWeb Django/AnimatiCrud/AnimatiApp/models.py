from django.db import models


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
    Id_Producto = models.AutoField(primary_key=True)
    Nombre_Producto = models.CharField(max_length=70, blank=False)
    Precio = models.DecimalField(blank=False, default=2000, decimal_places=2, max_digits=10)
    Stock = models.IntegerField(blank=False, default=2000)
    Id_Categoria = models.ForeignKey(Categoria, to_field='Id_Categoria', on_delete=models.CASCADE)
    class Meta:
        db_table = 'producto'
        verbose_name = 'Producto'
        verbose_name_plural = 'Productos'

    def __unicode__(self):
        return self.Nombre_Producto
    def __str__(self):
        return self.Nombre_Producto  

class Cliente(models.Model):
    DNI = models.IntegerField(primary_key=True)
    Nombre = models.CharField(max_length=100, blank=False)
    Apellido = models.CharField(max_length=100, blank=False)
    Correo_Electronico = models.CharField(max_length=130, blank=False)
    Direccion = models.CharField(max_length=120, blank=False)
    Telefono = models.IntegerField(blank=False, default=2000)
    class Meta:
        db_table = 'cliente'
        verbose_name = 'Cliente'
        verbose_name_plural = 'Clientes'

    def __unicode__(self):
        return self.Nombre
    def __str__(self):
        return self.Nombre
    
class Pedidos (models.Model):
    Nro_Pedido = models.IntegerField(primary_key=True)
    Id_Producto = models.ForeignKey(Producto, to_field='Id_Producto', on_delete=models.CASCADE)
    DNI = models.ForeignKey(Cliente, to_field='DNI', on_delete=models.CASCADE)    
    Cantidad = models.IntegerField(blank=False)
    class Meta:
        db_table = 'pedido'
        verbose_name = 'Pedido'
        verbose_name_plural = 'Pedidos'

    def __unicode__(self):
        return self.Nro_Pedido
    
    
class Usuario(models.Model):
    ID_Usuario = models.AutoField(primary_key=True)
    Nombre_Usuario = models.CharField(max_length=100, blank=False)
    Correo_Usuario = models.CharField(max_length=100, blank=False)
    Numero_Telefono = models.IntegerField(blank=False)
    Password = models.CharField(max_length=100, blank=False)

    class Meta:
        db_table = 'usuario'
        verbose_name = 'Usuario'
        verbose_name_plural = 'Usuarios'

    def __unicode__(self):
        return self.Nombre_Usuario
    def __str__(self):
        
        return self.Nombre_Usuario
    