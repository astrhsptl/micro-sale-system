from django.contrib import admin

from .models import User


class UserAdmin(admin.ModelAdmin):
    fields = (
        'id', 'first_name', 'last_name',
        'avatar', 'phone', "email", "balance",
        "is_active", "is_staff", "is_superuser", "is_seller"
    )
    list_display = (
        'id', 'first_name', 'last_name', "email",
        "is_active", "is_staff", "is_superuser", "is_seller"
    )
    search_fields = (
        'id', 'first_name', 'last_name', "email",
        "is_active", "is_staff", "is_superuser", "is_seller"
    )
    readonly_fields = (
        'id', 
    )

admin.site.register(model_or_iterable=User, admin_class=UserAdmin)