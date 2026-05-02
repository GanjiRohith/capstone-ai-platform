$RESOURCE_GROUP="capstone-rg"

az group delete `
  --name $RESOURCE_GROUP `
  --yes `
  --no-wait

Write-Output "Resources deleted"