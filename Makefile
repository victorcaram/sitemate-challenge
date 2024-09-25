help:
	@echo 'Available commands:'
	@echo ''
	@echo 'setup-server ..................... Installs dependencies for the backend'
	@echo 'test-server ...................... Runs server tests'
	@echo 'run-server ....................... Runs the webserver'
	@echo 'clean ............................ Removes cached files'
	@echo ''

setup-server:
	pip install -r server/requirements.txt

clean:
	@find . -name *.pyc -delete
	@find . -name __pycache__ -delete

test-server:
	cd server && python manage.py test

run-server:
	cd server && python manage.py runserver