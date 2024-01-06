from rest_framework import routers

from .views import (
    SellerViewSet, ProductViewSet,
    CategoryViewSet, CustomPhotoViewSet,
    ProductCharacteristicViewSet
)


router = routers.SimpleRouter()
router.register('seller', SellerViewSet)
router.register('product', ProductViewSet)
router.register('category', CategoryViewSet)
router.register('photo', CustomPhotoViewSet)
router.register('characteristic', ProductCharacteristicViewSet)

urlpatterns =  router.urls