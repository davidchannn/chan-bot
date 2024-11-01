How to Install and Run Chan-Bot Locally

Prerequisites:
Node.js (version 16.6 or higher) - Download Node.js
Discord Bot Token - Create a bot on the Discord Developer Portal, get the bot token, and enable required intents.
Weather API Token - Go to https://weatherstack.com/ and create a new account. Create a new API token for free.

Step 1: Clone the Repository
First, clone the repository to your local machine:

`git clone <your-repo-url>`
`cd <your-repo-folder>`

Step 2: Install Dependencies
In the <your-repo-folder> directory, install all necessary packages:
`npm install`

Step 3: Set Up Environment Variables
Create a .env file in the root directory of the project and add both of your tokens:
DISCORD_KEY=your-bot-token-here
WEATHER_KEY=your-weather-token-here

Step 4: Run the Bot
Start the bot with the following command:
node index.js

You should see a message in the console like Logged in as <bot-name>!, indicating that the bot is online.

Step 5: Test the Bot in Discord
Invite the bot to your server using the invite link from the Developer Portal, and test its commands in a channel.
Here are all available commands:
  - !hello: Prints 'Hello, World!' to the current channel
  - !commands: Display all available commands
  - !announce <message>: Send a message to the #announcements channel if it's available
  - !weather <city>: Display soome stats about the weather at <city> if it is valid
