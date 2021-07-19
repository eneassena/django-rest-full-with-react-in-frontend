from rest_framework import generics as g  # modulo de classes de api
from .serializers import TodoSerializer, EnderecoSerializer, \
    ClienteSerializer  # serialização do dados
from .models import Todo, Cliente, Endereco  # Model


# Model Todo
class ListTodo(g.ListAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer


# Model Todo
class DetailTodo(g.RetrieveAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

# Model Cliente
class ListCliente(g.ListAPIView):
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer
# Model Cliente
class DetailCliente(g.RetrieveAPIView):
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer

# Model Endereco
class ListEndereco(g.ListAPIView):
    queryset = Endereco.objects.all()
    serializer_class = EnderecoSerializer

# Model Endereco
class DetailEndereco(g.RetrieveAPIView):
    queryset = Endereco.objects.all()
    serializer_class = EnderecoSerializer
