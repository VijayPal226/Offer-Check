from django.urls import path
from . import views

urlpatterns = [
    path('', views.training, name='training'),
    path('check/', views.training_check, name='training_check'),
]