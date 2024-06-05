from django.shortcuts import render
from django.contrib.auth import authenticate, logout
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.views import TokenObtainPairView
from django.views.generic import  DetailView, ListView, CreateView, UpdateView, DeleteView
from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.generics import CreateAPIView, UpdateAPIView, GenericAPIView
from rest_framework.permissions import AllowAny, IsAdminUser, IsAuthenticated
from rest_framework.response import Response
from rest_framework import status, viewsets, generics



from .models import *
from .serializers import *
# Create your views here.

class CreateUserAPI(CreateAPIView):
    queryset = User.objects.all()
    serializer_class = CrearUsuarioSerializer
    permission_classes = [permissions.AllowAny]


class ActualizarUsuarioSerializerAPI(UpdateAPIView):
    permission_classes = [permissions.AllowAny]
    queryset = User.objects.all()
    serializer_class = ActualizarUsuarioSerializer


class LoginAPIView(TokenObtainPairView):
    permission_classes = [AllowAny] 

    serializer_class = CustomTokenObtainPairSerializer

    def post(self, request, *args, **kwargs):
        username = request.data.get('username', '')
        password = request.data.get('password', '')
        user = authenticate(
            username=username,
            password=password
        )

        if user:
            login_serializer = self.serializer_class(data=request.data)
            if login_serializer.is_valid():
                user_serializer = CustomUsuarioSerializer(user)
                return Response({
                    'token': login_serializer.validated_data.get('access'),
                    'refresh-token': login_serializer.validated_data.get('refresh'),
                    'user': user_serializer.data,
                    'message': 'Inicio de Sesion Existoso'
                }, status=status.HTTP_200_OK)
            return Response({'error': 'Contraseña o nombre de usuario incorrectos'}, status=status.HTTP_400_BAD_REQUEST)
        return Response({'error': 'Contraseña o nombre de usuario incorrectos'}, status=status.HTTP_400_BAD_REQUEST)

    

class LogoutView(GenericAPIView):
    permission_classes = [permissions.AllowAny] 
    def post(self, request):
        user = User.objects.filter(id=request.data.get('user',''))
        if user.exists():
            RefreshToken.for_user(user.first())
            return Response({'message':'Sesión Cerrada.'},status=status.HTTP_200_OK)
        return Response({'error':'No se ha Logeado.'}, status=status.HTTP_400_BAD_REQUEST)



        
class ListaDeUsuarios(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UsuarioSerializer
    http_method_names = ['get']
    permission_classes = [ permissions.AllowAny]
    def list(self, request):
        queryset = self.get_queryset()
        serializer = UsuarioSerializer(queryset, many=True)
        if self.request.user.is_authenticated:
            return Response(serializer.data)

class PerfilView(generics.RetrieveUpdateAPIView):
    permission_classes = [permissions.AllowAny]
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
    permission_classes = [permissions.AllowAny]
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer

class verCategorias(viewsets.ReadOnlyModelViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer

class ProductosViewAet(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = Producto.objects.all()
    serializer_class = ProductosSerializer
    
class añadirProducto(APIView):
    permission_classes = [permissions.AllowAny]
    def post(self, request, format=None):
        serializer = ProductosSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,
                        status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class CarritoComprasVista(APIView):
    permission_classes = [permissions.AllowAny]
    def post(self, request):
        serializer = CarroDeCompraSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"estado": "correcto", "data": serializer.data}, status=status.HTTP_200_OK)
        else:
            return Response({"estado": "error", "data": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)


class DetalleCarrito(DetailView):
    permission_classes = [permissions.AllowAny]
    model = Carrito



class ListaCarritos(ListView):
    permission_classes = [permissions.AllowAny]
    model = Carrito
    context_object_name = 'carritos'


class CrearCarrito(CreateView):
    permission_classes = [permissions.AllowAny]
    model = Carrito


class ActualizarCarrito(UpdateView):
    permission_classes = [permissions.AllowAny]
    model = Carrito


class EliminarCarrito(DeleteView):
    permission_classes = [permissions.AllowAny]
    model = Carrito

class DetalleProductosCarrito(DetailView):
    permission_classes = [permissions.AllowAny]
    model = ProductoCarrito


class ListarProductosEnCarrito(ListView):
    permission_classes = [permissions.AllowAny]
    model = ProductoCarrito
    context_object_name = 'Productos en Carrito'


class CrearProductosCarrito(CreateView):
    permission_classes = [permissions.AllowAny]
    model = ProductoCarrito


class ActualizarProductoenCarrito(UpdateView):
    permission_classes = [permissions.AllowAny]
    model = ProductoCarrito


class EliminarItemEnCarrito(DeleteView):
    permission_classes = [permissions.AllowAny]
    model = ProductoCarrito
