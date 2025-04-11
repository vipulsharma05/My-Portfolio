#!/usr/bin/env bash
set -o errexit

cd Portfolio
pip install -r requirements.txt
python manage.py collectstatic --no-input
python manage.py migrate
