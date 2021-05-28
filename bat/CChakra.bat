@echo off
if not "%~1"=="" (
    cscript //E:{1B7CD997-E5FF-4932-A7A6-2A9E636DA385} %*
) else (
    cscript
)
exit /b %errorlevel%