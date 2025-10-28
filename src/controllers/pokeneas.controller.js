const fs = require('fs');
const path = require('path');
const { getRandomPokenea } = require('../services/pokeneas.service');
const { getContainerId } = require('../utils/container');

const templatePath = path.join(__dirname, '..', 'views', 'pokenea.html');
const templateHtml = fs.readFileSync(templatePath, 'utf8');

function render(html, data) {
  return html.replace(/\{\{(\w+)\}\}/g, (_, key) => (data[key] ?? ''));
}

function getBasicInfo(_req, res) {
  const pokenea = getRandomPokenea();
  res.json({
    id: pokenea.id,
    nombre: pokenea.nombre,
    altura: pokenea.altura,
    habilidad: pokenea.habilidad,
    containerId: getContainerId()
  });
}

function getImageAndQuote(_req, res) {
  const pokenea = getRandomPokenea();
  const html = render(templateHtml, {
    nombre: pokenea.nombre,
    imagen: pokenea.imagen,
    frase: pokenea.frase,
    containerId: getContainerId()
  });
  res.type('html').send(html);
}

module.exports = { getBasicInfo, getImageAndQuote };