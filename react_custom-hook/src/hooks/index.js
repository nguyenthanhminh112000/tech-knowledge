var myObject = {
  foo: 'bar',
  func: function () {
    var self = this;
    console.log(self.foo); //
    console.log(this.foo); //
    (function () {
      console.log(self.foo); //
      console.log(this.foo); //
    })();
  },
};
