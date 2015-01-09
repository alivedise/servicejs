# servicejs
In the world of asynchronous loading we will find we need to ask other modules to do something for us even before it is loaded.
servicejs is created as a request queuing system across your modules.
A module could request at any timing without check if other module is loaded or active.

Note: You need to have your own loader; servicejs does not load the requestee for you.

## Usage ##
### Sample 1 ###
```js
  var A = {
    name: 'A',
    show: function() {
      Service.request('B:hide');
    }
  };
  Service.register('show', A);
  var B = {
    name: 'B',
    isVisible: function() {},
    hide: function() {}
  };
  Service.register('hide', B);
  Service.registerState('isVisible', B);
  A.show(); // B.hide() will be executed in a promise.
```
