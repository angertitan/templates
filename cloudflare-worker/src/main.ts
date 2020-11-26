
async function handleRequest(request: Request): Promise<Response> {
}

addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request));
});
