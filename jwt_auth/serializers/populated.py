from answers.serializers.common import AnswerSerializer
from questions.serializers.common import QuestionSerializer
from ..serializers.common import UserSerializer


class PopulatedUserSerializer(UserSerializer):
    answers = AnswerSerializer(many=True)
