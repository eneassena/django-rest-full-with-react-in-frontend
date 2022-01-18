from rest_framework import permissions


class BasePermisssion(object):

    def has_permission(self, request, view):

        return True

    def has_object_permission(self, request, view, obj):

        return True


class IsAuthorOrReadyOnly(BasePermisssion):

    def has_object_permission(self, request, view, obj) -> bool:
        if request.method in permissions.SAFE_METHODS:
            return True

        return obj.author == request.user
