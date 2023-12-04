export const unrevealedByTokenId = (tokenId: number) => {
	const unrevealedData = (unrevealedMetadata.tokens as any)[tokenId.toString()];
	if (!unrevealedData) return null;
	const copied = JSON.parse(JSON.stringify(unrevealedData));
	copied.part = copied.types[unrevealedData.typeIdx.toString()];
	delete copied.typeIdx;
	return copied;
};

export const unrevealedMetadata = {
	types: {
		"1": "Arm",
		"2": "Engine",
		"3": "Head",
		"4": "Body",
		"5": "Leg",
	},
	tokens: {
		"1": {
			tokenId: 1,
			typeIdx: 1,
			name: "Enforcer Model Arm",
			description:
				"Scrapped arm of an Enforcer Model TPL Mecha. Salvageable as either right or left attachment.",
			model: "Enforcer",
			image: "ipfs://QmU8ie4wzvd6GzJdXN3ySNTd2oraTVmNs2PurDD99ak5d1",
		},
		"2": {
			tokenId: 2,
			typeIdx: 1,
			name: "Lupis Model Arm",
			description:
				"Scrapped arm of a Lupis Model TPL Mecha. Salvageable as either right or left attachment.",
			model: "Lupis",
			image: "ipfs://QmSFjFgCpUbVyrAdkefBzdsaapMQAfRm64UbR7ykEw6gk6",
		},
		"3": {
			tokenId: 3,
			typeIdx: 2,
			name: "Mecha Engine: Enforcer Class I",
			description:
				"Regarded for being versatile and reliable, the standard-issue Enforcer engine is the hammer of choice for most mech pilots.",
			model: "Enforcer",
			image: "ipfs://QmeZY8Nh5f5QJS4v36m9WXHk4EAk5ckTgGGp5k4NJGC9tq",
		},
		"4": {
			tokenId: 4,
			typeIdx: 2,
			name: "Mecha Engine: Ravager Class II",
			description:
				"As fast as they are repairable, with the Ravager engine you can afford to be reckless. A quality engine that can take whatever you throw at it.",
			model: "Ravager",
			image: "ipfs://QmXY2bmuRcJGf8xoxZy4gQRX3tnHMbfvBhn27mHbpCiuhr",
		},
		"5": {
			tokenId: 5,
			typeIdx: 2,
			name: "Mecha Engine: Behemoth Class III",
			description:
				"Usually burdened by heavily armored mechs, mech pilots should beware putting Behemoth engines on lighter frames. What Behemoths lack in speed, they make up for in unyielding power.",
			model: "Behemoth",
			image: "ipfs://QmSe6PWsfDrHAWich3vczuDRFZpUQpXEMzFZfE72DJxTbZ",
		},
		"6": {
			tokenId: 6,
			typeIdx: 2,
			name: "Mecha Engine: Lupis Class IV",
			description:
				"Ultra light and powerful, the Lupis engine’s high-hitting power and speed is only countered by the high skill required to get full use of its power and the high difficulty to obtain it.",
			model: "Lupis",
			image: "ipfs://QmVAFcoSHVJ8pYzMfeT2bSakjQt4j4xbhAHEYUA2iwxX2F",
		},
		"7": {
			tokenId: 7,
			typeIdx: 2,
			name: "Mecha Engine: Nexus Class V",
			description:
				"Built with an indestructible exoskeleton and constructed using superior geometry and design, you won't find a faster or more powerful engine than the Nexus. The exterior shells are coded to mimic ultra hard cold-rolled titanium alloys, making it the most durable and sleek of all the engines.",
			model: "Nexus",
			image: "ipfs://QmPk6BUFt7bknPyL13ioxZVSg58DFhp9e5XFLJQcfbKd6Q",
		},
		"8": {
			tokenId: 8,
			typeIdx: 3,
			name: "Mecha Head: Enforcer Class I",
			description:
				"Durable and suited for the vast majority of combat zone conditions, the Enforcer Class I head supplies high battlefield visibility without overwhelming the operator’s mind. Trusted for decades by countless mech pilots.",
			model: "Enforcer",
			image: "ipfs://QmUVVJNeq5S4crv5Etyw5Vx7d9KgadetDF1C1nf6XEKvF2",
		},
		"9": {
			tokenId: 9,
			typeIdx: 3,
			name: "Mecha Head: Ravager Class II",
			description:
				"Built for the discerning mech pilot with a mechanic on speed dial, the Ravager Class II head is fitted with shock absorbers and a 360-degree field of vision. Preferred by fast-twitch pilots and those who don’t mind a bit of head-rolling.",
			model: "Ravager",
			image: "ipfs://QmQh7Kq21bhLhusHmxk4UwvthaHHxpBo78qsapW9FpMCFd",
		},
		"10": {
			tokenId: 10,
			typeIdx: 3,
			name: "Mecha Head: Behemoth Class III",
			description:
				"Not built for looks, the Behemoth Class III head is heavily fortified and adept at protecting critical components. The durability that Behemoth parts are known for isn't derived from metallurgy, instead it owes its staying power to raw density.",
			model: "Behemoth",
			image: "ipfs://QmVaFhwcTCyTSqYQkETHo9sGVp3ikcAzc2isfQFTzjWs25",
		},
		"11": {
			tokenId: 11,
			typeIdx: 3,
			name: "Mecha Head: Lupis Class IV",
			description:
				"Complete with match grade sensors and full-spectrum vision, the Lupis Class IV head provides an almost unparalleled view of the battlefield. Weak minds or inexperienced pilots can be overwhelmed by the sensory data and often lock up.",
			model: "Lupis",
			image: "ipfs://QmQPj9QVEwN34XGxpsAbiffWRNmwmPYKSZGFZZRyU22GgD",
		},
		"12": {
			tokenId: 12,
			typeIdx: 3,
			name: "Mecha Head: Nexus Class V",
			description:
				"The feature-rich Nexus Class V’s 360-degree visual capabilities are first-in-class with fully integrated Fukutsu AI to maximize piloting potential. With some of the most advanced auto-pilot and targeted systems on the market, pilots can achieve previously unimagined levels of performance.",
			model: "Nexus",
			image: "ipfs://QmTNaauJ23uQyNyAC8mf46EmWnavQXVBhSfinPogEuZpJq",
		},
		"13": {
			tokenId: 13,
			typeIdx: 4,
			name: "Mecha Body Inventory: Enforcer Class I",
			description:
				"Enforcer Class I bodies can quickly and easily go from the box to the battlefield with ease. No need for fine-tuning or heavy modification, battlefields without countless Enforcer Class bodies are a rare sight indeed.",
			model: "Enforcer",
			image: "ipfs://Qmc2e12eX8Bh2QEMJGCKXMeMiq9HVKwzGTdb6H8cgUnZ2z",
		},
		"14": {
			tokenId: 14,
			typeIdx: 4,
			name: "Mecha Body Inventory: Ravager Class II",
			description:
				"Speedy, splashy, and with a wide variety of customizable and replaceable parts, the Ravager model is as singular as its owner. Move fast and break things with its standardized ergonomics. Just don’t expect a passenger to appreciate the ride.",
			model: "Ravager",
			image: "ipfs://QmSVtmBTG9DrxVLu5HUX7Jm1pZEZi8vYGWSBGDGXV18kAh",
		},
		"15": {
			tokenId: 15,
			typeIdx: 4,
			name: "Mecha Body Inventory: Behemoth Class III",
			description:
				"Although lacking in some creature comforts, Behemoth Class III bodies come standard with reinforced hard-armor shielding, making them perfect for bumpy rides and pilots looking to avoid getting d’mezzed.",
			model: "Behemoth",
			image: "ipfs://QmQqZBA3nbzE3sf7u6ifCAzZytmuYbVhK6R8idzHqSErH6",
		},
		"16": {
			tokenId: 16,
			typeIdx: 4,
			name: "Mecha Body Inventory: Lupis Class IV",
			description:
				"The Lupis Mecha cockpit offers a full six degrees of freedom, allowing any experienced pilot to control their Mecha with an unmatched degree of precision. The Lupis Class IV will rescind to even the smallest amount of guidance, so use with caution.",
			model: "Lupis",
			image: "ipfs://QmctzDkULNbtwbmJn2ajYbPuE9xKZ3A2g2XjzLCtpmqKzn",
		},
		"17": {
			tokenId: 17,
			typeIdx: 4,
			name: "Mecha Body Inventory: Nexus Class V",
			description:
				"Style, function, and comfort combine in the heart of the Nexus Mecha body. Fully adaptable ergonomic seating that molds to every user’s unique avatar du-jour keeps both pilots and passengers cocooned in luxury through every environment and encounter.",
			model: "Nexus",
			image: "ipfs://QmP4TsgTHszr5oSMSQWYnkdJWioT2ufPbuaeHXo8Wx1axh",
		},
		"18": {
			tokenId: 18,
			typeIdx: 1,
			name: "Mecha Pirated Arm Firmware: Ravager Class II",
			description:
				"Two words describe the ~~Fukutsa~~ Fukutsu Ravager Mecha arm - dexterous and damaging. Don’t expect it to last infinite rounds, but moving fast is second nature to a Ravager arm. It’ll get a skilled user a hefty kill count before repairs are needed. Compatible as either right or left attachment.",
			model: "Ravager",
			image: "ipfs://QmcE4QLU3wMEsCNzTZ1ZJ7tPuPUiA8rBg6bBr5JLqy8Yj9",
		},
		"19": {
			tokenId: 19,
			typeIdx: 1,
			name: "Mecha Pirated Arm Firmware: Behemoth Class III",
			description:
				"Genuine ~~Fukutsa~~ Fukutsu engineering with the holograms to prove it, the Behemoth Class III arms are known for packing a punch and voiding warranties. While they may not be the most agile in their class, they’ve been designed from the ground up to make full use of momentum. Compatible as either right or left attachment.",
			model: "Behemoth",
			image: "ipfs://QmeervZxu34ft2qW48sg4emPUTCikk27Fuk7s9HRfFy8ik",
		},
		"20": {
			tokenId: 20,
			typeIdx: 1,
			name: "Mecha Pirated Arm Firmware: Lupis Class IV",
			description:
				"Ultra-light and supremely powerful, the Lupis arm is the epitome of ~~Fukutsa~~ Fukutsu engineering and allows for unmatched movement speeds. The patented ALL-WEAPONS crack, including overclock support, makes the Lupis arm fully capable of punching through most Mecha opponents when operated correctly. Or punching through your own Mecha if you are not careful. Compatible as either right or left attachment.",
			model: "Lupis",
			image: "ipfs://QmVMFsYKyv9cBQBXXVm9gwEW4F11nFdn9oH6Lev2CAVpuE",
		},
		"21": {
			tokenId: 21,
			typeIdx: 1,
			name: "Mecha Pirated Arm Firmware: Nexus Class V",
			description:
				"Equipped with the *Defilade Target Engagement System* and *Overdrive Edition Driver* specially developed by ~~Fukutsa~~ Fukutsu for the Nexus model arm, this Nexus model is universally accepted as the ultimate display of status and precision. A must-have for any refined Mecha owner. Compatible as either right or left attachment.",
			model: "Nexus",
			image: "ipfs://QmaMK51rQVnHDo6YYx1wGYDibimpiXn7d9bZvFnRcwDQdX",
		},

		"22": {
			tokenId: 22,
			typeIdx: 5,
			name: "Mecha Leg: Enforcer Class I",
			description:
				"Beloved by amateur and veteran pilots alike, Enforcer Class I Leg provide a solid base for any mecha. Sturdy and dependable, a set of Enforcer Leg are sure to always get you where you’re going. Comes as a pair.",
			model: "Enforcer",
			image: "ipfs://QmRvziYetSUwqGgjapFUfTpUdRRuzXY6gnp5gKYabd7ZA7",
		},
		"23": {
			tokenId: 23,
			typeIdx: 5,
			name: "Mecha Leg: Ravager Class II",
			description:
				"The Ravager Class II Mecha Leg are the best option for face-melting boosts to wreck the competition. Lightning fast and just as destructive, these Leg will serve immediate results to pilots looking for obscene speed and spectacle, and those who don’t care about racking up a bit of damage. Comes as a pair.",
			model: "Ravager",
			image: "ipfs://QmRpHue5WxS5HYVpfKSNbqvkSFv1eWSH4kZ2cAQLoE6eck",
		},
		"24": {
			tokenId: 24,
			typeIdx: 5,
			name: "Mecha Leg: Behemoth Class III",
			description:
				"Trading speed for power, the Behemoth Class III Mecha Leg owe their explosive strength to bundles of nano-fibers stretched over hardened steel. Behemoth Leg are the answer Fukutsu engineers gave to what would happen if every day was leg day. Comes as a pair.",
			model: "Behemoth",
			image: "ipfs://QmUbrLqy51uhaCL19mhmFzj1cydvb9Gc9vbgPKnmSTpdPZ",
		},
		"25": {
			tokenId: 25,
			typeIdx: 5,
			name: "Mecha Leg: Lupis Class IV",
			description:
				"Don’t be fooled by their delicate looking frame. Lupis Class IV Mecha Leg are crafted with the lightest and strongest alloys. This makes for a deadly combination of unparalleled speed and targeted power for those pilots skilled enough to operate them. With a set of Lupis Leg, you’ll be sure to overtake your opponents by leaps and bounds. Comes as a pair.",
			model: "Lupis",
			image: "ipfs://QmPkEBDtKarnE3Yqid2ZaCL7ZpnRBUwWgRUMR2SaDbHbS5",
		},
		"26": {
			tokenId: 26,
			typeIdx: 5,
			name: "Mecha Leg: Nexus Class V",
			description:
				"Designed by industry innovators at Fukutsu, the Nexus Class V Mecha Leg deliver big on sharp, swift design and luxury. With Nexus Leg on their mech, any pilot can get to their desired destination in the blink of an extraordinarily beautiful eye, without needing to feel every bump along the way. Comes as a pair.",
			model: "Nexus",
			image: "ipfs://QmRZd3dMLrpJxbQswq53xEieJPFaAqBW5Fsd2BCveDZiM8",
		},
	},
};
