# Generated by Django 5.0.1 on 2024-01-06 03:13

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0002_productcharacteristic'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='product',
            name='description',
        ),
    ]