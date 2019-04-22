function produceDrivingRange(range) {
  return function (startBlock, endBlock) {
    let dif = parseInt(endBlock) - parseInt(startBlock);
    if (dif > range) {
      return `${dif - range} blocks out of range`;
    } else {
      return `within range by ${range - dif}`
    }
  }
}

function produceTipCalculator(tipPercent) {
  return function (fare) {
    return fare * tipPercent;
  }
}

function createDriver() {
  let driverId = 0;
  return class Driver {
    constructor(name) {
      this.name = name;
      this.id = ++driverId;
    }
  }
}
