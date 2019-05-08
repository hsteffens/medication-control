export function HandlerBarDOMHandlerFactory() {
  'ngInject';

  return HandlerBarDOMHandler;

  function HandlerBarDOMHandler(element, scope) {
    scope.metadata.handlers.forEach(handler => _prepareComponent(handler, element));

    function _prepareComponent(handler, element) {
      if (handler.type === 'lnk') {
        _prepareLink(handler, element);
      } else if (handler.type === 'btn') {
        _prepareButton(handler, element);
      }
    }
  
    function _prepareLink(handler, element) {
      let lnk = element.find('a');
      for (var i = 0; i < lnk.length; i++) {
        if (handler.id == lnk[i].id) {
          if (handler.disabled()) {
            lnk[i].classList.add('disabled');
          } else {
            lnk[i].classList.remove("disabled")
            lnk[i].classList.add(handler.class);
          }
            
          lnk[i].href = '#!/' + handler.redirect();
  
        }
      }
    }
  
    function _prepareButton(handler, element) {
      let button = element.find('button');
      for (var i = 0; i < button.length; i++) {
        if (handler.id == button[i].id) {
          button[i].disabled = handler.disabled();
          button[i].classList.add(handler.class);
          button[i].onclick = () => {
            scope.$emit('onStateChange', true);
          };
        }
      }
    }

  }
}