# see /usr/share/doc/bash/examples/startup-files for examples.
# the files are located in the bash-doc package.

if [ -n "$BASH_VERSION" ]; then
	if [ -f "$HOME/.bashrc" ]; then
		. "$HOME/.bashrc"
	fi
fi

if [ -d "$HOME/bin" ]; then
	PATH="$HOME/bin:$PATH"
fi

if [ -d "$HOME/.local/bin"]; then
	PATH="$HOME/.local/bin:$PATH"
fi

export DOCKER_BUILDKIT=1
