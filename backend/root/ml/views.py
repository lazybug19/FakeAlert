from django.shortcuts import render

def PredictView(request):
    return render(request, 'predict.html')

