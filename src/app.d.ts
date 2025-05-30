/// <reference types="@sveltejs/kit" />
import type { Language } from '$lib/models/Language.ts'

// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces

declare global {
	var language: Language = Language.SV
	namespace App {
		interface Error {
			message?: string
		}
		interface Locals {}
		interface PageData {}
		interface PageState {}
		interface Platform {}
	}
}

export {}