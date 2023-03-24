class Group {
  constructor() {
    this.list = [];
  }

  static from = obj => {
    const group = new Group();

    for (const item of obj) {
      group.add(item);
    }

    return group;
  };

  add = value => {
    if (!this.has(value)) this.list.push(value);
  };

  delete = value => {
    this.list = this.list.filter(item => item !== value);
  };

  has = value => this.list.includes(value);
}

let group = Group.from([10, 20]);

console.log(group.has(10));
console.log(group.has(30));

group.add(10);
group.delete(10);

console.log(group.has(10));
