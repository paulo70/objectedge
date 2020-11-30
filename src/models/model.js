function Model (id, name, address, zipCode, city){
  this.id = id;
  this.name = name;
  this.address = address;
  this.zipCode = zipCode;
  this.city = city

  return {
    id: id,
    name: name,
    address: address,
    zipCode: zipCode,
    city: city
  }
}

export default Model