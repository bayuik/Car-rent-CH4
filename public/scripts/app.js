class App {
  constructor() {
    this.carContainerElement = document.getElementById("cars-container");
  }

  async init() {
    await this.load();
  }

  run = () => {
    Car.list.forEach((car) => {
      const node = document.createElement("div");
      node.innerHTML = car.render();
      node.classList.add("col-md-4");
      this.carContainerElement.appendChild(node);
    });
  };

  async load() {
    const cars = await Binar.listCars();
    Car.init(cars);
  }

  clear = () => {};
}
