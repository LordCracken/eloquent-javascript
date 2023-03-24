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

  [Symbol.iterator] = () => new GroupIterator(this);
}

class GroupIterator {
  constructor(group) {
    this.groupList = group.list;
    this.groupLength = group.list.length;
    this.count = 0;
  }

  next = () => {
    if (this.count === this.groupLength) return { done: true };
    const value = this.groupList.at(this.count);
    this.count++;
    return { value, done: false };
  };
}

for (let value of Group.from(['a', 'b', 'c'])) {
  console.log(value);
}
