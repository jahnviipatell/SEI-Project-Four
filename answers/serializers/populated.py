# When a comment is added it will run through here first
from jwt_auth.serializers.common import UserSerializer
from .common import AnswerSerializer

class PopulatedAnswerSerializer(AnswerSerializer):
    owner = UserSerializer()