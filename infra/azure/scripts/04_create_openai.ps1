$RESOURCE_GROUP="capstone-rg"
$OPENAI_NAME="capstone-openai-123"   # must be unique
$LOCATION="southeastasia"

az cognitiveservices account create `
  --name $OPENAI_NAME `
  --resource-group $RESOURCE_GROUP `
  --kind OpenAI `
  --sku S0 `
  --location $LOCATION `
  --custom-domain $OPENAI_NAME

Write-Output "Azure OpenAI Created with custom domain"