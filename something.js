export class Something {
  async doing() {
    console.log('a');

    var x = await new Promise((res) => {
      console.log('b');

      res('c');
    });

    console.log(x);
  }

  async yo() {
    return await Promise.resolve(123456789);
  }
}
