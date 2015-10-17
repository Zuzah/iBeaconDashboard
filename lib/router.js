//Route file using the Meteor Iron library
Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',

});

//Home Route page
Router.route("/", {
  name: "homeIndex",

  data: function() {
    return {
      message: "Landing Page"
    }
  }

});

//CSR Page
Router.route("/customerReps", {
  name: "customerRepsIndex"

});

//Routing for /customerReps/employeeInfo
Router.route('/employeeInfo/:_objectId/:_repID', function(){
  var params = this.params;
  var objectId = params.objectId;
  this.render("employeeInfo",{
    data: function(){
      return this.params;
    }
  });
});


//Branch Page
Router.route("/branch", {
  name: "branchIndex"

});

//Contacts Page
Router.route("/contact", {
  name: "contactIndex"

});
