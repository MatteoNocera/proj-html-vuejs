import { reactive } from 'vue';

export const state = reactive({

    // State
    menu_voices: [
        {
            name: 'Home'
        },
        {
            name: 'About'
        },
        {
            name: 'Services'
        },
        {
            name: 'Blog'
        },
        {
            name: 'Contact'
        },
        {
            name: 'Portfolio'
        },
    ],
    quick_links: [
        {
            voice: 'Services'
        },
        {
            voice: 'Contact'
        },
        {
            voice: 'Blog'
        },
    ],
    resources_links: [
        {
            voice: 'Art Design'
        },
        {
            voice: 'Computer'
        },
        {
            voice: 'IT News'
        },
        {
            voice: 'Networking'
        },
        {
            voice: 'Web Security'
        }
    ],
})