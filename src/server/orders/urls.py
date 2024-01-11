from rest_framework import routers

from .views import (
    OrderViewSet, CartViewSet, ProductQuantityViewSet
)


router = routers.SimpleRouter()
router.register('order', OrderViewSet)
router.register('cart', CartViewSet)
router.register('product/quantity', ProductQuantityViewSet)

urlpatterns =  router.urls