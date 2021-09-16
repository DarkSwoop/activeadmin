function hasTurbo() {
  return (typeof Turbo !== 'undefined');
}

function turboVisit(params) {
  const path = [window.location.pathname, '?', toQueryString(params)].join('')
  Turbo.visit(path);
}

function queryString() {
  return (window.location.search || '').replace(/^\?/, '');
}

function queryStringToParams() {
  const decode = (value) => decodeURIComponent((value || '').replace(/\+/g, '%20'));

  return queryString()
    .split("&")
    .map(pair => pair.split("="))
    .map(([key, value]) => {
      return { name: decode(key), value: decode(value) }
    });
}

function toQueryString(params) {
  const encode = (value) => encodeURIComponent(value || '');

  return params
    .map(({name, value}) => [ encode(name), encode(value) ])
    .map(pair => pair.join('='))
    .join('&')
}

export {
  hasTurbo,
  turboVisit,
  queryString,
  queryStringToParams,
  toQueryString
};
