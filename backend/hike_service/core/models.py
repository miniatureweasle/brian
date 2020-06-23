from django.db import models


class Hike(models.Model):
    name = models.TextField()
    popularity = models.IntegerField()