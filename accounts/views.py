
# Create your views here.
from django.shortcuts import render
from django.contrib import messages
from .models import User



def home(request):
    return render(request, "home.html")

def about(request):
    return render(request, "about.html")

def userlogin(request):
    return render(request,"login.html")

def register(request):
    if request.method == "POST":
        username=request.POST.get("username")
        email=request.POST.get("email")
        password=request.POST.get("password")
        passwordconfirm=request.POST.get("passwordconfirm")
        if password != passwordconfirm:
            messages.warning(request, "Passwords do not match")
            return render(request, "register.html")
        else:
            user = User.objects.create_user(username=username, email=email, password=password)
            user.save()
            messages.success(request, "User created successfully")
        
    return render(request, "register.html")
