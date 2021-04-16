from rest_framework import serializers
from django.contrib.auth import get_user_model, password_validation
from django.contrib.auth.hashers import make_password
from django.core.exceptions import ValidationError

User = get_user_model()

class UserSerializer(serializers.ModelSerializer):

    password = serializers.CharField(write_only=True) #! Don't return this in a response (write only)
    password_confirmation = serializers.CharField(write_only=True) #! Don't return this in a response

    def validate(self, data):
        #! Remove password and pw confirmation from the dict
        password = data.pop('password')
        password_confirmation = data.pop('password_confirmation')

        #! Check if passwords match - they are still in plain text format (not been hashed yet)
        if password != password_confirmation:
            raise ValidationError({'password':'passwords do not match'})

        #! Built in validation - error for pw length etc
        try:
            password_validation.validate_password(password=password)
        except ValidationError as err:
            raise ValidationError({'password': err.messages})

        #! Hash the password & add back to the dict
        data['password'] = make_password(password)

        return data

    class Meta:
        model = User
        fields ='__all__'
        # fields = ('id', 'username', 'password', 'password_confirmation')