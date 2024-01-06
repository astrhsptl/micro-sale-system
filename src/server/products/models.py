from uuid import uuid4

from django.db import models


class Seller(models.Model):
    id = models.UUIDField(
        primary_key=True,
        db_index=True,
        default=uuid4,
        editable=False)
    name = models.CharField(max_length=63, blank=False, unique=True)
    description = models.CharField(max_length=255, blank=True)
    address = models.CharField(max_length=100, blank=False, unique=True)
    tin = models.CharField(max_length=16, blank=False, unique=True)


class Category(models.Model):
    id = models.UUIDField(
        primary_key=True,
        db_index=True,
        default=uuid4,
        editable=False)
    title = models.CharField(max_length=63, blank=False, unique=True)
    description = models.CharField(max_length=255, blank=False, unique=True)
    background = models.ImageField(blank=True, upload_to="category/background")


class Product(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=63, blank=False, unique=True)
    cost = models.FloatField(default=False, blank=False)
    seller_id = models.ForeignKey(Seller, verbose_name="seller_id", on_delete=models.CASCADE)
    category_id = models.ForeignKey(Category, verbose_name="category_id", on_delete=models.CASCADE)


class ProductPhoto(models.Model):
    id = models.UUIDField(
        primary_key=True,
        db_index=True,
        default=uuid4,
        editable=False)
    image = models.ImageField(blank=False, upload_to="product_photo/image")
    product_id = models.ForeignKey(Product, verbose_name="product_id", on_delete=models.CASCADE)


class ProductCharacteristic(models.Model):
    id = models.UUIDField(
        primary_key=True,
        db_index=True,
        default=uuid4,
        editable=False)
    title = models.CharField(max_length=63, blank=False, unique=True)
    value = models.CharField(max_length=63, blank=False, unique=True)
    product_id = models.ForeignKey(Product, verbose_name="product_id", on_delete=models.CASCADE)
