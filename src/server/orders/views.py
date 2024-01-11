from rest_framework.viewsets import ModelViewSet
from rest_framework.filters import SearchFilter
from django_filters.rest_framework import DjangoFilterBackend

from .models import Order, Cart, ProductQuantity
from .serializers import OrderSerializer, CartSerializer, ProductQuantitySerializer

from services import StandardResultsSetPagination


class OrderViewSet(ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    pagination_class = StandardResultsSetPagination
    tags = ["Order"]
    filter_backends = [SearchFilter, DjangoFilterBackend]
    search_fields = ["id", "cart_id", "stage", "is_called"]
    filterset_fields = ["id", "cart_id", "stage", "is_called"]


class CartViewSet(ModelViewSet):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer
    pagination_class = StandardResultsSetPagination
    filter_backends = [SearchFilter, DjangoFilterBackend]
    search_fields = ["id", "user_id",  "is_closed"]
    filterset_fields = ["id", "user_id",  "is_closed"]
    tags = ["Cart"]


class ProductQuantityViewSet(ModelViewSet):
    queryset = ProductQuantity.objects.all()
    serializer_class = ProductQuantitySerializer
    pagination_class = StandardResultsSetPagination
    filter_backends = [SearchFilter, DjangoFilterBackend]
    search_fields = ["id", "quantity",]
    filterset_fields = ["id", "cart_id", "product_id", "quantity",]
    tags = ["Product quantity"]