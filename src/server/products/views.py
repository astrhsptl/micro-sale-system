from rest_framework.viewsets import ModelViewSet
from rest_framework.filters import SearchFilter
from django_filters.rest_framework import DjangoFilterBackend

from .models import (
    Seller, Category,
    Product, ProductCharacteristic,
    CustomPhoto
)
from .serializers import (
    SellerSerializer, CategorySerializer,
    ProductSerializer, ProductCharacteristicSerializer,
    CustomPhotoSerializer
)

from services import StandardResultsSetPagination


class SellerViewSet(ModelViewSet):
    queryset = Seller.objects.all()
    serializer_class = SellerSerializer
    pagination_class = StandardResultsSetPagination
    tags = ["Seller"]
    filter_backends = [SearchFilter, DjangoFilterBackend]
    search_fields = ["id", "description", "address", "tin",]
    filterset_fields = ["id", "description", "address", "tin",]


class CategoryViewSet(ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    pagination_class = StandardResultsSetPagination
    tags = ["Category"]
    filter_backends = [SearchFilter, DjangoFilterBackend]
    search_fields = ["id", "title", "description", "background",]
    filterset_fields = ["id", "title", "description",]

class ProductViewSet(ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    pagination_class = StandardResultsSetPagination
    tags = ["Product"]
    filter_backends = [DjangoFilterBackend, SearchFilter]
    search_fields = ["id", "name", "cost",]
    filterset_fields = ["id", "name", "cost", "seller_id", "category_id"]

class ProductCharacteristicViewSet(ModelViewSet):
    queryset = ProductCharacteristic.objects.all()
    serializer_class = ProductCharacteristicSerializer
    pagination_class = StandardResultsSetPagination
    tags = ["Product Characteristic"]
    filter_backends = [SearchFilter, DjangoFilterBackend]
    filterset_fields = ["id", "title", "value", "product_id",]

class CustomPhotoViewSet(ModelViewSet):
    queryset = CustomPhoto.objects.all()
    serializer_class = CustomPhotoSerializer
    pagination_class = StandardResultsSetPagination
    tags = ["Product Photo"]
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ["id",]