from rest_framework import serializers

from tables.models import Table


class TableSerializer(serializers.ModelSerializer):
    class Meta:
        model = Table
        fields = ('id', 'Stu_Name', 'Physics',
                  'Chemistry', 'Maths', 'Com_Science', 'Total')
