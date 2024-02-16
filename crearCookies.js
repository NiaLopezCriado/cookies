if (!document.cookie.split("; ").includes(`ultimaVisita=${new Date().toLocaleString()}`)) {
    document.cookie = `preferencia=;max-age=+0`
    document.cookie = `ultimaVisita=;max-age=+0`
}

document.cookie = `idioma=${window.prompt("Indique su idioma.")}; max-age=+10`;
document.cookie = `tema=${window.prompt("Indique el tema que quiere.")}; max-age=+15`
document.cookie = `usuario=${window.prompt("Introduzca su nombre de usuario.")}; max-age=+20`
document.cookie = `preferencia=${window.prompt("Introduzca su preferencia.")}`
document.cookie = `ultimaVisita=${new Date().toLocaleString()}`

setInterval(mostrarCookies, 2000);
function mostrarCookies() {
    console.log(document.cookie);
}