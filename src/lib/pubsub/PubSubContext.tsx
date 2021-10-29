import React from "react";
import { PubSub } from "./PubSub";

export const pubsub = new PubSub();

export const PubSubContext = React.createContext(pubsub);

