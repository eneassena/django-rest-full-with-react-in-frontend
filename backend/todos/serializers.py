from rest_framework import serializers as s

from .models import Todo, Cliente, Endereco


class TodoSerializer(s.HyperlinkedModelSerializer):
    class Meta:
        model = Todo
        fields = ('id', 'title', 'body')


class ClienteSerializer(s.HyperlinkedModelSerializer):
    class Meta:
        model = Cliente
        fields = ('id', 'nome', 'telefone')


class EnderecoSerializer(s.HyperlinkedModelSerializer):
    class Meta:
        model = Endereco
        fields = ('id', 'bairro', 'numero', 'complemento')
