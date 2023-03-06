from django.db import models

class Student(models.Model):
    name = models.CharField(default = 'student', max_length=30)
    school = models.CharField( max_length=30, default = 'Highschool')
    salary = models.IntegerField(default=70)
    body = models.TextField(max_length=100, default = '')
    single_lesson_time = models.IntegerField(default = 60)
    lessons_times = models.CharField( max_length=70)
    unpaid_time = models.IntegerField(default=0)
    holydays = models.BooleanField()
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.body[0:50]