from django.shortcuts import render


def training(request):
    return render(request, 'training.html')


def training_check(request):
    return render(request, 'training_check.html')