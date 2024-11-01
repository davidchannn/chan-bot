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
   - Under **Privileged Gateway Intents**, enable **Server Members Intent** if your bot will be welcoming members.

3. **Weather API Token**
   - Go to [Weatherstack](https://weatherstack.com/).
   - Create an account and generate a free API token.

---

### Step 1: Clone the Repository

Clone this repository to your local machine:

```bash
git clone <your-repo-url>
cd <your-repo-folder>
