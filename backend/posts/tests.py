from django.test import TestCase
from django.contrib.auth.models import User

from posts.models import Post




class BlogTests(TestCase):
	@classmethod
	def setUpTestData(cls):
		# Create User
		usersilva1 = User.objects.create(username='silva1', password='123456')
		
		# Create a Blog Post
		post = Post.objects.create(author=usersilva1, title='Blog Title', body='Context Exemple Text')

	def test_body_content(self):
		post = Post.objects.filter(id=1)[0]

		author = f"{post.author.username}"
		title = f"{post.title}"
		body = f"{post.body}"

		self.assertEquals(author, 'silva1')
		self.assertEquals(title, 'Blog Title')
		self.assertEquals(body, 'Context Exemple Text')

	def test_title_content(self):
		post = Post.objects.filter(id=1)[0]
		title = post.title
		self.assertEquals(title, 'Blog Title')
