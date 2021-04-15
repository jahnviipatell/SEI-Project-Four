from django.db import models

class Answer(models.Model):
    one = models.BooleanField(default=False)
    two = models.BooleanField(default=False)
    three = models.BooleanField(default=False)
    four = models.BooleanField(default=False)
    five = models.BooleanField(default=False)

    question = models.ForeignKey(
        "questions.Question",
        related_name="answers",   #what are the answers going to be called on the table?
        on_delete= models.CASCADE  #delete this answer if the question is deleted
    )

    owner = models.ForeignKey(
        "jwt_auth.User",
        related_name="answers",
        on_delete= models.CASCADE
    )