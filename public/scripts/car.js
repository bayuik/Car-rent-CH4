class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    return `
      <div class="card p-4 m-2">
        <img src="${this.image}" alt="${this.model}" class="mb-5 rounded">
        <p class="fw-bold">${this.model}/${this.type}</p>
        <p class="fw-bold">Rp ${this.rentPerDay} / hari</p>
        <p class='description'>${this.description}</p>
        <p><i class="bi bi-people"></i> ${this.capacity} orang</p>
        <p><i class="bi bi-gear"></i> ${this.transmission}</p>
        <p><i class="bi bi-calendar4"></i> Tahun ${this.year}</p>
        <button class="btn btn-success">Pilih Mobil</button>
      </div>
    `;
  }
}
