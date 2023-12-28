from email.policy import default
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


class ProductCartAssociation(models.Model):
    id = models.UUIDField(
        primary_key=True,
        db_index=True,
        default=uuid4,
        editable=False)
    cart_id = models.ForeignKey(Cart, verbose_name="cart_id", on_delete=models.CASCADE, related_name="product_cart_association")
    product_id = models.ForeignKey(Product, verbose_name="product_id", on_delete=models.CASCADE, related_name="product_cart_association")
    quantity = models.PositiveIntegerField(default=1)


class Order(models.Model):
    id = models.UUIDField(
        primary_key=True,
        db_index=True,
        default=uuid4,
        editable=False)
    cart_id = models.ForeignKey(Cart, verbose_name="cart_id", on_delete=models.CASCADE)
    stage = models.CharField(max_length=50, blank=False)
    is_called = models.BooleanField(default=False)