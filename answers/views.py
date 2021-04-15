from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound
# , PermissionDenied

from .serializers.common import AnswerSerializer
from .models import Answer

from rest_framework.permissions import IsAuthenticated

class AnswerListView(APIView):
    permission_classes = (IsAuthenticated)

    def post(self, request):
        request.data["owner"] = request.user.id
        answer_to_add = AnswerSerializer(data=request.data)
        if answer_to_add.is_valid():
            answer_to_add.save()
            return Response(answer_to_add.data, status=status.HTTP_201_CREATED)
        return Response(answer_to_add.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)


# class CommentDetailsView(APIView):

# #! Delete Single Comment
#     def delete(self, request, pk):
#         try:
#             comment_to_delete = Answer.objects.get(pk=pk)
#         except Answer.DoesNotExist:
#             raise NotFound()
#         if comment_to_delete.owner != request.user:
#             raise PermissionDenied()
#         comment_to_delete.delete()
#         return Response(status=status.HTTP_204_NO_CONTENT)