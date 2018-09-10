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
    return this.constr;
  }

  sort(indices) {
    // your implementation
    let subAConstr = indices
      .sort()
      .map(index => this.constr[index])
      .sort(this.compareFunction || ((left, right) => left - right));
    indices.forEach(
      (index, iterator) => (this.constr[index] = subAConstr[iterator])
    );
  }

  setComparator(compareFunction) {
    // your implementation
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;
