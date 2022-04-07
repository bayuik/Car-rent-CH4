const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
const app = new App();

if (Object.keys(params).length != 0 && params.date != '') {
  app.init(params).then(app.run);
}