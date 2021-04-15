from django.db import models

class Question(models.Model):
    question = models.CharField(max_length=100)
    question_number = models.PositiveIntegerField()
    extroversion = models.BooleanField(default=False)
    agreeableness = models.BooleanField(default=False)
    conscientiousness = models.BooleanField(default=False)
    neuroticism = models.BooleanField(default=False)
    openness_to_experience = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.question_number}, {self.question}"