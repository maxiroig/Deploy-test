
/*
* This file contains the configuration for each section of the landing page.
*
*/
export default {
	hero: {
		title: "Nuke is coming!",
		subtitle: "Te ayudamos a conseguir tu NUKE!",
		content:
			"Tienes ganas de sacarte la nuke, pero tu team no te acompaña? No te preocupes, ya estamos aqui para ayudarte!",
		media: {
			type: "video",
			attrs: {
				src: "/videos/clip-nuke.mp4",
				type: "video/mp4",
				autoplay: "autoplay",
				muted: "muted",
				controls: false,
				alt: "Nuke final",
			},
		},
		cta: {
			href:"https://shots.so/",
			label: "Quiero la NUKE!!!",
			icon: "game-icons:nuclear-bomb",
		},
	},

	logos: {
		title: "Contactanos!",
		subtitle: "Te dejamos los principales canales para contactarnos!",
		content: [],
		
	},
	features: {
		title: "Requisitos",
		subtitle: "Para poder sacar la nuke, previamente tendras que cumplir una serie de requisitos",
		content:
			"No te preocupes, los requisitos son muy sencillos, los necesitamos para agilizar lo maximo posible ir a por esa NUKE!!",
		// media: {
		// 	type: "image", // 'video' | 'image' | 'iframe'
		// 	attrs: {
		// 		// src: '/images/features-image.png',
		// 		alt: "Acme Company Story Image",
		// 		caption: "Acme Company Story Image Caption",
		// 	},
		// },
	},
	cta: {
		title: "Hey tú!",
		subtitle: "Te gustaria conseguir la nuke? ",
		content:
			"Te ayudamos a conseguir las recompensas de la nuke con nuestro equipo! ¿A que esperas?",
		cta: {
		
			label: "Conseguir la NUKE!",
			icon: "game-icons:nuclear-bomb",
		},
	},
	testimonials: {
		title: "Voices of Satisfaction",
		subtitle: "Discover What Our Customers Have to Say About Us",
		content: ["Discover What Our Customers Have to Say About Us"],
		cta: {
			icon: "material-symbols:heart-plus",
		
			label: "Leave a Testimonial",
		},
	},
	affiliates: {
		title: "Affiliate Program",
		subtitle: "Join the Acme Affiliate Program and Earn up to 20%!",
		content:
			"Unlock a world of opportunities with the Acme Affiliate Program! Share the power of Acme with others and earn up to 1000% in commissions for every successful referral. Join us in shaping the future of project launches and get rewarded for helping others launch their dreams.",
		cta: {
		
			label: "Join Our Affiliate Program now",
			icon: "ph:hand-coins-duotone",
		},
	},
	pricing: {
		title: "Precio!",
		subtitle: "Estas son nuestras tarifas!",
		content: [
			"Te ofrecemos distintas tarifas, ten en cuenta que esto es nuestro trabajo, estamos poniendo nuestro tiempo y dedicacion",
		],
	},
	faqs: {
		title: "Preguntas Frecuentes",
		subtitle: "Respondemos las preguntas frecuentes de nuestra comunidad ",
		content: "",
			
	},
}


