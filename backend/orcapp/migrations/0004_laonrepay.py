# Generated by Django 3.2.8 on 2024-04-02 18:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('orcapp', '0003_auto_20240402_2241'),
    ]

    operations = [
        migrations.CreateModel(
            name='laonrepay',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False)),
                ('paid', models.IntegerField()),
                ('left', models.IntegerField()),
                ('months_paid', models.IntegerField()),
                ('months_left', models.IntegerField()),
            ],
        ),
    ]
