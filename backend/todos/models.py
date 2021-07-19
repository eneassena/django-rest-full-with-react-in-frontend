from django.db import models

# Create your models here.


class Todo(models.Model):
    title = models.CharField(max_length=200)
    body = models.TextField()

    def __str__(self):
        return self.title


class Cliente(models.Model):
    nome = models.CharField(max_length=200)
    telefone = models.CharField(max_length=200)

    def __str__(self):
        return self.nome


class Endereco(models.Model):
    bairro = models.CharField(max_length=200)
    numero = models.CharField(max_length=50)
    complemento = models.CharField(max_length=200)

    def __str__(self):
        return self.bairro
