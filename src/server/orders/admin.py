from django.contrib import admin

from .models import Cart, Order, ProductQuantity


class CartAdmin(admin.ModelAdmin):
    fields = (
        'id', 'user_id',
    )
    list_display = (
        'id', 'user_id',
    )
    search_fields = (
        'id', 'user_id',
    )
    readonly_fields = (
        'id', 'user_id',
    )


class OrderAdmin(admin.ModelAdmin):
    fields = (
        'id', 'cart_id', 'stage', 'is_called'
    )
    list_display = (
        'id', 'stage', 'is_called'
    )
    search_fields = (
        'id', 'stage', 'is_called'
    )
    readonly_fields = (
        'id',
    )


class ProductQuantityAdmin(admin.ModelAdmin):
    fields = (
        'id', 'cart_id', 'product_id', 'quantity'
    )
    list_display = (
        'id', 'cart_id', 'product_id', 'quantity'
    )
    search_fields = (
        'id', 'cart_id', 'product_id', 'quantity'
    )
    readonly_fields = (
        'id',
    )

admin.site.register(model_or_iterable=Cart, admin_class=CartAdmin)
admin.site.register(model_or_iterable=Order, admin_class=OrderAdmin)
admin.site.register(model_or_iterable=ProductQuantity, admin_class=ProductQuantityAdmin)