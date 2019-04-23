from django.urls import path, include
from resume import views

urlpatterns = [
    path('resume/', views.resume)
]