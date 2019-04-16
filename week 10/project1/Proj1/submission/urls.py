from django.urls import path, include
from submission import views

urlpatterns = [
    path('submission/', views.submission)
]