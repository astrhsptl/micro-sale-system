from uuid import uuid4
from django.db import models

from authsystem.models import User
from products.models import Product


class Cart(models.Model):
    id = models.UUIDField(
        primary_key=True,
        db_index=True,
        default=uuid4,
        editable=False)
    user_id = models.ForeignKey(User, verbose_name="user_id", on_delete=models.CASCADE)


class Order(models.Model):
    id = models.UUIDField(
        primary_key=True,
        db_index=True,
        default=uuid4,
        editable=False)
    cart_id = models.ForeignKey(Cart, verbose_name="cart_id", on_delete=models.CASCADE)
    stage = models.CharField(max_length=50, blank=False)
    is_called = models.BooleanField(default=False)


class ProductQuantity(models.Model):
    id = models.UUIDField(
        primary_key=True,
        db_index=True,
        default=uuid4,
        editable=False)
    cart_id = models.ForeignKey(Cart, on_delete=models.CASCADE, related_name="cart")
    product_id = models.ForeignKey(Cart, on_delete=models.CASCADE, related_name="product")
    quantity = models.PositiveBigIntegerField()