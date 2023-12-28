from rest_framework import routers

from .views import (
    OrderViewSet, CartViewSet, ProductCartAssociationViewSet
)


router = routers.SimpleRouter()
router.register('order', OrderViewSet)
router.register('cart', CartViewSet)
router.register('cart/product/association', ProductCartAssociationViewSet)

urlpatterns =  router.urls