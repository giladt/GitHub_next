{/*
	Scheme:
	hero:
		variant: string[normal, video],
		panels: [
			title?: 			string,
			body?: 			string,
			img?: 			string,
			vid?: 			string,
			ctx_text?: 	string
		]
*/}


export const data = [
	{
		variant: 'video',
		panels: [
			{
				title: "Mit Menschen vernetzen.Von Kompetenzen profitieren.",
				body: "Weiterbildung und Beratung einfach, günstig sowie jederzeit und überall möglich.",
				vid: 'https://gr8hub.s3.eu-central-1.amazonaws.com/Landing+Page/Gr8hub+Landing+Page+Background.mp4',
				ctx_text: "Kostenlos Platz sichern",
			},
		],
	},
	{
		variant: 'normal',
		panels: [
			{
				img: "/images/svgs/dart_telescope.svg",
			},
			{
				title: "Der richtige Treffer für jede Suchanfrage",
				body: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
				ctx_text: "Kostenlosen Platz sichern",
			}
		]
	},
	{
		variant: 'normal',
		panels: [
			{
				title: "Das passende Matching für erfolgreiches Durchstarten",
				body: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
				ctx_text: "Kostenlosen Platz sichern",
			},
			{
				img: "/images/svgs/pencil_riders.svg",
			},
		]
	},
	{
		variant: 'hover',
		panels: [
			{
				img: "/images/pngs/julia.png",
				img_bg: "/images/svgs/green_cloud.svg",
				body: "Julia ist auf der Suche nach Trainings oder Coachings, um ihre Kommunikations-Kompetenz zu stärken.",
			},
			{
				img: "/images/pngs/george.png",
				img_bg: "/images/svgs/green_cloud.svg",
				body: "George ist auf der Suche nach Expert*innen, die Beratung für die Digitalisierung seiner Firma anbieten.",
			},
		],
	},
];
