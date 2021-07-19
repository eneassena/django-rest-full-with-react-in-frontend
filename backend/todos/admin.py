from django.contrib import admin
from .models import Todo, Cliente, Endereco


# Register your models here.
admin.site.register(Todo)
admin.site.register(Cliente)
admin.site.register(Endereco)
