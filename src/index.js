class Sorter {
  constructor() {
    // your implementation
    this.constr = [];
    
  }

  add(element) {
    // your implementation
    this.constr.push(element);  
  }

  at(index) {
    // your implementation
    return this.constr[index];
  }

  get length() {
    // your implementation
    return this.constr.length;
  }

  toArray() {
    // your implementation
    return  this.constr;
  }

  sort(indices) {
    // your implementation
    
  }

  setComparator(compareFunction) {
    // your implementation
    
  }
}

module.exports = Sorter;