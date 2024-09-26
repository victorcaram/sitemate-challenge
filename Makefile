help:
	@echo 'Available commands:'
	@echo ''
	@echo 'setup-server ..................... Installs dependencies for the backend'
	@echo 'setup-client ..................... Installs dependencies for the frontend'
	@echo 'test-server ...................... Runs server tests'
	@echo 'run-server ....................... Runs the webserver'
	@echo 'run-client ....................... Runs the React client'
	@echo 'run .............................. Runs both the webserver and the client'
	@echo 'clean ............................ Removes cached files'
	@echo ''

setup-server:
	cd server && pip install -r server/requirements.txt

setup-client:
	cd client && yarn install

clean:
	@find . -name *.pyc -delete
	@find . -name __pycache__ -delete
	rm -rf client/node_modules

test-server:
	cd server && python manage.py test

run-server:
	cd server && python manage.py runserver

run-client:
	cd client && yarn start

run:
	@make -j2 run-server run-client
