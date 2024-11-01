export const sendCommands = (message) => {
    const availableCommands = {
        '**!hello**': 'Greets the user with a friendly message',
        '**!announce <message>**': 'Sends an announcement to the announcements channel through Chan Bot',
        '**!commands**': 'Displays all available commands',
        '**!weather <city>**': 'Show some stats about the weather in <city>'
    };

    const commandDescriptions = Object.entries(availableCommands)
        .map(([command, description]) => `- ${command}: ${description}`)
        .join('\n');
    message.channel.send(`List of available commands:\n${commandDescriptions}`);
}

export const welcomeNewUser = (member) => {
    const channel = member.guild.channels.cache.find(channel => channel.name === 'welcome');

    if (channel) {
        channel.send(`Welcome to the Chungus Super Club ${member.user.username}!!1!`);
    } else {
        message.reply("Couldn't locate welcome channel");
    }
}

export const announceMessage = (message) => {
    const announcementChannel = message.guild.channels.cache.find(channel => channel.name === 'announcements');
    if (announcementChannel) {
        announcementChannel.send(`**---------- MESSAGE FROM ${message.author.username}: ----------**\n${message.content.slice(9).trim()}`);
    } else {
        message.reply('Unable to locate announcements channel');
    }
}

export const getWeather = (message, weatherKey) => {
    const cityName = message.content.split(" ").slice(1).join(" ");
    const logIn = async (cityName) => {
        const response = await fetch(`http://api.weatherstack.com/current?access_key=${weatherKey}&query=${cityName}`);
        if (!response.ok) {
            throw new Error("Something went wrong");
        }

        const data = await response.json();
        if (data.error) {
            message.reply('Invalid City, check the spelling and try again!');
        }
        return data;
    };

    const printInformation = (weather) => {
        message.reply(
            "Location: " + weather.location.name + ", " + weather.location.country + "\n" +
            "Latitude: " + weather.location.lat + "\n" +
            "Longitude: " + weather.location.lon + "\n" +
            "Temperature: " + weather.current.temperature + " C." + "\n" +
            "UV Index: " + weather.current.uv_index + "\n" +
            "Wind Speeds: " + weather.current.wind_speed + "mph\n"
        );
    };

    logIn(cityName)
        .then((data) => printInformation(data))
        .catch((error) => {
            message.reply('Something went wrong. Try again soon.');
            console.error("Error: " + error)
        });
}