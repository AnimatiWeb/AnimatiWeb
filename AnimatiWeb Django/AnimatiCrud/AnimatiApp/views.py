from django.shortcuts import render
from django.contrib.auth import authenticate
from knox import views as knox_views
from knox.views import LoginView as KnoxLoginView
from django.views.generic import  DetailView, ListView, CreateView, UpdateView, DeleteView
from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.authtoken.serializers import AuthTokenSerializer
from django.contrib.auth import login
from rest_framework.generics import CreateAPIView, UpdateAPIView
from rest_framework.permissions import AllowAny, IsAdminUser, IsAuthenticated
from rest_framework.response import Response
from rest_framework import status, viewsets, generics



from .models import Categoria, User
from .serializers import *
# Create your views here.

class CreateUserAPI(CreateAPIView):
    queryset = User.objects.all()
    serializer_class = CrearUsuarioSerializer
    permission_classes = (AllowAny,)


class ActualizarUsuarioSerializerAPI(UpdateAPIView):
    queryset = User.objects.all()
    serializer_class = ActualizarUsuarioSerializer


class LoginAPI(KnoxLoginView):
    permission_classes = (permissions.AllowAny, )
    

    def post(self, request, format=None):
        serializer = AuthTokenSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            user = serializer.validated_data['user']
            login(request, user)
            response = super(LoginAPI, self).post(request, format=None)
        else:
            return Response({'errors': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

        return Response(response.data, status=status.HTTP_200_OK)
    
class ListaDeUsuarios(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UsuarioSerializer
    http_method_names = ['get']
    permission_classes = [IsAdminUser]
    def list(self, request):
        queryset = self.get_queryset()
        serializer = UsuarioSerializer(queryset, many=True)
        if self.request.user.is_authenticated:
            return Response(serializer.data)

class PerfilView(generics.RetrieveUpdateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = UsuarioSerializer
    http_method_names = ['get', 'patch']
    def get_object(self):
        if self.request.user.is_authenticated:
            return self.request.user
    def patch_object(self,request):
        serializer = UsuarioSerializer(data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CategoriaViewSet(viewsets.ModelViewSet):
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer

class verCategorias(viewsets.ReadOnlyModelViewSet):
    permission_classes = [AllowAny]
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer

class añadirProducto(APIView):
    permission_classes = [IsAdminUser]
    def post(self, request, format=None):
        serializer = ProductosSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,
                        status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class CarritoComprasVista(APIView):
    permission_classes = [IsAuthenticated]
    def post(self, request):
        serializer = CarroDeCompraSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"estado": "correcto", "data": serializer.data}, status=status.HTTP_200_OK)
        else:
            return Response({"estado": "error", "data": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)


class DetalleCarrito(DetailView):
    model = Carrito


class ListaCarritos(ListView):
    model = Carrito
    context_object_name = 'carritos'


class CrearCarrito(CreateView):
    model = Carrito


class ActualizarCarrito(UpdateView):
    model = Carrito


class EliminarCarrito(DeleteView):
    model = Carrito

class DetalleProductosCarrito(DetailView):
    model = ProductoCarrito


class ListarProductosEnCarrito(ListView):
    model = ProductoCarrito
    context_object_name = 'Productos en Carrito'


class CrearProductosCarrito(CreateView):
    model = ProductoCarrito


class ActualizarProductoenCarrito(UpdateView):
    model = ProductoCarrito


class EliminarItemEnCarrito(DeleteView):
    model = ProductoCarrito