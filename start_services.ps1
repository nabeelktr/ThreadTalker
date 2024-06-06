# Start the first Node.js server in the background
Start-Process -FilePath "npm" -ArgumentList "start" -WorkingDirectory "/Users/mac/vscode/spyne/api-gateway" -NoNewWindow -PassThru | Out-Null
Start-Process -FilePath "npm" -ArgumentList "start" -WorkingDirectory "/Users/mac/vscode/spyne/user-service" -NoNewWindow -PassThru | Out-Null
Start-Process -FilePath "npm" -ArgumentList "start" -WorkingDirectory "/Users/mac/vscode/spyne/auth-service" -NoNewWindow -PassThru | Out-Null
Start-Process -FilePath "npm" -ArgumentList "start" -WorkingDirectory "/Users/mac/vscode/spyne/discussion-service" -NoNewWindow -PassThru | Out-Null






