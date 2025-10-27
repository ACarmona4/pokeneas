const { getRandomPokenea } = require('../services/pokeneas.service');
const { getContainerId } = require('../utils/container');

function getBasicInfo(_req, res) {
  const pokenea = getRandomPokenea();
  res.json({
    id: pokenea.id,
    nombre: pokenea.nombre,
    altura: pokenea.altura,
    habilidad: pokenea.habilidad,
    containerId: getContainerId(),
  });
}

function getImageAndQuote(_req, res) {
  const pokenea = getRandomPokenea();
  const idContainer = getContainerId();
  res.type('html').send(`
    <!doctype html><html lang="es"><head><meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width,initial-scale=1"/>
    <title>${pokenea.nombre}</title>
    <style>
      body { font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial; margin: 40px; }
      .card { max-width:560px; margin:auto; border:1px solid #eee; padding:24px; border-radius:16px; }
      img { max-width:100%; border-radius:12px; display:block; margin:16px 0; }
      .name { font-size:1.5rem; font-weight:700; }
      .quote { font-style: italic; color:#333; margin-top:8px; }
      .cid { margin-top:16px; font-size:.875rem; color:#666; }
    </style></head><body>
      <div class="card">
        <div class="name">${pokenea.nombre}</div>
        <img src="${pokenea.imagen}" alt="${pokenea.nombre}"/>
        <p class="quote">“${pokenea.frase}”</p>
        <div class="cid">containerId: <strong>${idContainer}</strong></div>
      </div>
    </body></html>
  `);
}

module.exports = { getBasicInfo, getImageAndQuote };