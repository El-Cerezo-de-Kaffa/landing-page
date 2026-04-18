import { isActive } from '../stores/stores';
import { get } from 'svelte/store';

const toggleMenu = () => {
    isActive.update((value) => !value);
}

function go_to_section(id: string) {
    const isMenuOpen = get(isActive)

    if(isMenuOpen) {
        toggleMenu();
    }

    setTimeout(() => {
        const navegation = document.querySelector(id);
        navegation?.scrollIntoView({ behavior: "smooth" })
    }, 250);
}

export { 
    isActive,
    toggleMenu,
    go_to_section 
};