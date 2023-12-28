from rest_framework.viewsets import ModelViewSet

from .models import Order, Cart, ProductCartAssociation
from .serializers import OrderSerializer, CartSerializer, ProductCartAssociationSerializer 


class OrderViewSet(ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    tags = ["Order"]


class CartViewSet(ModelViewSet):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer
    tags = ["Cart"]


class ProductCartAssociationViewSet(ModelViewSet):
    queryset = ProductCartAssociation.objects.all()
    serializer_class = ProductCartAssociationSerializer
    tags = ["Product cart association"]

