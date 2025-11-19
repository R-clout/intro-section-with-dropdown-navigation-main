document.addEventListener('alpine:init', () => {
    Alpine.data('snapHomepage', () => ({
        sidemenu: false,
        dropdown: true
    }))
})