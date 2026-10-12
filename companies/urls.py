from django.urls import path
from . import views

urlpatterns = [
    path('', views.companies, name='companies'),
    path('<str:string>/', views.company_detail, name='company_detail'),
]