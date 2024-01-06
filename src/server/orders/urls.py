from rest_framework import routers

from .views import (
    OrderViewSet, CartViewSet
)


router = routers.SimpleRouter()
router.register('order', OrderViewSet)
router.register('cart', CartViewSet)

urlpatterns =  router.urls