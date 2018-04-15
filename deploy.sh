#!/usr/bin/env bash
gastby build
scp -r public rapuhotelli:/var/www/rapuhotelli.net
