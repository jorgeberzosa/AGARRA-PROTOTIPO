const ids = [
  "tt4253316", "tt6662734", "tt1873562", "tt2910362", 
  "tt0093464", "tt0336218", "tt0456287", "tt4080012"
];

async function fetchMovies() {
  for (const id of ids) {
    try {
      const response = await fetch(`https://www.imdb.com/title/${id}/`, {
        headers: {
          "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
        }
      });
      const html = await response.text();
      const titleMatch = html.match(/<meta property="?og:title"? content="([^"]+)"/i);
      const imageMatch = html.match(/<meta property="?og:image"? content="([^"]+)"/i);
      const descMatch = html.match(/<meta property="?og:description"? content="([^"]+)"/i);

      console.log('---');
      console.log('ID:', id);
      console.log('Title:', titleMatch ? titleMatch[1].replace(/&#x27;/g, "'").split(' (')[0] : 'NOT FOUND');
      console.log('Desc:', descMatch ? descMatch[1].replace(/&#x27;/g, "'").split('. ')[0] + '.' : 'NOT FOUND');
      console.log('Image:', imageMatch ? imageMatch[1] : 'NOT FOUND');
    } catch (e) {
      console.log(id, 'ERR', e.message);
    }
  }
}

fetchMovies();
