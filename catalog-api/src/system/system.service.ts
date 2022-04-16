import { Injectable } from '@nestjs/common';
import { SystemInfo } from './SystemInfo';
import * as os from "os";

@Injectable()
export class SystemService {

    /**
     * 
     * @returns Information about the current system
     */
    getSystemInfo(): Promise<SystemInfo> {
        return new Promise(resolve => {
            const info = {
                version: process.env.APP_VERSION,
                nodeVersion: process.version,
                hostName: os.hostname()
            };

            resolve(info);
        });
    }
}
