let onDOMReady = () =>
  $('#active_admin_content .tabs').tabs()

$(document).
  ready(onDOMReady).
  on('page:load turbo:load', onDOMReady)
