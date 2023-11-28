#!/bin/bash

# install google-font-installer globally
npm add -g google-font-installer npm-name-cli

# install Poetry to manage Python projects and Ruff for formatting/linting
pip install poetry

# install Node packages
pnpm install

# create the virtualenv locally
poetry config virtualenvs.in-project true --local

# install Python packages
poetry install --no-root

# download Go dependencies
bash .devcontainer/scripts/util/install_go_dependencies.sh

# download fonts for Typst
bash .devcontainer/scripts/util/install_fonts.sh
