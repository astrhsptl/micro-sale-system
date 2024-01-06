from rest_framework.viewsets import ModelViewSet
from rest_framework.filters import SearchFilter

from .models import (
    Seller, Category,
    Product, ProductCharacteristic,
    ProductPhoto
)
from .serializers import (
    SellerSerializer, CategorySerializer,
    ProductSerializer, ProductCharacteristicSerializer,
    ProductPhotoSerializer
)

from services import StandardResultsSetPagination


class SellerViewSet(ModelViewSet):
    queryset = Seller.objects.all()
    serializer_class = SellerSerializer
    pagination_class = StandardResultsSetPagination
    tags = ["Seller"]
    filter_backends = [SearchFilter]
    search_fields = ["id", "description", "address", "tin",]


class CategoryViewSet(ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    pagination_class = StandardResultsSetPagination
    tags = ["Category"]
    filter_backends = [SearchFilter]
    search_fields = ["id", "title", "description", "background",]

class ProductViewSet(ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    pagination_class = StandardResultsSetPagination
    tags = ["Product"]
    filter_backends = [SearchFilter]
    search_fields = ["id", "name", "cost", "seller_id", "category_id"]

class ProductCharacteristicViewSet(ModelViewSet):
    queryset = ProductCharacteristic.objects.all()
    serializer_class = ProductCharacteristicSerializer
    pagination_class = StandardResultsSetPagination
    tags = ["Product Characteristic"]
    filter_backends = [SearchFilter]
    search_fields = ["id", "title", "value", "product_id",]

class ProductPhotoViewSet(ModelViewSet):
    queryset = ProductPhoto.objects.all()
    serializer_class = ProductPhotoSerializer
    pagination_class = StandardResultsSetPagination
    tags = ["Product Photo"]
    filter_backends = [SearchFilter]
    search_fields = ["id", "image", "product_id",]