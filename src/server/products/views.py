from rest_framework.viewsets import ModelViewSet


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


class CategoryViewSet(ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    pagination_class = StandardResultsSetPagination
    tags = ["Category"]


class ProductViewSet(ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    pagination_class = StandardResultsSetPagination
    tags = ["Product"]


class ProductCharacteristicViewSet(ModelViewSet):
    queryset = ProductCharacteristic.objects.all()
    serializer_class = ProductCharacteristicSerializer
    pagination_class = StandardResultsSetPagination
    tags = ["Product Characteristic"]


class ProductPhotoViewSet(ModelViewSet):
    queryset = ProductPhoto.objects.all()
    serializer_class = ProductPhotoSerializer
    pagination_class = StandardResultsSetPagination
    tags = ["Product Photo"]
