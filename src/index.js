const button = document.createElement('button');
button.innerText = 'Click Me';
button.onclick = () => {
    import('./image_viewer').then(module => module.default());
}

document.body.appendChild(button);