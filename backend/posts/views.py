from django.shortcuts import render
from rest_framework import generics, permissions

from .serializers import PostSerializer
from .models import Post
from .permissions import IsAuthorOrReadyOnly


class PostList(generics.ListCreateAPIView):
	queryset = Post.objects.all()
	serializer_class = PostSerializer


class PostDetail(generics.RetrieveUpdateDestroyAPIView):
	permission_classes = (IsAuthorOrReadyOnly, )
	queryset = Post.objects.all()
	serializer_class = PostSerializer



