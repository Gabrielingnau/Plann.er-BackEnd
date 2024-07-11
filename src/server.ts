import cors from '@fastify/cors'
import { fastify } from "fastify";
import { serializerCompiler, validatorCompiler } from "fastify-type-provider-zod";
import { createTrip } from "./routes/create-trip";
import { confirmTrip } from "./routes/confirm-trip";
import { confirmParticipants } from "./routes/confirm-participant";
import { createActivity } from "./routes/create-activity";
import { getActivities } from "./routes/get-activities";
import { createLink } from "./routes/create-link";
import { getLinks } from "./routes/get-links";
import { getParticipant } from "./routes/get-participant";
import { createInvite } from "./routes/create-invite";
import { updateTrip } from "./routes/update.trip";
import { env } from "./env";
import { getTripDetails } from './routes/get-trip-details';
import { getParticipants } from './routes/get-participants';
import 'dotenv/config'

const app = fastify()

app.register(cors, {
  origin: '*',
})

app.register(createTrip)
app.register(confirmTrip)
app.register(confirmParticipants)
app.register(createActivity)
app.register(getActivities)
app.register(createLink)
app.register(getLinks)
app.register(getParticipant)
app.register(createInvite)
app.register(updateTrip)
app.register(getTripDetails)
app.register(getParticipants)

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.listen({
  host: '0.0.0.0',
  port: env.PORT,
}).then(() => {
  console.log(`Server running`)
})