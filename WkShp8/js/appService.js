    /*
      Author: Feilim Lawless
      Assignment: WE4 Mobile Web Applications, DSA, AngularJS Single Page App 
      Date: 12/09/2016
    */

    /* create a service named "SharedDataService" using the service() method. 
     A service is a singleton object that gets instantiated only once per running of app 
      - used as a means of passing data between views(ie to different controllers)*/

    toDoListApp.service("SharedDataService", function() {
        // declare array "listItems" to be used for storage of form submissions
        var listItems = [];

        // function accepts user-submitted data as a parameter and adds it to end of listItems array using javascript push() method
        var addItem = function(newItem) {
            listItems.push(

            {
              name: newItem.name,
              description: newItem.descr
            }

          );
        };

        // delete item from listItems as specified by the index parameter using javascript splice() method
        var deleteItem = function (index) {
        listItems.splice(index, 1);
        };

        // function to make available listItems array
        var getList = function() {
            return listItems;
        };
        // makes available the functions created within "SharedDataService"
        return {
            addItem: addItem,
            deleteItem: deleteItem,
            getList: getList
        };
    })