from django.shortcuts import render


def internships(request):
    return render(request, 'internships.html')