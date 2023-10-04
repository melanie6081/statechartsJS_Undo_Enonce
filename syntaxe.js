import { createMachine } from "xstate";

export const machine = createMachine(
  {
    /** @xstate-layout N4IgpgJg5mDOIC5QGUCeA7ALgQwB5gDoBRHTARgGIIwBjAGzHRoAswBXAJwG0AGAXUSgADgHtYAS0ziR6QSFyIyAZjIEAnAHYlapTwCsOpQA4ATEoA0IVIiOqALBrVkAbM+V2TPHnaUBff5boItTwSCBoWHhgcqISUjJyCggAtM6W1inOAeEYOPjEpGQxYpLSsmFJHumK3gSmHmRGRnpuamrZEXmEJNiYJsVxZYmISnpKBGQ8zhqTLSYmzkppVjV2dSYNZHpeJkZuZP7+QA */
    id: "Syntaxe",
    initial: "Etat1",
    states: {
      Etat1: {
        on: {
          declencheur: {
            target: "Etat2",
            cond: "garde",
            actions: ["action"],
          },
        },
      },
      Etat2: {},
    },
    predictableActionArguments: true,
    preserveActionOrder: true,
  },
  {
    actions: { action: (context, event) => {} },
    services: {},
    guards: { garde: (context, event) => false },
    delays: {},
  },
);