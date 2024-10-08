"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/routes/update.trip.ts
var update_trip_exports = {};
__export(update_trip_exports, {
  updateTrip: () => updateTrip
});
module.exports = __toCommonJS(update_trip_exports);
var import_zod2 = require("zod");

// src/lib/prisma.ts
var import_client = require("@prisma/client");

// src/env.ts
var import_zod = require("zod");
var envSchema = import_zod.z.object({
  NODE_ENV: import_zod.z.enum(["dev", "test", "production"]).default("dev"),
  DATABASE_URL: import_zod.z.string(),
  API_BASE_URL: import_zod.z.string(),
  WEB_BASE_URL: import_zod.z.string(),
  PORT: import_zod.z.coerce.number().default(3336)
});
var env = envSchema.parse(process.env);

// src/lib/prisma.ts
var prisma = new import_client.PrismaClient({
  log: env.NODE_ENV === "dev" ? ["query"] : []
});

// src/lib/dayjs.ts
var import_localizedFormat = __toESM(require("dayjs/plugin/localizedFormat"));
var import_pt_br = require("dayjs/locale/pt-br");
var import_dayjs = __toESM(require("dayjs"));
import_dayjs.default.locale("pt-br");
import_dayjs.default.extend(import_localizedFormat.default);

// src/errors/client-error.ts
var ClientError = class extends Error {
};

// src/routes/update.trip.ts
async function updateTrip(app) {
  app.withTypeProvider().put(
    "/trips/:tripId",
    {
      schema: {
        params: import_zod2.z.object({
          tripId: import_zod2.z.string().uuid()
        }),
        body: import_zod2.z.object({
          destination: import_zod2.z.string().min(4),
          starts_at: import_zod2.z.coerce.date(),
          ends_at: import_zod2.z.coerce.date()
        })
      }
    },
    async (request) => {
      const { tripId } = request.params;
      const { destination, starts_at, ends_at } = request.body;
      const trip = await prisma.trip.findUnique({
        where: { id: tripId }
      });
      if (!trip) {
        throw new ClientError("Trip not found");
      }
      if ((0, import_dayjs.default)(starts_at).isBefore(/* @__PURE__ */ new Date())) {
        throw new ClientError("Invalid trip start date.");
      }
      if ((0, import_dayjs.default)(ends_at).isBefore(starts_at)) {
        throw new ClientError("Invalid trip end date.");
      }
      await prisma.trip.update({
        where: { id: tripId },
        data: {
          destination,
          starts_at,
          ends_at
        }
      });
      return { tripId: trip.id };
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  updateTrip
});
