# Runs your Flask DB init against Azure SQL
$SCRIPT_DIR = Split-Path -Parent $MyInvocation.MyCommand.Path
$PROJECT_ROOT = Resolve-Path "$SCRIPT_DIR\..\..\.."

Set-Location "$PROJECT_ROOT\backend"
python init_db.py

Write-Output "Tables created in Azure DB"