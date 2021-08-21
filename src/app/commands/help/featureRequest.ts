import { SlashCommand } from 'slash-create';

module.exports = class FeatureRequest extends SlashCommand {
	constructor(creator) {
		super(creator, {
			name: 'feature-request',
			description: 'Pull up the form to submit a new feature request',
			guildIDs: process.env.DISCORD_SERVER_ID,
			throttling: {
				usages: 2,
				duration: 1,
			},
		});

		this.filePath = __filename;
	}

	async run(ctx) {
		// Ignores commands from bots
		if (ctx.user.bot) return;
		console.log('/featureRequest start');
		const form = 'https://docs.google.com/forms/d/e/1FAIpQLSdTvYOyzF6A_YJKmco7iGeVDRzOBmJF2HfYKEiRnfATwcxjFw/viewform';
		console.log('/featureRequest end');
		return `Here you are ${ctx.user.mention}, the DEGEN feature request form: ${form}`;
	}
};