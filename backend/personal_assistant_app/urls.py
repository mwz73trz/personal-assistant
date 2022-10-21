from django.urls import path
from .views import *
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('contacts', ContactViewSet, basename='contact')
router.register('tasks', TaskViewSet, basename='task')
router.register('notes', NoteViewSet, basename='note')

urlpatterns = router.urls
