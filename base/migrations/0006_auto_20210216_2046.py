# Generated by Django 3.1.6 on 2021-02-16 20:46

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0005_auto_20210216_2025'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='ShippingAdress',
            new_name='ShippingAddress',
        ),
        migrations.AddField(
            model_name='review',
            name='createdAt',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='product',
            name='image',
            field=models.ImageField(blank=True, default='/placeholder.png', null=True, upload_to=''),
        ),
    ]