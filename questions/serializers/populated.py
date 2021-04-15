from answers.serializers.populated import PopulatedAnswerSerializer
# from airline_options.serializers.common import AirlineOptionSerializer
from ..serializers.common import QuestionSerializer

# from jwt_auth.serializers.common import UserSerializer

class PopulatedQuestionSerializer(QuestionSerializer):
    
    answers = PopulatedAnswerSerializer(many=True)
    # airline_options = AirlineOptionSerializer(many=True)
    # owner = UserSerializer()