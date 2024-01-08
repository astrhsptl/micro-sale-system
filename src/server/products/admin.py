from django.contrib import admin

from .models import Seller, Category, CustomPhoto, Product, ProductCharacteristic


class SellerAdmin(admin.ModelAdmin):
    fields = (
        'id', 'name', 'description', 'address', 'tin'
    )
    list_display = (
        'id', 'name', 'address', 'tin'
    )
    search_fields = (
        'id', 'name', 'address', 'tin'
    )
    readonly_fields = (
        'id', 
    )


class CategoryAdmin(admin.ModelAdmin):
    fields = (
        'id', 'title', 'description', 'background',
    )
    list_display = (
        'id', 'title'
    )
    search_fields = (
        'id', 'title'
    )
    readonly_fields = (
        'id', 
    )


class CustomPhotoAdmin(admin.ModelAdmin):
    fields = (
        'id', 'image',
    )
    list_display = (
        'id',
    )
    search_fields = (
        'id', 'image',
    )
    readonly_fields = (
        'id', 
    )


class ProductAdmin(admin.ModelAdmin):
    fields = (
        'id', 'name', 'description', 'cost',
        'seller_id', 'category_id', 'preview',
        'photos'
    )
    list_display = (
        'id', 'name', 'description', 'cost',
    )
    search_fields = (
        'id', 'name', 'description', 'cost',
    )
    readonly_fields = (
        'id', 
    )


class ProductCharacteristicAdmin(admin.ModelAdmin):
    fields = (
        'id', 'title', 'value', 'product_id',
    )
    list_display = (
        'id', 'title', 'value', 'product_id',
    )
    search_fields = (
        'id', 'title', 'value', 'product_id',
    )
    readonly_fields = (
        'id', 
    )



admin.site.register(model_or_iterable=Seller, admin_class=SellerAdmin)
admin.site.register(model_or_iterable=Category, admin_class=CategoryAdmin)
admin.site.register(model_or_iterable=CustomPhoto, admin_class=CustomPhotoAdmin)
admin.site.register(model_or_iterable=Product, admin_class=ProductAdmin)
admin.site.register(model_or_iterable=ProductCharacteristic, admin_class=ProductCharacteristicAdmin)