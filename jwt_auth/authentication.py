from rest_framework.authentication import BasicAuthentication
from rest_framework.exceptions import PermissionDenied
from django.contrib.auth import get_user_model
from django.conf import settings

import jwt 

User = get_user_model()

class JWTAuthentication(BasicAuthentication):

    def authenticate(self, request):
        #! get token from the request 
        header = request.headers.get('Authorization')
        #! if headers do not exist return none
        if not header:
            return None
        
        #! check format of header - if token is in the wrong format throw an error
        if not header.startswith('Bearer'):
            raise PermissionDenied(detail='Invalid Auth token')

        #! To remove Bearer AND the space after it, to leave just the token
        token = header.replace('Bearer ', '')

        #! Take secret key from settings.py - get payload from the token
        try:
            payload = jwt.decode(token, settings.SECRET_KEY, algorithms=['HS256'])
            #! Get user from the db using sub from the payload
            user = User.objects.get(pk=payload.get('sub'))
            #! Check the token is valid
        except jwt.exceptions.InvalidTokenError:
            raise PermissionDenied(detail='Invalid token')
            #! Check the user is valid
        except User.DoesNotExist:
            raise PermissionDenied(detail='User Not Found')

        #! If everything above is okay then return this..
        return (user, token)