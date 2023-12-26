from os import environ

from celery import Celery


environ.setdefault("DJANGO_SETTINGS_MODULE", "server.settings")

app = Celery('server')
app.config_from_object('django.conf:settings', namespace='CELERY')
app.autodiscover_tasks()