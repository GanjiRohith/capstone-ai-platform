$RESOURCE_GROUP="capstone-rg"
$LOCATION="southeastasia"

az group create `
  --name $RESOURCE_GROUP `
  --location $LOCATION

Write-Output "Resource Group Created in Southeast Asia"