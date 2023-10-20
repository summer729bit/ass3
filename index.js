/**
 * @description Save which module user look
 *              When the user look all food, all landscape and all entertainment,
 *              The "Let's go have fun！" will appear from window bottom
 */
let lookItem = [];


/**
 * @desc Update the progress pointer position
 * @param top
 */
function renderPointer(top) {
    const progressBar = document.getElementById('progress-bar');
    const {height} = progressBar.getBoundingClientRect();
    const pointer = document.getElementById('pointer');
    pointer.style.transform = `translate(0, ${top}px)`;
}


/**
 * Listen user scroll the window, update the progress pointer position
 */
document.addEventListener('scroll', function (e) {
    renderPointer(window.scrollY / 4)
});

/**
 * When user hover a food or landscape or entertainment,
 * It will be saved to lookItem array, if lookItem array length
 * up to 12,  The "Let's go have fun！" will appear from window bottom
 * @param e
 */
function onLookItem(e) {
    if (e.dataset && e.dataset.item) {
        if (!lookItem.includes(e.dataset.item)) {
            lookItem.push(e.dataset.item);
        }
    }
    if (lookItem.length >= 12) {
        document.getElementById('fun').classList.add('fun-active')
    }
}