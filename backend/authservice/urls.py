from django.urls import path
from rest_framework.authtoken import views



from .views import UsersAuth, CustomAuthToken


urlpatterns = [
    path('', UsersAuth.as_view()),
    path('api-token-auth2/', views.obtain_auth_token),
    path('api-token-auth/', CustomAuthToken.as_view()),
    
]
