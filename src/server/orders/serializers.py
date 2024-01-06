from rest_framework import serializers

from .models import (
    Cart, Order, ProductQuantity
)


class CartSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cart
        fields = ("__all__")


class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ("__all__")


class ProductQuantitySerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductQuantity
        fields = ("__all__")
