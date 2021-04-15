from django.urs import path
from .views import AnswerListView

urlpatterns = [
    path('', AnswerListView.as_view())
]