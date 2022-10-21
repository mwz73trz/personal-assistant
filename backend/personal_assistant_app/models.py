from django.db import models
import datetime
from django.utils import timezone

class Contact(models.Model):
    first_name = models.CharField(max_length=25)
    last_name = models.CharField(max_length=25)
    address = models.CharField(max_length=50)
    city = models.CharField(max_length=25)
    state = models.CharField(max_length=2)
    zipcode = models.CharField(max_length=5)
    phone = models.CharField(max_length=12)
    email = models.EmailField()

    def __str__(self):
        return f'{self.first_name} {self.last_name}'

class Task(models.Model):
    title = models.CharField(max_length=25)
    description = models.CharField(max_length=200)
    completed = models.BooleanField(default=False)
    due = models.DateField()
    created = models.DateTimeField('date published')

    def was_created(self):
        now = timezone.now()
        return now - datetime.timedelta(days=1) <= self.created <= now

    def __str__(self):
        return f'{self.title}' 

class Note(models.Model):
    title = models.CharField(max_length=50)
    content = models.TextField()

    def __str__(self):
        return f'{self.title}'


