import { HelloRequestDto } from "bc/example/application/hello-request.dto";
import { HelloApplicationService } from "bc/example/application/hello.application.service";

const applicationService = new HelloApplicationService();
const response = applicationService.execute(new HelloRequestDto("Lorem"));
console.log(response.message);
