import { Hello } from "../domain-model/hello";

export class HelloResponseDto {
  message: string;

  constructor(hello: Hello) {
    this.message = `Hello ${hello.getName()}`;
  }
}
