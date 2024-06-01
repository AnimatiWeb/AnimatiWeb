
from django.db import models


# Create your models here.

from datetime import datetime
from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser, PermissionsMixin
from django.contrib.auth import get_user_model

# Create your models here.

class UserManager(BaseUserManager):
    def _create_user(self, username, email, first_name,last_name, password, is_staff, is_superuser, **extra_fields):
        user = self.model(
            username = username,
            email = email,
            first_name = first_name,
            last_name = last_name,
            is_staff = is_staff,
            is_superuser = is_superuser,
            **extra_fields
        )
        user.set_password(password)
        user.save(using=self.db)
        return user

    def create_user(self, username, email, first_name,last_name, password=None, **extra_fields):
        return self._create_user(username, email, first_name,last_name, password, False, False, **extra_fields)

    def create_superuser(self, username, email, name,last_name, password=None, **extra_fields):
        return self._create_user(username, email, name,last_name, password, True, True, **extra_fields)

class User(AbstractBaseUser, PermissionsMixin):
    id = models.BigAutoField(primary_key=True,)
    username = models.CharField(max_length = 255, unique = True)
    email = models.EmailField('Correo Electrónico',max_length = 255, unique = True,)
    first_name = models.CharField('Nombres', max_length = 255, blank = True, null = True)
    last_name = models.CharField('Apellidos', max_length = 255, blank = True, null = True)
    image = models.ImageField('Imagen de perfil', upload_to='perfil/', max_length=255, null=True, blank = True)
    is_active = models.BooleanField(default = True)
    is_staff = models.BooleanField(default = True)
    objects = UserManager()

    class Meta:
        verbose_name = 'Usuario'
        verbose_name_plural = 'Usuarios'

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['emai','firt_name','last_name', 'password']

    def __str__(self):
        return f'{self.username} {self.last_name}'
    

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
    Usuario = models.ForeignKey(User, to_field='id', on_delete=models.CASCADE)
    Creado = models.DateTimeField(default=datetime.now)

class ProductoCarrito(models.Model):
    Codigo = models.ForeignKey(Producto, on_delete=models.CASCADE)
    Cantidad = models.IntegerField(default=1)
    Precio = models.FloatField(blank=True)
    Carrito = models.ForeignKey(Carrito, on_delete=models.CASCADE)

    def __str__(self):
        return  self.client + " - " + self.product    


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
<<<<<<< HEAD
=======

>>>>>>> developer
    
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
<<<<<<< HEAD
    
    
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
    
=======
    def __str__(self):
        return self.Nro_Pedido
>>>>>>> developer
