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


class SellerViewSet(ModelViewSet):
    queryset = Seller.objects.all()
    serializer_class = SellerSerializer
    tags = ["Seller"]


class CategoryViewSet(ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    tags = ["Category"]


class ProductViewSet(ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    tags = ["Product"]


class ProductCharacteristicViewSet(ModelViewSet):
    queryset = ProductCharacteristic.objects.all()
    serializer_class = ProductCharacteristicSerializer
    tags = ["Product Characteristic"]


class ProductPhotoViewSet(ModelViewSet):
    queryset = ProductPhoto.objects.all()
    serializer_class = ProductPhotoSerializer
    tags = ["Product Photo"]


    # @detail_route(methods=['post'])
    # def upload_docs(request):
    #     try:
    #         file = request.data['file']
    #     except KeyError:
    #         raise ParseError('Request has no resource file attached')
    #     product = Product.objects.create(image=file, ....)


