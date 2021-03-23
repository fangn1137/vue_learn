export default {
    template: `<button class="mood">{{ state ? 'On' : 'Off' }}</button>`,
    data: () => ({ state: false })
}