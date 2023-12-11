from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request, "core/home.html")

def adopta(request):
    return render(request, "core/adopta.html")

def reserva(request):
    return render(request, "core/reserva.html")

def contacto(request):
    return render(request, "core/contacto.html")