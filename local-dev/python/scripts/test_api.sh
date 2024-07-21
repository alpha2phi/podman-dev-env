CLIENT_ID=XXXX
CLIENT_SECRET=XXXX
SCOPE=api://87759cb8-2f70-4637-9227-a775b4a5961f/.default
TOKEN_URL=https://login.microsoftonline.com/57368c21-b8cf-42cf-bd0b-43ecd4bc62ae/oauth2/v2.0/token/
API_ENDPOINT=https://api-dev.dev.dev-cglcloud.com/api/dttservice/v1/app-service/digital-transaction/reports
JSON_FILE=test.json

token=$(curl -X POST -H "Content-Type: application/x-www-form-urlencoded;charset=UTF-8" \
	--data-urlencode "client_id=$CLIENT_ID" \
	--data-urlencode "client_secret=$CLIENT_SECRET" \
	--data-urlencode "grant_type=client_credentials" \
	--data-urlencode "scope=$SCOPE" \
	--silent \
	$TOKEN_URL |
	jq -r '.access_token')
# echo "token is $token"

output=$(
	curl \
		-X POST \
		-H "Authorization: Bearer $token" \
		-H "Content-Type: application/json" \
		-d "@$JSON_FILE" \
		--silent \
		$API_ENDPOINT | jq '.[]'
)

echo $output
