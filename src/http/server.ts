import fastify from "fastify";
import { z } from 'zod';
import { prisma } from "../lib/prisma";
import { createPoll } from "./routes/create-polls";
import { getPoll } from "./routes/get-poll";
import { voteOnPoll } from "./routes/vote-on-poll";
import cookie from "@fastify/cookie";
import websocket from "@fastify/websocket";

const app = fastify();

app.register(cookie, {
    secret: "polls-app-ws",
    hook: 'onRequest',
});

app.register(websocket);

app.register(createPoll);
app.register(getPoll);
app.register(voteOnPoll);

app.listen({ port: 3333 }).then(() => {
    console.log('HTTP server running!');
})