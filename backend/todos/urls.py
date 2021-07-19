from django.urls import path
from .views import ListTodo, DetailTodo, \
    ListCliente, DetailCliente, \
    ListEndereco, DetailEndereco

urlpatterns = [
    path('todos/', ListTodo.as_view()),
    path('todos/<int:pk>/show', DetailTodo.as_view()),
    path('clientes/', ListCliente.as_view()),
    path('clientes/<int:pk>/show', DetailCliente.as_view()),
    path('enderecos/', ListEndereco.as_view()),
    path('enderecos/<int:pk>/show', DetailEndereco.as_view())
]
