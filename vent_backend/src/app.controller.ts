import { Controller, Get } from "@nestjs/common";

@Controller()
export class AppController {
  constructor(){}
  @Get()
  getHello(){
    return 'Hello from Vent Backend API';
  }
}
