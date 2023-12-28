from rest_framework.viewsets import ModelViewSet

from .models import Order, Cart, ProductCartAssociation
from .serializers import OrderSerializer, CartSerializer, ProductCartAssociationSerializer 

from services import StandardResultsSetPagination


class OrderViewSet(ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    pagination_class = StandardResultsSetPagination
    tags = ["Order"]


class CartViewSet(ModelViewSet):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer
    pagination_class = StandardResultsSetPagination
    tags = ["Cart"]


class ProductCartAssociationViewSet(ModelViewSet):
    queryset = ProductCartAssociation.objects.all()
    serializer_class = ProductCartAssociationSerializer
    pagination_class = StandardResultsSetPagination
    tags = ["Product cart association"]