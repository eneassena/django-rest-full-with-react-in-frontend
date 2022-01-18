from django.shortcuts import render
from rest_framework import generics, permissions

from .serializers import PostSerializer
from .models import Post


class PostList(generics.ListCreateAPIView):
	permission_classes = (permissions.IsAdminUser,)
	queryset = Post.objects.all()
	serializer_class = PostSerializer


class PostDetail(generics.RetrieveUpdateDestroyAPIView):
	# permission_classes = (permissions.IsAuthenticated, )
	queryset = Post.objects.all()
	serializer_class = PostSerializer



