# =========================
# Get project root
# =========================
$SCRIPT_DIR = Split-Path -Parent $MyInvocation.MyCommand.Path
$PROJECT_ROOT = Resolve-Path "$SCRIPT_DIR\..\..\.."

$ENV_PATH = "$PROJECT_ROOT\backend\.env"

# =========================
# DATABASE CONFIG
# =========================
$SERVER="capstone-sql-server-123.database.windows.net"
$DB="capstone-db"
$USER="capstoneadmin"
$PASS="YourPassword123!"

$DB_CONN = "mssql+pyodbc://{0}:{1}@{2}:1433/{3}?driver=ODBC+Driver+17+for+SQL+Server" -f $USER, $PASS, $SERVER, $DB

# =========================
# OPENAI CONFIG
# =========================
$OPENAI_ENDPOINT="https://capstone-openai-123.openai.azure.com/"
$OPENAI_DEPLOYMENT="capstone-gpt"

# 👉 paste your key here
$OPENAI_KEY="PASTE_YOUR_KEY_HERE"

# =========================
# WRITE ENV FILE (UTF-8 FIX)
# =========================

# Remove old file if exists
if (Test-Path $ENV_PATH) {
    Remove-Item $ENV_PATH
}

# Write fresh file (UTF-8)
Set-Content -Path $ENV_PATH -Value @"
SECRET_KEY=supersecretkey
DATABASE_URL=$DB_CONN
AZURE_OPENAI_ENDPOINT=$OPENAI_ENDPOINT
AZURE_OPENAI_DEPLOYMENT=$OPENAI_DEPLOYMENT
AZURE_OPENAI_API_KEY=$OPENAI_KEY
"@ -Encoding utf8

Write-Output ".env created successfully (UTF-8)"