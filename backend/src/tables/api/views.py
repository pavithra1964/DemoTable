from rest_framework import viewsets
from django.db.models import Sum, Avg
from tables.models import Table
from .serializers import TableSerializer


class TableViewSet(viewsets.ModelViewSet):
  serializer_class = TableSerializer
  queryset = Table.objects.all()
  queryset =Table.objects.all().annotate(Total=Sum('Physics') + Sum('Chemistry') + Sum('Maths') + Sum('Com_Science'))
 



