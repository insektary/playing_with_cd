import React from 'react'

import { ExportedComponent } from './ExportedComponent'

function Greeting({ name }) {
  const isIframe = window.self !== window.top
  const parentOrigin = document.referrer

  return <div><h1>ХУЙ</h1><div>{isIframe ? 'Iframe' : 'Not'}</div>{parentOrigin}<div></div><ExportedComponent /></div>;
}

export default function App() {
  return <Greeting name="world" />
}
