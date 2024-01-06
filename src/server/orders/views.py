from rest_framework.viewsets import ModelViewSet
from rest_framework.filters import SearchFilter

from .models import Order, Cart
from .serializers import OrderSerializer, CartSerializer 

from services import StandardResultsSetPagination


class OrderViewSet(ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    pagination_class = StandardResultsSetPagination
    tags = ["Order"]
    filter_backends = [SearchFilter]
    search_fields = ["id", "cart_id", "stage", "is_called", "products"]


class CartViewSet(ModelViewSet):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer
    pagination_class = StandardResultsSetPagination
    filter_backends = [SearchFilter]
    search_fields = ["id", "user_id"]
    tags = ["Cart"]