import '@styles/styles.css';
import json from '@assets/json'

const description = document.querySelector('.json');
description.textContent = json.title.toString();
console.log(json);