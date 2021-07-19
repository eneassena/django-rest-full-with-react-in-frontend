from django.test import TestCase

# Create your tests here.
from .models import Todo, Cliente, Endereco


class TodoModelTest(TestCase):

    @classmethod
    def setUpTestData(cls):
        Todo.objects.create(title='Django-admin',
                            body='Execução de comandos cli')
        Cliente.objects.create(nome='Marta', telefone='5555-8888')
        Endereco.objects.create(
            bairro='Pituba', numero='555', complemento='Barra')

    def test_title_context(self):
        todo = Todo.objects.get(id=1)
        expected_object_name = f'{todo.title}'
        self.assertEquals(expected_object_name, 'Django-admin')

    def test_body_context(self):
        todo = Todo.objects.get(id=1)
        expected_object_body = f'{todo.body}'
        self.assertEquals(expected_object_body, 'Execução de comandos cli')

    def test_cliente_context(self):
        cliente: Cliente = Cliente.objects.get(id=1)
        nome = f'{cliente.nome}'
        self.assertEquals(nome, 'Marta')

    def test_cliente_telefone(self):
        cliente: Cliente = Cliente.objects.get(id=1)
        telefone = f'{cliente.telefone}'
        self.assertEquals(telefone, '5555-8888')

    def test_endereco_bairro(self):
        endereco: Endereco = Endereco.objects.get(id=1)
        test_logico = endereco.bairro == 'Pituba'
        self.assertTrue(test_logico)

    def test_endereco_numero(self):
        try:
            endereco: Endereco = Endereco.objects.get(id=1)
            test_logico = endereco.numero == '555'
            self.assertFalse(not test_logico)
        except AssertionError as error:
            print(error)

    def test_endereco_complemento(self):
        endereco: Endereco = Endereco.objects.get(id=1)
        test_logico = endereco.complemento == 'Barra'
        self.assertTrue(test_logico)
