from django.db import models

# Create your models here.
class Product(models.Model):
    title = models.CharField(max_length=200, verbose_name="Articulo")
    description = models.TextField(verbose_name="Descripción")
    image = models.ImageField(verbose_name="Imagen", upload_to="tienda")
    price = models.CharField(max_length=12, verbose_name="Precio")
    created = models.DateTimeField(auto_now_add=True, verbose_name="Fecha de creación")
    updated = models.DateTimeField(auto_now=True, verbose_name="Fecha de modificación")
    
    def __str__(self) -> str:
        return self.title
        
    class Meta:
        verbose_name = 'producto'
        verbose_name_plural = 'productos'
        ordering = ["-created"]