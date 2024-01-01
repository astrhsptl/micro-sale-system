import uuid

from django.db import models
from django.contrib.auth.models import (
	AbstractBaseUser, BaseUserManager,
)

# Create your models here.

class UserManager(BaseUserManager):
    def create_user(self, email, password=None, **other_fields):
        if email is None:
            raise TypeError("Users must have an email address.")


        user = self.model(email=self.normalize_email(email))
        
        for field, value in other_fields.items():
            if hasattr(user, field):
                setattr(user, field, value)

        user.set_password(password)
        user.save()

        return user

    def create_superuser(self, username, email, password):
        if password is None:
            raise TypeError("Superusers must have a password.")

        user = self.create_user(username, email, password)
        user.is_superuser = True
        user.is_staff = True
        user.private_access = True
        user.save()

        return user

class User(AbstractBaseUser):
    id = models.UUIDField(
        primary_key=True,
        db_index=True,
        default=uuid.uuid4,
        editable=False)
    
    # base information
    last_login = None

    first_name = models.CharField(verbose_name="First name", max_length=50, blank=False)
    last_name = models.CharField(verbose_name="Last name", max_length=50, blank=False)
    
    # in common information
    avatar = models.ImageField(verbose_name="Avatar", blank=True, upload_to="user/avatar")
    phone = models.CharField(verbose_name="Phone", max_length=30, blank=False)
    email = models.EmailField(verbose_name="Email", max_length=100, blank=False, unique=True)
    balance = models.FloatField(verbose_name="Balance", blank=False, default=0)

    # permission information
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    is_seller = models.BooleanField(default=False)

    # Auth settings
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = [
        "first_name", "last_name", "phone"
    ]

    objects: UserManager = UserManager()

    def has_perm(self, perm, obj=None):
        return self.is_superuser

    def has_module_perms(self, app_label):
        return self.is_superuser

    def __str__(self):
        return self.email

    class Meta:
        indexes = [
            models.Index(fields=["id"], name="id_index"),
        ]
