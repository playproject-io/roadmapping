const csjs = require('csjs-inject')
const bel = require('bel')

const mxgraph = require('mxgraph')

const modules = require('_modules')
const about = require('_about')
const specification = require('_specification')
const roadmap = require('_roadmap')

console.log(mxgraph) // @TODO: play with mxgraph

module.exports = dashboard

function dashboard (opts) {
  const name = opts.name
  const pages = {
    modules: modules(),
    about: about(name),
    specification: specification(),
    roadmap: roadmap(),
  }
  const content = bel`<div class=${css.content}>${pages.about}</div>`
  const element = bel`<div class=${css.dashboard}>
    <div class=${css.menu}>
      <button class=${css.btn} onclick=${e => route(e, 'about')}> about </button>
      <button class=${css.btn} onclick=${e => route(e, 'specification')}> specification </button>
      <button class=${css.btn} onclick=${e => route(e, 'roadmap')}> roadmap </button>
      <button class=${css.btn} onclick=${e => route(e, 'modules')}> modules </button>
    </div>
    ${content}
  </div>`
  route({ currentTarget: element.children[0].children[0] }, 'about')
  return element

  function route ({ currentTarget: el, route = el.textContent.trim() }) {
    ;[...el.parentElement.children].forEach(el => el.classList.remove(css.marked))
    el.classList.add(css.marked)
    content.innerHTML = ''
    content.appendChild(pages[route])
  }
}
const css = csjs`
.dashboard {
  display: flex;
  flex-direction: column;
  height: 95vh;
}
.menu {
  border: 1px dashed black;
}
.btn {
  height: 30px;
}
.marked {
  border: 2px solid red;
}
.content {
  margin-top: 20px;
  border: 1px dashed black;
  display: grid;
  height: 100%;
  grid-template-areas: 'header';
  overflow: auto;
}`
