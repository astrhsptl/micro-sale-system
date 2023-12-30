# Generated by Django 5.0 on 2023-12-28 13:31

import django.db.models.deletion
import uuid
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.UUIDField(db_index=True, default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=63, unique=True)),
                ('description', models.CharField(max_length=255, unique=True)),
                ('background', models.ImageField(blank=True, upload_to='category/background')),
            ],
        ),
        migrations.CreateModel(
            name='Seller',
            fields=[
                ('id', models.UUIDField(db_index=True, default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=63, unique=True)),
                ('description', models.CharField(blank=True, max_length=255)),
                ('address', models.CharField(max_length=100, unique=True)),
                ('tin', models.CharField(max_length=16, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=63, unique=True)),
                ('description', models.CharField(max_length=255, unique=True)),
                ('cost', models.FloatField(default=False)),
                ('category_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='products.category', verbose_name='category_id')),
                ('seller_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='products.seller', verbose_name='seller_id')),
            ],
        ),
        migrations.CreateModel(
            name='ProductPhoto',
            fields=[
                ('id', models.UUIDField(db_index=True, default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('image', models.ImageField(upload_to='product_photo/image')),
                ('product_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='products.product', verbose_name='product_id')),
            ],
        ),
    ]