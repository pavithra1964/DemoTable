from tables.api.views import TableViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', TableViewSet, basename='tables')
urlpatterns = router.urls
