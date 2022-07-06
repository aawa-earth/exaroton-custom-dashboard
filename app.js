const fs = require('fs');
const config = JSON.parse(fs.readFileSync('config.json', 'utf8'))
const request = require('request');
const path = require('path');
const express = require("express");
const app = express();

