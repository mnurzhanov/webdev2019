from  django.shortcuts import render
from django.http import HttpResponse

def resume(request):
    return HttpResponse('<h1>Create your own resume</h1>')