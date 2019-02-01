destroy:
	docker rmi kotlinify-js-image
.PHONY: destroy

build:
	docker build -t kotlinify-js-image .
.PHONY: build

run:
	docker run -p 8080:8080 -it --name kotlinify-js --rm -v $(shell pwd):/app -v ~/.ssh:/root/.ssh kotlinify-js-image bash
.PHONY: run
