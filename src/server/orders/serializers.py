from rest_framework import serializers

from .models import (
    Cart, Order,
    ProductCartAssociation
)


class CartSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cart
        fields = ("__all__")


class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ("__all__")


class ProductCartAssociationSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductCartAssociation
        fields = ("__all__")
