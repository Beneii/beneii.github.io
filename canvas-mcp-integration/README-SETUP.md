# Canvas MCP + Google Calendar Integration

## Quick Setup Guide

### 1. Get Your Canvas API Token
1. Log into Canvas → Account → Settings
2. Scroll to "Approved Integrations"
3. Click "New Access Token"
4. Copy the generated token

### 2. Get Your Canvas Domain
Your Canvas URL (e.g., `youruniversity.instructure.com`)

### 3. Set Up Google Calendar API
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Enable Google Calendar API
3. Create OAuth 2.0 credentials
4. Download the JSON file

### 4. Configure Environment Variables
Create a `.env` file in the `canvas-mcp` directory:

```env
CANVAS_API_TOKEN=your_token_here
CANVAS_DOMAIN=youruniversity.instructure.com
GOOGLE_CALENDAR_ID=your_email@gmail.com
GOOGLE_APPLICATION_CREDENTIALS=/path/to/credentials.json
```

### 5. Configure Your AI Assistant

#### For Claude Desktop:
Create `~/Library/Application Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "canvas": {
      "command": "node",
      "args": ["/workspace/canvas-mcp-integration/canvas-mcp/dist/index.js"],
      "env": {
        "CANVAS_API_TOKEN": "your_token_here",
        "CANVAS_DOMAIN": "youruniversity.instructure.com",
        "GOOGLE_CALENDAR_ID": "your_email@gmail.com",
        "GOOGLE_APPLICATION_CREDENTIALS": "/path/to/credentials.json"
      }
    }
  }
}
```

#### For Cursor:
Create `~/.cursor/mcp.json` with the same content as above.

### 6. Restart Your AI Assistant
Restart Claude Desktop or Cursor to load the new MCP configuration.

## Usage Examples

Once set up, you can ask:
- "When are my assignments due this week?"
- "Add my next assignment to Google Calendar"
- "Show me all my upcoming quizzes"
- "What's my current grade in CS101?"

## Troubleshooting

- **Token issues**: Regenerate your Canvas API token
- **Domain issues**: Check your Canvas URL format
- **Google Calendar**: Verify API is enabled and credentials are correct

## Security
- Never commit API tokens to version control
- Keep credentials secure
- Rotate tokens regularly
