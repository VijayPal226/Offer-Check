from django.urls import path
from . import views

urlpatterns = [
    path('', views.internships, name='internships'),
    path('check/', views.check_internship, name='check_internship'),
]
