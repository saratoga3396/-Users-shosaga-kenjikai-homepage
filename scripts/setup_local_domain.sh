#!/bin/bash

# Define the domain and IP
DOMAIN="kenjikai.com"
IP="127.0.0.1"

# Check if the entry already exists
if grep -q "$DOMAIN" /etc/hosts; then
    echo "Entry for $DOMAIN already exists in /etc/hosts."
else
    echo "Adding $DOMAIN to /etc/hosts..."
    # Use sudo to append to /etc/hosts
    echo "$IP $DOMAIN" | sudo tee -a /etc/hosts > /dev/null
    
    if [ $? -eq 0 ]; then
        echo "Successfully added $DOMAIN to /etc/hosts."
    else
        echo "Failed to add entry. Please check your permissions."
        exit 1
    fi
fi

echo "You can now access the site at http://$DOMAIN:3000"
