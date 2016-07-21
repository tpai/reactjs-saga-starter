#!/usr/bin/make -f
IMAGE := $(shell basename $(shell pwd))
WHO := $(shell whoami)
VERSION := latest

all: build push
build:
	docker build -t=$(WHO)/$(IMAGE) .
push:
	docker push $(WHO)/$(IMAGE)
