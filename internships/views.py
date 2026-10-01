from django.shortcuts import render


def internships(request):
    return render(request, 'internships.html')
def check_internship(request):
    return render(request, 'check_internship.html')