from django.db import models

class Question(models.Model):
    question = models.CharField(max_length=100)
    question_number = models.PositiveIntegerField()
    extroversion = models.BooleanField(default=False)
    agreeableness = models.BooleanField(default=False)
    conscientiousness = models.BooleanField(default=False)
    neuroticism = models.BooleanField(default=False)
    openness_to_experience = models.BooleanField(default=False)

    owner = models.ForeignKey(
        'jwt_auth.User',
        related_name= 'user_answers', #! Use this name on the other model to display all answers under owner?
        on_delete = models.CASCADE
    )

    def __str__(self):
        return f"{self.question_number}, {self.question}"