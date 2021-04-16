from django.contrib import admin

# Register your models here.
#? check docs to see why you import get_user_model for custom user
from django.contrib.auth import get_user_model

User = get_user_model()

admin.site.register(User)

#?check if user has token or not