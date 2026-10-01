
# Create your views here.
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from django.contrib.auth.views import LoginView
from django.contrib import messages
from django.contrib.auth.models import User
from django.urls import reverse_lazy



def home(request):
    return render(request, "home.html")

def about(request):
    return render(request, "about.html")

class UserLoginView(LoginView):
    template_name = "login.html"
    success_url = reverse_lazy("home")

    def dispatch(self, request, *args, **kwargs):
        if request.user.is_authenticated:
            return redirect("home")
        return super().dispatch(request, *args, **kwargs)

def register(request):
    if request.method == "POST":
        username = request.POST.get("username")
        email = request.POST.get("email")
        password = request.POST.get("password")
        passwordconfirm = request.POST.get("confirm_password")
        
        if password != passwordconfirm:
            messages.warning(request, "Passwords do not match")
            return render(request, "register.html")
        
        if User.objects.filter(username=username).exists():
            messages.warning(request, "Username already exists")
            return render(request, "register.html")
        
        user = User.objects.create_user(username=username, email=email, password=password)
        messages.success(request, "User created successfully")
        
    return render(request, "register.html")


