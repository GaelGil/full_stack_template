# Simple Makefile for backend application using uv

# Variables
PORT ?= 8080
HOST ?= 0.0.0.0

# Install dependencies using uv
.PHONY: install
install:
	@echo "Installing dependencies with uv..."
	.venv/bin/uv sync

# Run the application
.PHONY: run
run:
	@echo "Starting application..."
	.venv/bin/python main.py