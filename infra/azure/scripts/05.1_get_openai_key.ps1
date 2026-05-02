$RESOURCE_GROUP="capstone-rg"
$OPENAI_NAME="capstone-openai-123"

az cognitiveservices account keys list `
  --name $OPENAI_NAME `
  --resource-group $RESOURCE_GROUP