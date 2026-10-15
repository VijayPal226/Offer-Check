from django.shortcuts import render, get_object_or_404
from companies.List import paid_internships

def internships(request):
    return render(request, 'internships.html', {'intern': paid_internships})

def check_internship(request):
    return render(request, 'check_internship.html')

def internship_detail(request, internship_slug):
    for item in paid_internships:
        if item['slug'] == internship_slug:
            return render(request, 'intership_detail.html', {'internship': item})
    return render(request, 'error 404.html', status=404)
    
