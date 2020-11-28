function Model (id, name, address, zipCode){
  this.id = id;
  this.name = name;
  this.address = address;
  this.zipCode = zipCode;

  return {
    id: id,
    name: name,
    address: address,
    zipCode: zipCode
  }
}

export default Model