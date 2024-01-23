import { getPriceId } from "../utils/checkoutLinks"

export default {
	frequencies: [
		{ value: 'once', label: 'Once', priceSuffix: '/once' },
		// { value: "monthly", label: "Monthly", priceSuffix: "/month" },
		// { value: "yearly", label: "Yearly", priceSuffix: "/year" },
	],
	defaultFrequency: "once",
	showOriginalPrice: true,
	// specialPrice: {
	// 	title: "Looking for a custom deal?",
	// 	content: [
	// 		"We offer Enterprise license for companies and teams, an educational deals. \n" +
	// 			"Please contact us for more details.",
	// 	],
	// 	cta: {
	// 		label: "Contact me",
	// 		icon: "ic:baseline-arrow-forward",
	// 		href: "mailto:boudydegeer@mosaiqo.com",
	// 	},
	// },
	prices: {
		"nuke-segura": {
			once: { id: getPriceId("default"), coupon: "EARLYBIRD" },
			// monthly: { id: getPriceId("default"), coupon: "EARLYBIRD" },
			// yearly: { id: getPriceId("default"), coupon: "EARLYBIRD" },
		},
		"un-intento": {
			once: { id: getPriceId("default"), coupon: "LAUNCH" },
			// monthly: { id: getPriceId("default"), coupon: "LAUNCH" },
			// yearly: { id: getPriceId("default"), coupon: "LAUNCH" },
		},
		"dos-intentos": {
			once: { id: getPriceId("default"), coupon: "LAUNCH" },
			// monthly: { id: getPriceId("default"), coupon: "LAUNCH" },
			// yearly: { id: getPriceId("default"), coupon: "LAUNCH" },
		},
	},
	plans: [
		{
			name: "Un intento",
			id: "un-intento",
			mostPopular: false,
			price: {
				once: "$40",
				// monthly: "$9",
				// yearly: "$99",
			},
			original: {
				once: "$60",
				// monthly: "$49",
				// yearly: "$199",
			},
			button: {
				label: "Quiero este pack!",
				icon: "ion:ios-nuclear",
			},
			description:
				"Perfecto para los tryhard, unete al resto de nuestro equipo tryhard para conseguir esa NUKE a la primera!",
			// cta: {
			// 	title: "Why Pay More When You Can Pay... Less?",
			// 	hint: "Every cent counts, especially the ones you save!",
			// },
			features: [
				{
					icon: "game-icons:life-bar",
					title: "Con una vida me alcanza!",
					description: "Solo tienes una oportunidad de conseguir la NUKE",
				},
				{
					icon: "fluent:people-team-48-regular",
					title: "Se parte del equipo",
					description: "Debes ser parte de nuestro equipo para conseguir la NUKE",
				},
				{
					icon: "ic:baseline-discount",
					title: "20% descuento",
					description: "Con este pack, consigues un 20% de descuento en caso de no conseguir la NUKE en tu siguiente intento",
				},
			],
		},
		{
			name: "Nuke segura!",
			id: "nuke-segura",
			mostPopular: true,
			price: {
				once: "$90",
				// monthly: "$49",
				// yearly: "$399",
			},
			original: {
				once: "$120",
				// monthly: "$99",
				// yearly: "$199",
			},
			button: {
				label: "Quiero este pack!",
				icon: "ion:ios-nuclear",
			},
			description:
				"Para esos que no se andan con tonterias, no importa cuanto cueste, tu NUKE esta asegurada!",
			// cta: {
			// 	title: "Quiero este pack",
			// 	hint: "Elevate your Acme experience without the vertigo.",
			// },
			features: [
				{
					icon: "mdi:nuke",
					title: "NUKE asegurada!",
					description: "Si contratas este paquete, hasta que no obtengas NUKE no paramos!",
				},
				{
					icon: "fluent:people-team-48-regular",
					title: "SI QUIERES! puedes ser parte del equipo",
					description: "Tienes la posibilidad de ser parte del equipo, no te apetece?,no te preocupes puedes facilitarnos tu cuenta de battle.net y nosotros nos encargamos de todo",
				},
				{
					icon: "mdi:priority-high",
					title: "Prioridad en la lista de espera",
					description: "Podras obtener la NUKE primero que todos!",
				},
			],
		},
		{
			name: "Dos intentos",
			id: "dos-intentos",
			mostPopular: false,
			price: {
				once: "$70",
				// monthly: "$29",
				// yearly: "$199",
			},
			original: {
				once: "$90",
				// monthly: "$49",
				// yearly: "$199",
			},
			button: {
				label: "Quiero este pack!",
				icon: "ion:ios-nuclear",
			},
			description:
				"Para los precabidos, tendrás 2 oportunidades de conseguir la NUKE!",
			// cta: {
			// 	title: "All of Acme, None of the Compromises",
			// 	hint: "Dive into limitless possibilities with Acme's ultimate offering.",
			// },
			features: [
				{
					icon: "game-icons:life-bar",
					title: "Con un par de intentos, creo que es suficiente!",
					description: "Tendrás dos oportunidades de conseguir la NUKE",
				},
				{
					icon: "fluent:people-team-48-regular",
					title: "Se parte del equipo",
					description: "Debes ser parte de nuestro equipo para conseguir la NUKE",
				},
				{
					icon: "ic:baseline-discount",
					title: "50% descuento!",
					description: "Con este pack, consigues un 50% de descuento en caso de no conseguir la NUKE en tu siguiente intento",
				},
			],
		},
	],
}
