function Model (id, name, address, zipCode, city, billing){
  this.id = id;
  this.name = name;
  this.address = address;
  this.zipCode = zipCode;
  this.city = city;
  this.billing = billing;

  return {
    id: id,
    name: name,
    address: address,
    zipCode: zipCode,
    city: city,
    billing: billing
  }
}

export default Model