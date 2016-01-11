export class Something {
  async doing() {
    console.log('a');

    return await new Promise((res) => {
      console.log('b');

      res('c');
    });
  }

  async yo() {
    return await this.doing();
  }
}
