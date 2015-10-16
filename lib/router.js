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

//Contacts Page
Router.route("/contact", {
  name: "contactIndex"

});
