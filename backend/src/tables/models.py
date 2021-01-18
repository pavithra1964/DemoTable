from django.db import models

from django.db import models


class Table(models.Model):
    Stu_Name = models.CharField(max_length=120)
    Physics = models.IntegerField(max_length=100)
    Chemistry = models.IntegerField()
    Maths = models.IntegerField()
    Com_Science = models.IntegerField()
    Total = models.Aggregate()

    def __str__(self):
        return self.Stu_Name

    