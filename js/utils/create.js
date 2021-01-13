/* eslint-disable import/extensions */
/* eslint linebreak-style: ["error", "windows"] */
/**
 * @param {String} HTMLtag
 * @param {String} classNames
 * @param {HTMLElement} parent
 * @param  {...array} dataAttr
 */

export default function create(HTMLtag, classNames, parent, ...dataAttr) {
  let element = null;
  try {
    element = document.createElement(HTMLtag);
  } catch (error) {
    throw new Error('Unable to create HTMLElement! Give a proper tag name');
  }

  if (classNames) element.classList.add(...classNames.split(' ')); // "class1 class2 class3"

  if (parent) {
    parent.appendChild(element);
  }

  if (dataAttr.length) {
    dataAttr.forEach(([attrName, attrValue]) => {
      if (attrName.match(/value|id|src|type|hidden|href|alt|name|width|height|for|required|autocomplete/)) {
        element.setAttribute(attrName, attrValue);
      } else if (attrName.match(/textContent/)) {
        element.textContent = `${attrValue}`;
      } else {
        element.dataset[attrName] = attrValue;
      }
    });
  }
  return element;
}
