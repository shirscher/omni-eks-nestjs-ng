import { Controller, Get } from '@nestjs/common';
import { SystemService } from './system.service';
import { SystemInfo } from './SystemInfo';

@Controller('system')
export class SystemController {
    constructor(private systemService: SystemService) { }

    @Get()
    async getSystemInfo(): Promise<SystemInfo> {
        var response = await this.systemService.getSystemInfo();
        return response;
    }

    @Get("/ping")
    async ping(): Promise<string> {
        return new Promise(resolve => {
            resolve("pong");
        });
    }
}
