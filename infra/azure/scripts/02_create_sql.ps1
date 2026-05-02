$RESOURCE_GROUP="capstone-rg"
$LOCATION="southeastasia"

$SERVER_NAME="capstone-sql-server-123"
$DB_NAME="capstone-db"
$ADMIN_USER="capstoneadmin"
$ADMIN_PASS="Rohith@7"

az sql server create `
  --name $SERVER_NAME `
  --resource-group $RESOURCE_GROUP `
  --location $LOCATION `
  --admin-user $ADMIN_USER `
  --admin-password $ADMIN_PASS

az sql db create `
  --resource-group $RESOURCE_GROUP `
  --server $SERVER_NAME `
  --name $DB_NAME `
  --service-objective Basic

az sql server firewall-rule create `
  --resource-group $RESOURCE_GROUP `
  --server $SERVER_NAME `
  --name AllowAll `
  --start-ip-address 0.0.0.0 `
  --end-ip-address 0.0.0.0

Write-Output "SQL Created in Southeast Asia"