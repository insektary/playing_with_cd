import React from 'react'

function Greeting({ name }) {
  const isIframe = window.self !== window.top
  const parentOrigin = document.referrer

  return <div><h1>ХУЙ</h1><div>{isIframe ? 'Iframe' : 'Not'}</div>{parentOrigin}<div></div><div>This component was exported from other project</div></div>;
}

export default function App() {
  return <Greeting name="world" />
}
