#!/usr/bin/env bash
gatsby build
scp -r public rapuhotelli:/var/www/rapuhotelli.net
