export default {
  async fetch(request, env) {

    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type"
        }
      });
    }

    if (request.method === "POST") {
      const { message } = await request.json();

      const result = await env.AI.run("@cf/meta/llama-3-8b-instruct", {
        prompt: `Analyze this network activity: ${message}`
      });

      return new Response(JSON.stringify({ response: result.response }), {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      });
    }

    return new Response("OK");
  }
};