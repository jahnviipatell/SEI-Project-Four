from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound
# , PermissionDenied

from .serializers.common import AnswerSerializer
from .serializers.populated import PopulatedAnswerSerializer
from .models import Answer

from rest_framework.permissions import IsAuthenticated


class AnswerListView(APIView):
    permission_classes = (IsAuthenticated,)

    #!GET Request
    def get(self, _request):
        answers = Answer.objects.all()  # ! return everything from the db
        serialized_answers = PopulatedAnswerSerializer(
            answers, many=True)  # ! convert the data
        return Response(serialized_answers.data, status=status.HTTP_200_OK)

    #!POST Request
    def post(self, request):
        request.data["owner"] = request.user.id
        answer_to_add = AnswerSerializer(data=request.data)
        if answer_to_add.is_valid():
            answer_to_add.save()
            return Response(answer_to_add.data, status=status.HTTP_201_CREATED)
        return Response(answer_to_add.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

    #!DELETE Request
    def delete(self, request):
        request.data["owner"] = request.user.id
        answers = Answer.objects.all()
        answers.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class AnswerDetailView(APIView):

    def get_answer(self, pk):
        try:
            return Answer.objects.get(pk=pk)
        except Answer.DoesNotExist:
            raise NotFound(detail="🏝 Cannot find that answer")

    def get(self, _request, pk):
        answer = self.get_answer(pk=pk)
        serialized_answers = PopulatedAnswerSerializer(answer)
        return Response(serialized_answers.data, status=status.HTTP_200_OK)

    def delete(self, _request, pk):
        answer_to_delete = self.get_answer(pk=pk)
        answer_to_delete.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
