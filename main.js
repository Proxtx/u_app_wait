export class App {
  constructor(_config) {}

  async wait(time) {
    await new Promise((r) => setTimeout(r, time));
  }
}
