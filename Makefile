# Automated web development workflow with GNU Make
#
# This script automates your development workflow.
#
# See README for instructions

all: serve

clean:
	rm -rf dist

clean-deps: 
	rm -rf node_modules

bundle: webpack

webpack:
	webpack

serve:
	node server.js

watch:
	wr make

test:
	cucumber-js

lint:
	eslint src

install -g-prereqs:
	npm install -g wr 
	npm install -g http-server 
	npm install -g cucumber 
	npm install -g webpack 
	npm install -g browserify 
	npm install -g webmake 
	npm install -g eslint babel-eslint
