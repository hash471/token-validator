"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const fs = require("fs");
const httpsOptions = {
    key: fs.readFileSync("./secrets/key.pem", "utf8"),
    cert: fs.readFileSync("./secrets/server.crt", "utf8"),
};
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { httpsOptions });
    app.enableCors();
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map