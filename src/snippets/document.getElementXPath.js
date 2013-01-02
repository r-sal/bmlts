  /**
   * Gets an XPath for an element which describes its hierarchical location.
   */
  var getElementXPath = function(element) {
      if (element && element.id)
          return '//*[@id="' + element.id + '"]';
      else
          return getElementTreeXPath(element);
  };

  var getElementTreeXPath = function(element) {
      var paths = [];

      // Use nodeName (instead of localName) so namespace prefix is included (if any).
      for (; element && element.nodeType == 1; element = element.parentNode)  {
          var index = 0;
          // EXTRA TEST FOR ELEMENT.ID
          if (element && element.id) {
              paths.splice(0, 0, '/*[@id="' + element.id + '"]');
              break;
          }

          for (var sibling = element.previousSibling; sibling; sibling = sibling.previousSibling) {
              // Ignore document type declaration.
              if (sibling.nodeType == Node.DOCUMENT_TYPE_NODE)
                continue;

              if (sibling.nodeName == element.nodeName)
                  ++index;
          }

          var tagName = element.nodeName.toLowerCase();
          var pathIndex = (index ? "[" + (index+1) + "]" : "");
          paths.splice(0, 0, tagName + pathIndex);
      }

      return paths.length ? "/" + paths.join("/") : null;
  };