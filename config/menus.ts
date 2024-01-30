export default {
	header: {
		changelog: false,
		portal: true,

		navigation: {
			links: [
				{ name: "Inicio", href: "/" },
				{ name: "Precios", href: "/#pricing" },
				{ name: "Contáctanos", href: "/#logos" },
				{ name: "Preguntas frecuentes", href: "/#faqs" },
			],
		},
	},
	footer: {
		navigation: {
			links: [
				{ name: "Inicio", href: "/#top" },
				{ name: "Contacto", href: "/#logos" },
				{ name: "Pricing", href: "/#pricing" },
				{ name: "Preguntas frecuentes", href: "/#faqs" },
			],
			// legal: [
			// 	{ name: "Privacy Policy", href: "/" },
			// 	{ name: "Terms & Conditions", href: "/" },
			// ],
			social: [
				{
					name: "Twitch",
					href: "",
					icon: "simple-icons:twitch",
				},
				{
					name: "Discord",
					href: "",
					icon: "simple-icons:discord",
				},
				{
					name: "Twitter",
					href: "https://twitter.com/ChikyFdz7",
					icon: "simple-icons:x",
				},
			],
		},
	},

	user: {
		navigation: {
			links: [
				{ name: "Dashboard", href: "/dashboard" },
				{ name: "Your Profile", href: "/dashboard/profile" },
				{ name: "Settings", href: "/dashboard/settings" },
			],
		},
	},

	dashboard: {
		settings: {
			name: "Settings",
			href: "/dashboard/settings",
			icon: "ph:gear-fine-duotone",
		},
		navigation: {
			links: [{ name: "Dashboard", href: "/dashboard" }],
		},
	},

	// auth: {
	// 	logout: { name: "Logout" },
	// 	login: { name: "Login", href: "/auth/login" },
	// 	register: { name: "Register", href: '/auth/register' },
	// },
}
