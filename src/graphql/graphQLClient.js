import { GraphQLClient } from "graphql-request";

const createFetchWithTimeout = (timeout) => async (input, init = {}) => {
  const controller = new AbortController();
  const timerId = setTimeout(() => controller.abort(), timeout);
  const signal = init.signal
    ? AbortSignal.any([init.signal, controller.signal])
    : controller.signal;

  if (signal.aborted) {
    clearTimeout(timerId);
    return Promise.reject(signal.reason || new Error("Aborted"));
  }

  try {
    return await fetch(input, { ...init, signal, cache: "no-store" });
  } finally {
    clearTimeout(timerId);
  }
};

export const graphcms = new GraphQLClient(process.env.NEXT_PUBLIC_CMS_BASE_URL, {
  fetch: createFetchWithTimeout(60000),
});