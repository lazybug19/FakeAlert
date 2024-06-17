from django.urls import path
from .views import PredictView

urlpatterns = [
    path('api/', PredictView.as_view(), name='predict'),
]