# Generated by Django 3.2.8 on 2024-04-02 17:11

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('orcapp', '0002_rename_student_creditinformation'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='creditinformation',
            name='age',
        ),
        migrations.RemoveField(
            model_name='creditinformation',
            name='duration',
        ),
        migrations.RemoveField(
            model_name='creditinformation',
            name='transaction_count',
        ),
    ]