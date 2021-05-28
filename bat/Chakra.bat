@echo off
setlocal
set fn=%~dp0\_.vbs

REM this one-liner returns 0 only if hosted by "wscript.exe"
echo If(LCase(WScript.CreateObject("Scripting.FileSystemObject").GetFileName(WScript.FullName))="wscript.exe")Then:ret=0:Else:ret=1:WScript.Quit(ret) > %fn%
%fn% > nul 2>&1

if %errorlevel% equ 0 (
    del %fn%
    WChakra %*
) else (
    del %fn%
    CChakra %*
)
exit /b %errorlevel%