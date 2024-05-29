from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from rest_framework import serializers
from django.db import models
from .models import *



class CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categoria
        fields = '__all__'

class ProductosSerializer(serializers.ModelSerializer):
    Id_Categoria = serializers.SlugRelatedField(
        queryset = Categoria.objects.all(), slug_field="Nombre_Categoria")
    class Meta:
        model = Producto
        fields = '__all__'       


class CarroDeCompraSerializer(serializers.ModelSerializer):
    producto_nombre = serializers.CharField(max_length=200)
    producto_precio = serializers.FloatField()
    producto_cantidad = serializers.IntegerField(required=False, default=1)

    class Meta:
        model = CarritoCompras
        fields = ('__all__')


class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email')


class CrearUsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')
        extra_kwargs = {
            'password': {'required': True}
        }

    def validate(self, attrs):
        user = attrs.get('username', '').strip().lower()
        if User.objects.filter(user=user).exists():
            raise serializers.ValidationError('El usuario con esta identificación ya existe.')
        return attrs

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user


class ActualizarUsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('first_name', 'last_name', 'email', 'password')

    def update(self, instance, validated_data):
        password = validated_data.pop('password')
        if password:
            instance.set_password(password)
        instance = super().update(instance, validated_data)
        return instance


