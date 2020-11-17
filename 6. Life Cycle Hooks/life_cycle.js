Vue.component('todo-item', {
    // The todo-item component now accepts a
    // "prop", which is like a custom attribute.
    // This prop is called todo.
    props: ['todo'],
    // number: 'key',
    template: '<li> => {{ todo.text }}</li>'
})

var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            { id: 0, text: 'Vegetables' },
            { id: 1, text: 'Cheese' },
            { id: 2, text: 'Whatever else humans are supposed to eat' }
        ]
    },
    beforeCreate: function() {
        console.log("beforeCreate")
        console.log(this.groceryList)
    },
    created: function() {
        console.log("created")
        console.log(this.groceryList)
    },
    mounted: function() {
        console.log("mounted")
        console.log(this.groceryList)
    },
    updated: function() {
        console.log("updated")
        console.log(this.groceryList)
    },
    destroyed: function() {
        console.log("destroyed")
        console.log(this.groceryList)
    },
})

app7.groceryList = [{id: 1, text: 'Updated Data'}];