import { Hello } from "../domain-model/hello";
import { HelloRequestDto } from "./hello-request.dto";
import { HelloResponseDto } from "./hello-response.dto";

export class HelloApplicationService {
  execute({ name }: HelloRequestDto): HelloResponseDto {
    const hello = new Hello(name);
    return new HelloResponseDto(hello);
  }
}
