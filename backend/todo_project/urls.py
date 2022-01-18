from django.contrib import admin
from django.urls import path, include



urlpatterns = [
    path('admin/', admin.site.urls),
    # path('api/v1/', include('todo.urls')),
    # path('api/v2/', include('posts.urls')),
    path('api-auth/', include('rest_framework.urls')),
    path("api/v2/dj-rest-auth/", include('dj_rest_auth.urls')),
    path('api/v3/', include('authservice.urls')),

]




