from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound

#! User related imports
# from rest_framework.permissions import IsAuthenticatedOrReadOnly


from .models import Question
from .serializers.common import QuestionSerializer
# from .serializers.populated import PopulatedQuestionSerializer

class QuestionListView(APIView):
#!A get method is SAFE - so user can view without authentication/token
    #? so a post or put will ask for authentication
    #? Use IsAuthenticated OR AllowAny check docs 
    # permission_classes = (IsAuthenticatedOrReadOnly,)

#!GET Request
    def get(self, _request):
        questions = Question.objects.all() #! return everything from the db
        serialized_questions = QuestionSerializer(questions, many=True) #! convert the data
        return Response(serialized_questions.data, status=status.HTTP_200_OK)

class QuestionDetailView(APIView):

    def get_holiday(self, pk):
        try:
            return Question.objects.get(pk=pk)
        except Question.DoesNotExist:
            raise NotFound(detail="🏝 Cannot find that question")

    def get(self, _request, pk):
        question = self.get_holiday(pk=pk)
        serialized_questions = QuestionSerializer(question)
        return Response(serialized_questions.data, status=status.HTTP_200_OK)

    