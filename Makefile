.PHONY: install dev build build-marp preview lint lint-fix format format-check check test clean help

## -- Setup ----------------------------------------------

install: ## Install dependencies
	npm ci

## -- Development ----------------------------------------

dev: ## Start dev server with hot reload
	npm run docs:dev

build-marp: ## Build Marp presentation
	npm run build:marp

build: ## Build static site for production
	npm run docs:build

preview: ## Preview production build locally
	npm run docs:preview

## -- Quality ----------------------------------------------

lint: ## Lint markdown files
	npm run lint

lint-fix: ## Lint and auto-fix markdown files
	npm run lint:fix

format: ## Format all source files with Prettier
	npm run format

format-check: ## Check formatting without writing
	npm run format:check

check: lint format-check build ## Run all checks (lint + format + build)

test: ## Run Playwright E2E tests
	npm test

## -- Maintenance ----------------------------------------

clean: ## Remove build artifacts and caches
	rm -rf docs/.vitepress/cache docs/.vitepress/dist docs/public/presentation.html docs/public/images node_modules

## -- Help ----------------------------------------------

help: ## Show this help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | \
		awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2}'

.DEFAULT_GOAL := help
