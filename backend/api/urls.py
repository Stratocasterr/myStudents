from . import views
from django.urls import path

urlpatterns = [
    path('' ,views.getRoutes, name="routes" ),
    path('students/' ,views.getStudents, name="get-students" ),
    path('students/<str:pk>/', views.getStudent, name = "get-student"),
    path('student/add/', views.addStudent, name="add-student" ),
    path('students/<str:pk>/remove/', views.removeStudent, name = "remove-student"),
    path('students/<str:pk>/update/', views.updateStudent, name = "update-student")
]
