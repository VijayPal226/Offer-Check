from django.urls import path
from . import views

urlpatterns = [
    path('', views.internships, name='internships'),
    path('check/', views.check_internship, name='check_internship'),
    path('detail/<slug:internship_slug>/', views.internship_detail, name='internship_detail'),
]
