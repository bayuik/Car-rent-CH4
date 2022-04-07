class App {
  constructor() {
    this.carContainerElement = document.getElementById("cars-container");
  }

  async init(params) {
    const { driver, date, time, capacity: cap = 0 } = params;
    const filterCars = ({ available, capacity, availableAt }, item) => {
      if (available && availableAt.substring(0, 12) < `${date}T${time}` && capacity >= cap) {
        return item;
      }
    };
    const cars = await Binar.listCars(filterCars);
    Car.init(cars);
  }

  run = () => {
    Car.list.forEach((car) => {
      const node = document.createElement("div");
      node.innerHTML = car.render();
      node.classList.add("col-md-4");
      this.carContainerElement.appendChild(node);
    });
  };

}
