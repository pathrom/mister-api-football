const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://misterfantasy.es/es/login");

  // Aquí deberías reemplazar 'username' y 'password' por los selectores correctos de los campos de entrada
  await page.type("#username", "tu_usuario");
  await page.type("#password", "tu_contraseña");

  // Aquí debes reemplazar 'button' por el selector correcto del botón de inicio de sesión
  await page.click("#button");
  await page.waitForNavigation();

  // Aquí haces el scraping de la página tras iniciar sesión
  // ...

  await browser.close();
})();
