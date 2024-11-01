# How to Install and Run Chan-Bot Locally

This guide will walk you through the setup for running Chan-Bot on your local machine.

---

### Prerequisites

1. **Node.js** (version 16.6 or higher)
   - You can download Node.js from [https://nodejs.org/](https://nodejs.org/).

2. **Discord Bot Token**
   - Create a bot on the [Discord Developer Portal](https://discord.com/developers/applications).
   - Go to **Applications** > **New Application** > Give it a name and save.
   - In the **Bot** section, create a bot by selecting **Add Bot**. Save the token displayed here.
   - Under **Privileged Gateway Intents**, enable every permission available. This is needed for the bot to function properly

3. **Weather API Token**
   - Go to [Weatherstack](https://weatherstack.com/).
   - Create an account and generate a free API token.

---

### Step 1: Clone the Repository

Clone this repository to your local machine:

```bash
git clone https://github.com/davidchannn/chan-bot.git
cd <your-repo-folder>
```

### Step 2: Install Dependencies

Once inside the project directory, install all necessary packages:

```bash
npm install
```

### Step 3: Set Up Environment Variables

Create a `.env` file in the root directory. Add both the discord and weather tokens as follows:

```bash
DISCORD_KEY=<your-discord-token>
WEATHER_KEY=<your-weather-token>
```

Remember to include a `.gitignore` file that includes a `.env` if you plan on pushing your version of the code onto GitHub

### Step 4: Run the Bot

Start the bot with the following command:

```bash
node index.js
```

A message should pop up in the console, indicating that the bot is online.

### Step 5: Add the Bot to a Discord Server

Now that the bot is running, invite it to your server using the invite link from the Developer Portal. 

You can generate this link under OAuth2 > URL Generator by selecting bot under OAuth2 Scopes and setting the permissions you need.

Use the `!commands` command to display list of possible commands.
