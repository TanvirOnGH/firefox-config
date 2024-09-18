#!/bin/sh

# Script to download the latest version of a Firefox addon

show_usage() {
	echo "Usage: $0 <plugin-name>"
	echo "Example: $0 ublock-origin"
	exit 1
}

if [ -z "$1" ]; then
	show_usage
fi

PLUGIN_NAME="$1"
URL="https://addons.mozilla.org/firefox/downloads/latest/$PLUGIN_NAME/latest.xpi"
OUTPUT_FILE="${PLUGIN_NAME}.xpi"

echo "Downloading the latest version of $PLUGIN_NAME..."
curl -L -o "$OUTPUT_FILE" "$URL"

if [ $? -eq 0 ]; then
	echo "Downloaded successfully: $OUTPUT_FILE"
else
	echo "Failed to download the addon."
	exit 1
fi
