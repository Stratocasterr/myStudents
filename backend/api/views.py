from django.shortcuts import render
from rest_framework.response import Response 
from rest_framework.decorators import api_view
from .models import Student
from .serializers import StudentSerializer

@api_view(['GET'])
def getRoutes(request):
    routes = [
        {
            'Endpoint': 'students/',
            'method':'GET',
            'body':None,
            'description':'take all students'
        }
    ]
    return Response(routes)

@api_view(['GET'])
def getStudents(request):
    students = Student.objects.all()
    serializer = StudentSerializer(students, many = True)
    return Response(serializer.data)


@api_view(['GET'])
def getStudent(request, pk):
    student = Student.objects.get(id = pk)
    serializer = StudentSerializer(student, many = False)
    return Response(serializer.data)

@api_view(['POST'])
def addStudent(request):
    data = request.data
    student = Student.objects.create(
        name = data['name'],
        school = data['school'],
        salary = data['salary'],
        body = data['body'],
        single_lesson_time = data['single_lesson_time'],
        lessons_times = data['lessons_times'],
        unpaid_time = data['unpaid_time'],
        holydays = data['holydays'] 
    )
    serializer = StudentSerializer(student, many = False)
    return Response(serializer.data)

@api_view(['DELETE'])
def removeStudent(request, pk):
    data = request.data
    student = Student.objects.get(id = pk)
    student.delete()
    return Response('student removed')

@api_view(['PUT'])
def updateStudent(request, pk):
    data = request.data
    student = Student.objects.get(id = pk)
    serializer = StudentSerializer(instance = student, data = data)
    if serializer.is_valid():
        serializer.save()
    return Response('student updated')