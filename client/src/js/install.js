const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    
    // Store the event for later use
    window.deferredPrompt = event;

    // Show the install button
    butInstall.removeAttribute('hidden', false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;

    // Check if there is a prompt event
    if (!promptEvent) {
        return;
    }

    // Show the prompt
    promptEvent.prompt();

    // Wait for the user to respond to the prompt
    window.choiceResult = await promptEvent.userChoice;

    // Hide the install button
    butInstall.setAttribute('hidden', true);
});
    


// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {

    window.deferredPrompt = null;
    
});
