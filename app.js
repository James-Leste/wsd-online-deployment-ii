import { serve } from "https://deno.land/std@0.202.0/http/server.ts";
import { configure, renderFile } from "https://deno.land/x/eta@v2.2.0/mod.ts";

configure({
  views: `${Deno.cwd()}/views/`,
});

const responseDetails = {
  headers: { "Content-Type": "text/html;charset=UTF-8" },
};

const data = {
  count: 0,
};

const handleRequest = async (request) => {
    var path = new URL(request.url).pathname;
    if (path === "/visits"){
        data.count++;
        return new Response(await renderFile("index.eta", data), responseDetails);
    } else if (path === "/meaning") {
        return new Response("Seeking truths beyond meaning of life, you will find 43.")
    } else {
        return new Response("Nothing here yet.")
    }
};

serve(handleRequest, { port: 7777 });
