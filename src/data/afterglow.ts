export const afterglowByTokenId = (tokenId: number) => {
	return afterglowData.find(t => t.tokenId == tokenId);
};
const afterglowData: { color: string[]; name: string; description:string; tokenId: number ; image:string; external_link?:string;attributes?:any }[] = [
	{
		color: ["#4D00FF", "#FFD700"],
		tokenId: 1,
		"name": "The One Afterglow",
		"description": "**The first, the source, holy perfection**\n\nTrick out your mech with The One. This Afterglow module will change all emission colors for your mech.\n\n*For aesthetic purposes only. Does not provide extra utility or boosts. Warning: Do Not Salvage.*",
		"external_link": "https://cyberbrokers.io",
		"image": "ipfs://QmbzD3Bwu4gxPjMzxhtfN7u6CNb1Yq7v5dNHXNtU56LA3D/26_The%20One.jpg",
		"attributes": [
			{
				"trait_type": "Color",
				"value": "The One"
			}
		]
	},
	{
		color: ["#FF1493", "#DBD4D4"],
		tokenId: 2,
		"name": "True Belief Afterglow",
		"description": "**The duality of creation, opposed in union**\n\nTrick out your mech with True Belief. This Afterglow module will change all emission colors for your mech.\n\n*For aesthetic purposes only. Does not provide extra utility or boosts. Warning: Do Not Salvage.*",
		"external_link": "https://cyberbrokers.io",
		"image": "ipfs://QmbzD3Bwu4gxPjMzxhtfN7u6CNb1Yq7v5dNHXNtU56LA3D/27_True%20Belief.jpg",
		"attributes": [
			{
				"trait_type": "Color",
				"value": "True Belief"
			}
		]
	},
	{
		color: ["#FF00FF", "#CEFF00"],
		tokenId: 3,
		"name": "Deva's Breath Afterglow",
		"description": "**The three who speak, messengers for those beyond**\n\nTrick out your mech with Deva's Breath. This Afterglow module will change all emission colors for your mech.\n\n*For aesthetic purposes only. Does not provide extra utility or boosts. Warning: Do Not Salvage.*",
		"external_link": "https://cyberbrokers.io",
		"image": "ipfs://QmbzD3Bwu4gxPjMzxhtfN7u6CNb1Yq7v5dNHXNtU56LA3D/28_Deva_s%20Breath.jpg",
		"attributes": [
			{
				"trait_type": "Color",
				"value": "Deva's Breath"
			}
		]
	},
	{
		color: ["#18F905", "#00DFFF"],
		tokenId: 4,
		"name": "Wildstyle Monarch Afterglow",
		"description": "**A ruler of color, artistry supreme**\n\nTrick out your mech with Wildstyle Monarch. This Afterglow module will change all emission colors for your mech.\n\n*For aesthetic purposes only. Does not provide extra utility or boosts. Warning: Do Not Salvage.*",
		"external_link": "https://cyberbrokers.io",
		"image": "ipfs://QmbzD3Bwu4gxPjMzxhtfN7u6CNb1Yq7v5dNHXNtU56LA3D/29_Wildstyle%20Monarch.jpg",
		"attributes": [
			{
				"trait_type": "Color",
				"value": "Wildstyle Monarch"
			}
		]
	},
	{
		color: ["#808000", "#9d2b8b"],
		tokenId: 5,
		"name": "Singularity Prophet Afterglow",
		"description": "**An inhuman consciousness, perceiving humanity's future**\n\nTrick out your mech with Singularity Prophet. This Afterglow module will change all emission colors for your mech.\n\n*For aesthetic purposes only. Does not provide extra utility or boosts. Warning: Do Not Salvage.*",
		"external_link": "https://cyberbrokers.io",
		"image": "ipfs://QmbzD3Bwu4gxPjMzxhtfN7u6CNb1Yq7v5dNHXNtU56LA3D/30_Singularity%20Prophet.jpg",
		"attributes": [
			{
				"trait_type": "Color",
				"value": "Singularity Prophet"
			}
		]
	},
	{
		color: ["#8B0000", "#eca506"],
		tokenId: 6,
		"name": "Quid Pro Quo Afterglow",
		"description": "**A promise for a promise, favor for favor**\n\nTrick out your mech with Quid Pro Quo. This Afterglow module will change all emission colors for your mech.\n\n*For aesthetic purposes only. Does not provide extra utility or boosts. Warning: Do Not Salvage.*",
		"external_link": "https://cyberbrokers.io",
		"image": "ipfs://QmbzD3Bwu4gxPjMzxhtfN7u6CNb1Yq7v5dNHXNtU56LA3D/31_Quid%20Pro%20Quo.jpg",
		"attributes": [
			{
				"trait_type": "Color",
				"value": "Quid Pro Quo"
			}
		]
	},
	{
		color: ["#FFF000", "#CF0039"],
		tokenId: 7,
		"name": "Blood Money Afterglow",
		"description": "**A handful of coins, ill gotten gains**\n\nTrick out your mech with Blood Money. This Afterglow module will change all emission colors for your mech.\n\n*For aesthetic purposes only. Does not provide extra utility or boosts. Warning: Do Not Salvage.*",
		"external_link": "https://cyberbrokers.io",
		"image": "ipfs://QmbzD3Bwu4gxPjMzxhtfN7u6CNb1Yq7v5dNHXNtU56LA3D/32_Blood%20Money.jpg",
		"attributes": [
			{
				"trait_type": "Color",
				"value": "Blood Money"
			}
		]
	},
	{
		color: ["#BBFF00", "#2155ff"],
		tokenId: 8,
		"name": "Xenoform Unknown Afterglow",
		"description": "**An alien presence, descending from the heavens**\n\nTrick out your mech with Xenoform Unknown. This Afterglow module will change all emission colors for your mech.\n\n*For aesthetic purposes only. Does not provide extra utility or boosts. Warning: Do Not Salvage.*",
		"external_link": "https://cyberbrokers.io",
		"image": "ipfs://QmbzD3Bwu4gxPjMzxhtfN7u6CNb1Yq7v5dNHXNtU56LA3D/33_Xenoform%20Unknown.jpg",
		"attributes": [
			{
				"trait_type": "Color",
				"value": "Xenoform Unknown"
			}
		]
	},
	{
		color: ["#FFC3D6", "#2D4460"],
		tokenId: 9,
		"name": "Pink Parser Afterglow",
		"description": "**A pretty plush script, dissembling your world**\n\nTrick out your mech with Pink Parser. This Afterglow module will change all emission colors for your mech.\n\n*For aesthetic purposes only. Does not provide extra utility or boosts. Warning: Do Not Salvage.*",
		"external_link": "https://cyberbrokers.io",
		"image": "ipfs://QmbzD3Bwu4gxPjMzxhtfN7u6CNb1Yq7v5dNHXNtU56LA3D/34_Pink%20Parser.jpg",
		"attributes": [
			{
				"trait_type": "Color",
				"value": "Pink Parser"
			}
		]
	},
	{
		color: ["#FFFFFF", "#BD3943"],
		tokenId: 10,
		"name": "Bone and Flesh Afterglow",
		"description": "**A vestige of bone, clinging to fetid flesh**\n\nTrick out your mech with Bone and Flesh. This Afterglow module will change all emission colors for your mech.\n\n*For aesthetic purposes only. Does not provide extra utility or boosts. Warning: Do Not Salvage.*",
		"external_link": "https://cyberbrokers.io",
		"image": "ipfs://QmbzD3Bwu4gxPjMzxhtfN7u6CNb1Yq7v5dNHXNtU56LA3D/35_Bone%20and%20Flesh.jpg",
		"attributes": [
			{
				"trait_type": "Color",
				"value": "Bone and Flesh"
			}
		]
	},
	{
		color: ["#000080", "#00FF00"],
		tokenId: 11,
		"name": "Circuit Overload Afterglow",
		"description": "**A torn existence, machine melded with life**\n\nTrick out your mech with Circuit Overload. This Afterglow module will change all emission colors for your mech.\n\n*For aesthetic purposes only. Does not provide extra utility or boosts. Warning: Do Not Salvage.*",
		"external_link": "https://cyberbrokers.io",
		"image": "ipfs://QmbzD3Bwu4gxPjMzxhtfN7u6CNb1Yq7v5dNHXNtU56LA3D/36_Circuit%20Overload.jpg",
		"attributes": [
			{
				"trait_type": "Color",
				"value": "Circuit Overload"
			}
		]
	},
	{
		color: ["#ABFBFB", "#D92AD9"],
		tokenId: 12,
		"name": "Ethereal Dream Afterglow",
		"description": "**A ghost who sleeps, to live in their dreams**\n\nTrick out your mech with Ethereal Dream. This Afterglow module will change all emission colors for your mech.\n\n*For aesthetic purposes only. Does not provide extra utility or boosts. Warning: Do Not Salvage.*",
		"external_link": "https://cyberbrokers.io",
		"image": "ipfs://QmbzD3Bwu4gxPjMzxhtfN7u6CNb1Yq7v5dNHXNtU56LA3D/37_Ethereal%20Dream.jpg",
		"attributes": [
			{
				"trait_type": "Color",
				"value": "Ethereal Dream"
			}
		]
	
	},
	{
		color: ["#FF8C00", "#ffe200"],
		tokenId: 13,
		"name": "Double Spend Afterglow",
		"description": "**A simple trick, to earn twice the profit**\n\nTrick out your mech with Double Spend. This Afterglow module will change all emission colors for your mech.\n\n*For aesthetic purposes only. Does not provide extra utility or boosts. Warning: Do Not Salvage.*",
		"external_link": "https://cyberbrokers.io",
		"image": "ipfs://QmbzD3Bwu4gxPjMzxhtfN7u6CNb1Yq7v5dNHXNtU56LA3D/38_Double%20Spend.jpg",
		"attributes": [
			{
				"trait_type": "Color",
				"value": "Double Spend"
			}
		]
	},
	{
		color: ["#FF0000", "#1A1A1A"],
		tokenId: 14,
		"name": "Tsujigiri Slash Afterglow",
		"description": "**A strike in the dark, blood and shadow**\n\nTrick out your mech with Tsujigiri Slash. This Afterglow module will change all emission colors for your mech.\n\n*For aesthetic purposes only. Does not provide extra utility or boosts. Warning: Do Not Salvage.*",
		"external_link": "https://cyberbrokers.io",
		"image": "ipfs://QmbzD3Bwu4gxPjMzxhtfN7u6CNb1Yq7v5dNHXNtU56LA3D/39_Tsujigiri%20Slash.jpg",
		"attributes": [
			{
				"trait_type": "Color",
				"value": "Tsujigiri Slash"
			}
		]
	},
	{
		color: ["#1E90FF", "#E6E6E6"],
		tokenId: 15,
		"name": "Institutional Pedigree Afterglow",
		"description": "**A comforting touch, within weary halls**\n\nTrick out your mech with Institutional Pedigree. This Afterglow module will change all emission colors for your mech.\n\n*For aesthetic purposes only. Does not provide extra utility or boosts. Warning: Do Not Salvage.*",
		"external_link": "https://cyberbrokers.io",
		"image": "ipfs://QmbzD3Bwu4gxPjMzxhtfN7u6CNb1Yq7v5dNHXNtU56LA3D/40_Institutional%20Pedigree.jpg",
		"attributes": [
			{
				"trait_type": "Color",
				"value": "Institutional Pedigree"
			}
		]
	},
	{
		color: ["#9510AC", "#1a37e6"],
		tokenId: 16,
		"name": "Eldritch Descent Afterglow",
		"description": "**A prayer to the beyond, path into madness**\n\nTrick out your mech with Eldritch Descent. This Afterglow module will change all emission colors for your mech.\n\n*For aesthetic purposes only. Does not provide extra utility or boosts. Warning: Do Not Salvage.*",
		"external_link": "https://cyberbrokers.io",
		"image": "ipfs://QmbzD3Bwu4gxPjMzxhtfN7u6CNb1Yq7v5dNHXNtU56LA3D/41_Eldritch%20Descent.jpg",
		"attributes": [
			{
				"trait_type": "Color",
				"value": "Eldritch Descent"
			}
		]
	},
	{
		color: ["#00FFFF", "#1A1A1A"],
		tokenId: 17,
		"name": "Closed Captioning Afterglow",
		"description": "**A promise of everything, just have to pay the price**\n\nTrick out your mech with Closed Captioning. This Afterglow module will change all emission colors for your mech.\n\n*For aesthetic purposes only. Does not provide extra utility or boosts. Warning: Do Not Salvage.*",
		"external_link": "https://cyberbrokers.io",
		"image": "ipfs://QmbzD3Bwu4gxPjMzxhtfN7u6CNb1Yq7v5dNHXNtU56LA3D/42_Closed%20Captioning.jpg",
		"attributes": [
			{
				"trait_type": "Color",
				"value": "Closed Captioning"
			}
		]
	},
	{
		color: ["#000000", "#007300"],
		tokenId: 18,
		"name": "Hallowed Grounds Afterglow",
		"description": "**A litany of reverence among moss covered graves**\n\nTrick out your mech with Hallowed Grounds. This Afterglow module will change all emission colors for your mech.\n\n*For aesthetic purposes only. Does not provide extra utility or boosts. Warning: Do Not Salvage.*.",
		"external_link": "https://cyberbrokers.io",
		"image": "ipfs://QmbzD3Bwu4gxPjMzxhtfN7u6CNb1Yq7v5dNHXNtU56LA3D/43_Hallowed%20Grounds.jpg",
		"attributes": [
			{
				"trait_type": "Color",
				"value": "Hallowed Grounds"
			}
		]
	},
	{
		color: ["#FF00FF"],
		tokenId: 19,
		"name": "Cosmic Squid Pink Afterglow",
		"description": "**The cosmic squids of Uncouth make the most vibrant calamari.**\n\nTrick out your mech with Cosmic Squid Pink. This Afterglow module will change all emission colors for your mech. \n\n*For aesthetic purposes only. Does not provide extra utility or boosts. Warning: Do Not Salvage.*",
		"external_link": "https://cyberbrokers.io",
		"image": "ipfs://QmbzD3Bwu4gxPjMzxhtfN7u6CNb1Yq7v5dNHXNtU56LA3D/4_Cosmic%20Squid%20Pink.jpg",
		"attributes": [
			{
				"trait_type": "Color",
				"value": "Cosmic Squid Pink"
			}
		]
	},
	{
		color: ["#18F905"],
		tokenId: 20,
		"name": "Stationary Green Afterglow",
		"description": "**While some sit stationary in meditation, other send stationary in mediation.**\n\nTrick out your mech with Stationary Green. This Afterglow module will change all emission colors for your mech.\n\n*For aesthetic purposes only. Does not provide extra utility or boosts. Warning: Do Not Salvage.*",
		"external_link": "https://cyberbrokers.io",
		"image": "ipfs://QmbzD3Bwu4gxPjMzxhtfN7u6CNb1Yq7v5dNHXNtU56LA3D/5_Stationary%20Green.jpg",
		"attributes": [
			{
				"trait_type": "Color",
				"value": "Stationary Green"
			}
		]
	},
	{
		color: ["#00FFFF"],
		tokenId: 21,
		"name": "Broken Sky Blue Afterglow",
		"description": "**Even a broken sky can be beautiful, but someone has to clean it up.**\n\nTrick out your mech with Broken Sky Blue. This Afterglow module will change all emission colors for your mech.\n\n*For aesthetic purposes only. Does not provide extra utility or boosts. Warning: Do Not Salvage.*",
		"external_link": "https://cyberbrokers.io",
		"image": "ipfs://QmbzD3Bwu4gxPjMzxhtfN7u6CNb1Yq7v5dNHXNtU56LA3D/6_Broken%20Sky%20Blue.jpg",
		"attributes": [
			{
				"trait_type": "Color",
				"value": "Broken Sky Blue"
			}
		]
	},
	{
		color: ["#BBFF00"],
		tokenId: 22,
		"name": "Precious Cargo Green Afterglow",
		"description": "**No matter your burden, make sure it is worth the weight.**\n\nTrick out your mech with Precious Cargo Green. This Afterglow module will change all emission colors for your mech.\n\n*For aesthetic purposes only. Does not provide extra utility or boosts. Warning: Do Not Salvage.*",
		"external_link": "https://cyberbrokers.io",
		"image": "ipfs://QmbzD3Bwu4gxPjMzxhtfN7u6CNb1Yq7v5dNHXNtU56LA3D/7_Precious%20Cargo%20Green.jpg",
		"attributes": [
			{
				"trait_type": "Color",
				"value": "Precious Cargo Green"
			}
		]
	},
	{
		color: ["#FFF000"],
		tokenId: 23,
		"name": "Enigma Yellow Afterglow",
		"description": "**Why yellow? That's for you to figure out, one way or the other.**\n\nTrick out your mech with Enigma Yellow. This Afterglow module will change all emission colors for your mech.\n\n*For aesthetic purposes only. Does not provide extra utility or boosts. Warning: Do Not Salvage.*",
		"external_link": "https://cyberbrokers.io",
		"image": "ipfs://QmbzD3Bwu4gxPjMzxhtfN7u6CNb1Yq7v5dNHXNtU56LA3D/8_Enigma%20Yellow.jpg",
		"attributes": [
			{
				"trait_type": "Color",
				"value": "Enigma Yellow"
			}
		]
	},
	{
		color: ["#FF0000"],
		tokenId: 24,
		"name": "Reaction Time Red Afterglow",
		"description": "**Gotta be fast, gulping down RED after RED.**\n\nTrick out your mech with Reaction Time Red. This Afterglow module will change all emission colors for your mech.\n\n*For aesthetic purposes only. Does not provide extra utility or boosts. Warning: Do Not Salvage.*",
		"external_link": "https://cyberbrokers.io",
		"image": "ipfs://QmbzD3Bwu4gxPjMzxhtfN7u6CNb1Yq7v5dNHXNtU56LA3D/9_Reaction%20Time%20Red.jpg",
		"attributes": [
			{
				"trait_type": "Color",
				"value": "Reaction Time Red"
			}
		]
	},
	{
		color: ["#FAC710"],
		tokenId: 25,
		"name": "Phishing Gold Afterglow",
		"description": "**Beg, borrow, or steal; all worth the ticks in gold.**\n\nTrick out your mech with Phishing Gold. This Afterglow module will change all emission colors for your mech.\n\n*For aesthetic purposes only. Does not provide extra utility or boosts. Warning: Do Not Salvage.*",
		"external_link": "https://cyberbrokers.io",
		"image": "ipfs://QmbzD3Bwu4gxPjMzxhtfN7u6CNb1Yq7v5dNHXNtU56LA3D/10_Phishing%20Gold.jpg",
		"attributes": [
			{
				"trait_type": "Color",
				"value": "Phishing Gold"
			}
		]
	},
	{
		color: ["#FFC3D6"],
		tokenId: 26,
		"name": "Existential Pink Afterglow",
		"description": "**Who am I? What is this? Why is everything pink? Why am I pink!?**\n\nTrick out your mech with Existential Pink. This Afterglow module will change all emission colors for your mech.\n\n*For aesthetic purposes only. Does not provide extra utility or boosts. Warning: Do Not Salvage.*",
		"external_link": "https://cyberbrokers.io",
		"image": "ipfs://QmbzD3Bwu4gxPjMzxhtfN7u6CNb1Yq7v5dNHXNtU56LA3D/11_Existential%20Pink.jpg",
		"attributes": [
			{
				"trait_type": "Color",
				"value": "Existential Pink"
			}
		]
	},
	{
		color: ["#FF8C00"],
		tokenId: 27,
		"name": "Lost-in-the-Crowd Orange Afterglow",
		"description": "**Some blend in to avoid being prey, others do it to be the predator.**\n\nTrick out your mech with Lost-in-the-Crowd Orange. This Afterglow module will change all emission colors for your mech.\n\n*For aesthetic purposes only. Does not provide extra utility or boosts. Warning: Do Not Salvage.*",
		"external_link": "https://cyberbrokers.io",
		"image": "ipfs://QmbzD3Bwu4gxPjMzxhtfN7u6CNb1Yq7v5dNHXNtU56LA3D/12_Lost-in-the-Crowd%20Orange.jpg",
		"attributes": [
			{
				"trait_type": "Color",
				"value": "Lost-in-the-Crowd Orange"
			}
		]
	},
	{
		color: ["#FF1493"],
		tokenId: 28,
		"name": "Escapist Magenta Afterglow",
		"description": "**Breaking down barriers, one hot pink reality at a time.**\n\nTrick out your mech with Escapist Magenta. This Afterglow module will change all emission colors for your mech.\n\n*For aesthetic purposes only. Does not provide extra utility or boosts. Warning: Do Not Salvage.*",
		"external_link": "https://cyberbrokers.io",
		"image": "ipfs://QmbzD3Bwu4gxPjMzxhtfN7u6CNb1Yq7v5dNHXNtU56LA3D/13_Escapist%20Magenta.jpg",
		"attributes": [
			{
				"trait_type": "Color",
				"value": "Escapist Magenta"
			}
		]
	},
	{
		color: ["#1E90FF"],
		tokenId: 29,
		"name": "Stonefaced Sapphire Afterglow",
		"description": "**Playing cards with Gargoyles or Gamblers will just leave you feeling blue.**\n\nTrick out your mech with Stonefaced Sapphire. This Afterglow module will change all emission colors for your mech.\n\n*For aesthetic purposes only. Does not provide extra utility or boosts. Warning: Do Not Salvage.*",
		"external_link": "https://cyberbrokers.io",
		"image": "ipfs://QmbzD3Bwu4gxPjMzxhtfN7u6CNb1Yq7v5dNHXNtU56LA3D/14_Stonefaced%20Sapphire.jpg",
		"attributes": [
			{
				"trait_type": "Color",
				"value": "Stonefaced Sapphire"
			}
		]
	},
	{
		color: ["#9510AC"],
		tokenId: 30,
		"name": "Fixer Plum Afterglow",
		"description": "**Fix your mech or fix your problems, both are plum jobs for the right broker.**\n\nTrick out your mech with Fixer Plum. This Afterglow module will change all emission colors for your mech.\n\n*For aesthetic purposes only. Does not provide extra utility or boosts. Warning: Do Not Salvage.*",
		"external_link": "https://cyberbrokers.io",
		"image": "ipfs://QmbzD3Bwu4gxPjMzxhtfN7u6CNb1Yq7v5dNHXNtU56LA3D/15_Fixer%20Plum.jpg",
		"attributes": [
			{
				"trait_type": "Color",
				"value": "Fixer Plum"
			}
		]
	},
	{
		color: ["#8B0000"],
		tokenId: 31,
		"name": "Backdoor Burgundy Afterglow",
		"description": "**There is always a workaround, always another way in.**\n\nTrick out your mech with Backdoor Burgundy. This Afterglow module will change all emission colors for your mech.\n\n*For aesthetic purposes only. Does not provide extra utility or boosts. Warning: Do Not Salvage.*",
		"external_link": "https://cyberbrokers.io",
		"image": "ipfs://QmbzD3Bwu4gxPjMzxhtfN7u6CNb1Yq7v5dNHXNtU56LA3D/16_Backdoor%20Burgundy.jpg",
		"attributes": [
			{
				"trait_type": "Color",
				"value": "Backdoor Burgundy"
			}
		]
	},
	{
		color: ["#808000"],
		tokenId: 32,
		"name": "Takedown Green Afterglow",
		"description": "**A handy hue for those discrete, badass, and stylish.**\n\nTrick out your mech with Takedown Green. This Afterglow module will change all emission colors for your mech.\n\n*For aesthetic purposes only. Does not provide extra utility or boosts. Warning: Do Not Salvage.*",
		"external_link": "https://cyberbrokers.io",
		"image": "ipfs://QmbzD3Bwu4gxPjMzxhtfN7u6CNb1Yq7v5dNHXNtU56LA3D/17_Takedown%20Green.jpg",
		"attributes": [
			{
				"trait_type": "Color",
				"value": "Takedown Green"
			}
		]
	},
	{
		color: ["#00806A"],
		tokenId: 33,
		"name": "Seeker Green Afterglow",
		"description": "**Ready, set, green! Always go, never stop, keep your eye on the prize.**\n\nTrick out your mech with Seeker Green. This Afterglow module will change all emission colors for your mech.\n\n*For aesthetic purposes only. Does not provide extra utility or boosts. Warning: Do Not Salvage.*",
		"external_link": "https://cyberbrokers.io",
		"image": "ipfs://QmbzD3Bwu4gxPjMzxhtfN7u6CNb1Yq7v5dNHXNtU56LA3D/18_Seeker%20Green.jpg",
		"attributes": [
			{
				"trait_type": "Color",
				"value": "Seeker Green"
			}
		]
	},
	{
		color: ["#000080"],
		tokenId: 34,
		"name": "Abundant Blue Afterglow",
		"description": "**We're going to the moon and into the great, big blue beyond!**\n\nTrick out your mech with Abundant Blue. This Afterglow module will change all emission colors for your mech.\n\n*For aesthetic purposes only. Does not provide extra utility or boosts. Warning: Do Not Salvage.*",
		"external_link": "https://cyberbrokers.io",
		"image": "ipfs://QmbzD3Bwu4gxPjMzxhtfN7u6CNb1Yq7v5dNHXNtU56LA3D/19_Abundant%20Blue.jpg",
		"attributes": [
			{
				"trait_type": "Color",
				"value": "Abundant Blue"
			}
		]
	},
	{
		color: ["#FFFFFF"],
		tokenId: 35,
		"name": "Tabula Rasa White Afterglow",
		"description": "**Blank slate, nothing there but infinite possibility.**\n\nTrick out your mech with Tabula Rasa White. This Afterglow module will change all emission colors for your mech.\n\n*For aesthetic purposes only. Does not provide extra utility or boosts. Warning: Do Not Salvage.*",
		"external_link": "https://cyberbrokers.io",
		"image": "ipfs://QmbzD3Bwu4gxPjMzxhtfN7u6CNb1Yq7v5dNHXNtU56LA3D/20_Tabula%20Rasa%20White.jpg",
		"attributes": [
			{
				"trait_type": "Color",
				"value": "Tabula Rasa White"
			}
		]	
	},
	{
		color: ["#E6BCE6"],
		tokenId: 36,
		"name": "Common Lavender Afterglow",
		"description": "**Why is the default color for Paradigm pixel blocks lavender? Why not?**\n\nTrick out your mech with Common Lavender. This Afterglow module will change all emission colors for your mech.\n\n*For aesthetic purposes only. Does not provide extra utility or boosts. Warning: Do Not Salvage.*",
		"external_link": "https://cyberbrokers.io",
		"image": "ipfs://QmbzD3Bwu4gxPjMzxhtfN7u6CNb1Yq7v5dNHXNtU56LA3D/21_Common%20Lavender.jpg",
		"attributes": [
			{
				"trait_type": "Color",
				"value": "Common Lavender"
			}
		]
	},
	{
		color: ["#1DC267"],
		tokenId: 37,
		"name": "Starter Green Afterglow",
		"description": "**Some kids already took the Starter Red and Starter Blue.**\n\nTrick out your mech with Starter Green. This Afterglow module will change all emission colors for your mech.\n\n*For aesthetic purposes only. Does not provide extra utility or boosts. Warning: Do Not Salvage.*",
		"external_link": "https://cyberbrokers.io",
		"image": "ipfs://QmbzD3Bwu4gxPjMzxhtfN7u6CNb1Yq7v5dNHXNtU56LA3D/22_Starter%20Green.jpg",
		"attributes": [
			{
				"trait_type": "Color",
				"value": "Starter Green"
			}
		]
	},
	{
		color: ["#000000"],
		tokenId: 38,
		"name": "ShaDAO Black Afterglow",
		"description": "**When you gaze into ShaDAO, ShaDAO gazes back.**\n\nTrick out your mech with ShaDAO Black. This Afterglow module will change all emission colors for your mech.\n\n*For aesthetic purposes only. Does not provide extra utility or boosts. Warning: Do Not Salvage.*",
		"external_link": "https://cyberbrokers.io",
		"image": "ipfs://QmbzD3Bwu4gxPjMzxhtfN7u6CNb1Yq7v5dNHXNtU56LA3D/23_ShaDAO%20Black.jpg",
		"attributes": [
			{
				"trait_type": "Color",
				"value": "ShaDAO Black"
			}
		]
	},
];
