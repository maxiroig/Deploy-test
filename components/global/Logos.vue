<script setup lang="ts">
type TProps = {
	id: string
}
// const mode = useColorMode()
const props = defineProps<TProps>()
const { sections, logos } = useRapidLaunchConfig()
const { items } = logos

const section = computed(() => sections?.[props.id] || null)
const { title, subtitle, content, cta, media } = useContentForSection(props.id)
// const items = computed(() => {
// 	const i = logos?.items || []
	
// 	return i.map((item: any) => {
// 		return {
// 			...item,
// 			src: (mode?.value === 'dark' ? item?.src?.dark : item?.src?.light) || item?.src
// 		}
// 	})
// })
</script>

<template>
	<div v-if="section" :id="id" class="bg-white dark:bg-muted-800 my-24">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="mx-auto max-w-xl text-center flex flex-col gap-y-2">
				<TextTitle :title="title" />
				<TextHeader :text="subtitle" />
				<TextMultiLine :text="content" />
				<div v-if="cta" class="mt-10 flex items-center justify-center gap-x-6">
					<ButtonBase :to="cta?.link" target="_blank">
						<Icon v-if="cta?.icon" :name="cta.icon" class="h-8 w-8 mr-2 " />
						<span>{{ cta?.label }}</span>
					</ButtonBase>
				</div>
			</div>

			<div class="mt-16 max-w-2xl sm:mt-20 lg:mx-auto lg:max-w-none">
				<div class="grid grid-cols-3 gap-1 overflow-hidden sm:mx-0 sm:rounded-2xl mx-auto">
					<div
						v-for="logo in items"
						class="dark:bg-white/5 bg-muted-800/5 p-6 sm:p-8 flex items-center justify-center group"
					>
                    <a :href="logo.href">
                        <icon :name="logo.icon" class="h-12 w-12 hover:text-green-500"/>
                    </a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
