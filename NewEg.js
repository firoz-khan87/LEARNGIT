import React from 'react'
<p id= "demo"></p>
export default function NewEg() {
  let a  =10;
  let b  = 20;
  let c = a + b;
  document.getElementById('demo').innerHTML = c;
}
