var typedoc = typedoc || {};
            typedoc.search = typedoc.search || {};
            typedoc.search.data = {"kinds":{"32":"Variable","64":"Function","128":"Class","256":"Interface","1024":"Property","2048":"Method","2097152":"Object literal","4194304":"Type alias"},"rows":[{"id":0,"kind":256,"name":"Logger","url":"interfaces/logger.html","classes":"tsd-kind-interface"},{"id":1,"kind":2048,"name":"log","url":"interfaces/logger.html#log","classes":"tsd-kind-method tsd-parent-kind-interface","parent":"Logger"},{"id":2,"kind":2048,"name":"info","url":"interfaces/logger.html#info","classes":"tsd-kind-method tsd-parent-kind-interface","parent":"Logger"},{"id":3,"kind":2048,"name":"debug","url":"interfaces/logger.html#debug","classes":"tsd-kind-method tsd-parent-kind-interface","parent":"Logger"},{"id":4,"kind":2048,"name":"warn","url":"interfaces/logger.html#warn","classes":"tsd-kind-method tsd-parent-kind-interface","parent":"Logger"},{"id":5,"kind":2048,"name":"error","url":"interfaces/logger.html#error","classes":"tsd-kind-method tsd-parent-kind-interface","parent":"Logger"},{"id":6,"kind":256,"name":"StorageInterface","url":"interfaces/storageinterface.html","classes":"tsd-kind-interface"},{"id":7,"kind":2048,"name":"get","url":"interfaces/storageinterface.html#get","classes":"tsd-kind-method tsd-parent-kind-interface","parent":"StorageInterface"},{"id":8,"kind":2048,"name":"set","url":"interfaces/storageinterface.html#set","classes":"tsd-kind-method tsd-parent-kind-interface","parent":"StorageInterface"},{"id":9,"kind":2048,"name":"getMultiple","url":"interfaces/storageinterface.html#getmultiple","classes":"tsd-kind-method tsd-parent-kind-interface","parent":"StorageInterface"},{"id":10,"kind":2048,"name":"setMultiple","url":"interfaces/storageinterface.html#setmultiple","classes":"tsd-kind-method tsd-parent-kind-interface","parent":"StorageInterface"},{"id":11,"kind":2048,"name":"delete","url":"interfaces/storageinterface.html#delete","classes":"tsd-kind-method tsd-parent-kind-interface","parent":"StorageInterface"},{"id":12,"kind":256,"name":"Storages","url":"interfaces/storages.html","classes":"tsd-kind-interface"},{"id":13,"kind":1024,"name":"localstorage","url":"interfaces/storages.html#localstorage","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"Storages"},{"id":14,"kind":1024,"name":"cookie","url":"interfaces/storages.html#cookie","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"Storages"},{"id":15,"kind":1024,"name":"jsobject","url":"interfaces/storages.html#jsobject","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"Storages"},{"id":16,"kind":256,"name":"InitOptions","url":"interfaces/initoptions.html","classes":"tsd-kind-interface"},{"id":17,"kind":1024,"name":"type","url":"interfaces/initoptions.html#type","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"InitOptions"},{"id":18,"kind":1024,"name":"logger","url":"interfaces/initoptions.html#logger","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"InitOptions"},{"id":19,"kind":1024,"name":"verbose","url":"interfaces/initoptions.html#verbose","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"InitOptions"},{"id":20,"kind":256,"name":"CookieOptions","url":"interfaces/cookieoptions.html","classes":"tsd-kind-interface"},{"id":21,"kind":1024,"name":"exdays","url":"interfaces/cookieoptions.html#exdays","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"CookieOptions"},{"id":22,"kind":1024,"name":"exhours","url":"interfaces/cookieoptions.html#exhours","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"CookieOptions"},{"id":23,"kind":1024,"name":"exminutes","url":"interfaces/cookieoptions.html#exminutes","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"CookieOptions"},{"id":24,"kind":1024,"name":"path","url":"interfaces/cookieoptions.html#path","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"CookieOptions"},{"id":25,"kind":4194304,"name":"Options","url":"globals.html#options","classes":"tsd-kind-type-alias"},{"id":26,"kind":4194304,"name":"AvailableStorages","url":"globals.html#availablestorages","classes":"tsd-kind-type-alias"},{"id":27,"kind":64,"name":"tryParse","url":"globals.html#tryparse","classes":"tsd-kind-function"},{"id":28,"kind":128,"name":"Storage","url":"classes/storage.html","classes":"tsd-kind-class"},{"id":29,"kind":2097152,"name":"logger","url":"classes/storage.html#logger","classes":"tsd-kind-object-literal tsd-parent-kind-class tsd-is-private","parent":"Storage"},{"id":30,"kind":64,"name":"debug","url":"classes/storage.html#logger.debug","classes":"tsd-kind-function tsd-parent-kind-object-literal","parent":"Storage.logger"},{"id":31,"kind":64,"name":"log","url":"classes/storage.html#logger.log","classes":"tsd-kind-function tsd-parent-kind-object-literal","parent":"Storage.logger"},{"id":32,"kind":64,"name":"info","url":"classes/storage.html#logger.info","classes":"tsd-kind-function tsd-parent-kind-object-literal","parent":"Storage.logger"},{"id":33,"kind":64,"name":"warn","url":"classes/storage.html#logger.warn","classes":"tsd-kind-function tsd-parent-kind-object-literal","parent":"Storage.logger"},{"id":34,"kind":64,"name":"error","url":"classes/storage.html#logger.error","classes":"tsd-kind-function tsd-parent-kind-object-literal","parent":"Storage.logger"},{"id":35,"kind":1024,"name":"verbose","url":"classes/storage.html#verbose","classes":"tsd-kind-property tsd-parent-kind-class tsd-is-private","parent":"Storage"},{"id":36,"kind":1024,"name":"selectedStorage","url":"classes/storage.html#selectedstorage","classes":"tsd-kind-property tsd-parent-kind-class tsd-is-private","parent":"Storage"},{"id":37,"kind":2097152,"name":"storages","url":"classes/storage.html#storages","classes":"tsd-kind-object-literal tsd-parent-kind-class tsd-is-private","parent":"Storage"},{"id":38,"kind":32,"name":"localstorage","url":"classes/storage.html#storages.localstorage","classes":"tsd-kind-variable tsd-parent-kind-object-literal","parent":"Storage.storages"},{"id":39,"kind":32,"name":"cookie","url":"classes/storage.html#storages.cookie","classes":"tsd-kind-variable tsd-parent-kind-object-literal","parent":"Storage.storages"},{"id":40,"kind":32,"name":"jsobject","url":"classes/storage.html#storages.jsobject","classes":"tsd-kind-variable tsd-parent-kind-object-literal","parent":"Storage.storages"},{"id":41,"kind":2048,"name":"init","url":"classes/storage.html#init","classes":"tsd-kind-method tsd-parent-kind-class","parent":"Storage"},{"id":42,"kind":2048,"name":"setLogger","url":"classes/storage.html#setlogger","classes":"tsd-kind-method tsd-parent-kind-class","parent":"Storage"},{"id":43,"kind":2048,"name":"setStorage","url":"classes/storage.html#setstorage","classes":"tsd-kind-method tsd-parent-kind-class","parent":"Storage"},{"id":44,"kind":2048,"name":"set","url":"classes/storage.html#set","classes":"tsd-kind-method tsd-parent-kind-class","parent":"Storage"},{"id":45,"kind":2048,"name":"setMultiple","url":"classes/storage.html#setmultiple","classes":"tsd-kind-method tsd-parent-kind-class","parent":"Storage"},{"id":46,"kind":2048,"name":"get","url":"classes/storage.html#get","classes":"tsd-kind-method tsd-parent-kind-class","parent":"Storage"},{"id":47,"kind":2048,"name":"getMultiple","url":"classes/storage.html#getmultiple","classes":"tsd-kind-method tsd-parent-kind-class","parent":"Storage"},{"id":48,"kind":2048,"name":"delete","url":"classes/storage.html#delete","classes":"tsd-kind-method tsd-parent-kind-class","parent":"Storage"},{"id":49,"kind":2048,"name":"isLocalStorageSupported","url":"classes/storage.html#islocalstoragesupported","classes":"tsd-kind-method tsd-parent-kind-class","parent":"Storage"}]};