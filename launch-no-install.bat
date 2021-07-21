@echo off
title launch cake. server
cls
start http://localhost:3000/
:minimized
powershell -Command "& {node server.js}"
