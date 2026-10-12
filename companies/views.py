from django.shortcuts import render
from .List import company


def companies(request):
    return render(request, 'companies.html', {'companies': company})

def company_detail(request, string):
    # Find the company with the matching slug
    company_data = next((c for c in company if c['slug'] == string), None)
    
    if company_data is None:
        # Handle case where company is not found
        return render(request, 'C_detail.html', {'company': None, 'error': 'Company not found'})
    
    return render(request, 'C_detail.html', {'company': company_data})
