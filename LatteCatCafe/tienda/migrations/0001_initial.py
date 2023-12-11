# Generated by Django 5.0 on 2023-12-10 00:24

from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Product",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("title", models.CharField(max_length=200)),
                ("description", models.TextField()),
                ("image", models.ImageField(upload_to="")),
                ("created", models.DateTimeField(auto_now_add=True)),
                ("upgrade", models.DateTimeField(auto_now=True)),
            ],
        ),
    ]
