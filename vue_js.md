#### Here are the list of Vue.js topics that you should start learning and coding about. Best way would be to write small programs and mini projects to get hands on with these topics. There is enough documentation available on vuejs.org Refer to version 2.x

* Components in depth
    * Declarative rendering (done)
    * Conditionals and loops (done)
    * Handling User inputs
    * Data and methods (Done)
    * Lifecycle hooks (Done)
    * Template syntax

* Component options
    * Computed properties
    * Watchers
    * Event Handling
    * Form input bindings
    * Props
    * Custom events
    * Slots

* Directives, mixins

* Router API

* Reactivity in depth
    * How changes are tracked ( change detection )
    * Change detection caveats and solutions
    * Declaring reactive properties

* Vuex store
    * State
    * actions
    * Mutations
    * getters
    * Modules

#### Other libraries to read

* Axios
    * How to use Axios
    * How to make HTTP requests
    * How to use interceptors

* Vee-validate
    * How to use vee-validate in forms
    * predefined rules
    * how to add custom rules
    * dictionary object to store custom messages
    * errors object

===================================================================================================================================================================

# **Directives**
1. `v-bind`
> The *v-bind* attribute you are using is called a *directive*. Directives are prefixed with `v-` to indicate that they are special attributes provided by *Vue*, and as you may have guessed, they apply special **reactive behavior** to the rendered DOM. Here, it is basically saying, *keep this element’s title attribute up-to-date with the message property on the Vue instance.*

> If you open up your JavaScript console again and enter

```
app2.message = 'some new message'
```


> you’ll once again see that the bound HTML - in this case the title attribute - has been updated.

2. `v-on`
> In Vue, the `v-on` directive is how you run JavaScript in response to DOM events. If you want to run some code when the user clicks a button, you should use `v-on`.

> Example:

```
v-on:click=method_name
```

> This allows us to attach *event listners* that invoke methods on our view instances. So here, we are listening the click event and when the click is pressed, *method_name* method gets invoked.

3. `v-model`
> It makes two-way binding between form input and app state a breeze.

# **Composing with Components**
> The component system is another important concept in Vue, because it’s an abstraction that allows us to build large-scale applications composed of small, self-contained, and often reusable components. If we think about it, almost any type of application interface can be abstracted into a tree of components.

> In Vue, a component is essentially a Vue instance with pre-defined options. Registering a component in Vue is straightforward:

```
// Define a new component called todo-item
Vue.component('todo-item', {
  template: '<li>This is a todo</li>'
})

var app = new Vue(...)
```

> Now you can compose it in another component’s template:

```
<ol>
  <!-- Create an instance of the todo-item component -->
  <todo-item></todo-item>
</ol>
```

# **Vue Instance**

> Every Vue application starts by creating a new Vue instance with the Vue function:

```
var vm = new Vue({
  // options
})
```

> Although not strictly associated with the MVVM pattern, Vue’s design was partly inspired by it. As a convention, we often use the variable vm (short for ViewModel) to refer to our Vue instance. When you create a Vue instance, you pass in an options object. Click [link](https://vuejs.org/v2/api/#Options-Data) for more about Options object.

> When a Vue instance is created, it adds all the properties found in its *data object* to Vue’s *reactivity system*. When the values of those properties change, the view will “react”, updating to match the new values.

```
// Our data object
var data = { a: 1 }

// The object is added to a Vue instance
var vm = new Vue({
  data: data
})

// Getting the property on the instance
// returns the one from the original data
vm.a == data.a // => true

// Setting the property on the instance
// also affects the original data
vm.a = 2
data.a // => 2

// ... and vice-versa
data.a = 3
vm.a // => 3
```

> When this data changes, the view will re-render. It should be noted that properties in data are only reactive if they existed when the instance was created. That means if you add a new property, like:

```
vm.b = 'hi'
```

> Then changes to b will not trigger any view updates. If you know you’ll need a property later, but it starts out empty or non-existent, you’ll need to set some initial value. For example:

```
data: {
  newTodoText: '',
  visitCount: 0,
  hideCompletedTodos: false,
  todos: [],
  error: null
}
```

> The only exception to this being the use of Object.freeze(), which prevents existing properties from being changed, which also means the reactivity system can’t track changes.

```
var obj = {
  foo: 'bar'
}

Object.freeze(obj)

new Vue({
  el: '#app',
  data: obj
})
```

> In addition to data properties, Vue instances expose a number of useful instance properties and methods. These are *prefixed* with **$** to differentiate them from *user-defined* properties. For example:

```
var data = { a: 1 }
var vm = new Vue({
  el: '#example',
  data: data
})

vm.$data === data // => true
vm.$el === document.getElementById('example') // => true

// $watch is an instance method
vm.$watch('a', function (newValue, oldValue) {
  // This callback will be called when `vm.a` changes
})
```

Click [here](https://vuejs.org/v2/api/#Instance-Properties) for more info on this.


# **Instance Life Cycle Hooks**

> Each Vue instance goes through a series of initialization steps when it’s created - for example, it needs to set up data observation, compile the template, mount the instance to the DOM, and update the DOM when data changes. Along the way, it also runs functions called lifecycle hooks, giving users the opportunity to add their own code at specific stages.

For example, the created hook can be used to run code after an instance is created:

```
new Vue({
  data: {
    a: 1
  },
  created: function () {
    // `this` points to the vm instance
    console.log('a is: ' + this.a)
  }
})
// => "a is: 1"
```

## **Life Cycle Chart**

![Vue Object Life Cycle](./lifecycle.png1)

# **Template Syntax**
> Vue.js uses an HTML-based template syntax that allows you to declaratively bind the rendered DOM to the underlying Vue instance’s data. All Vue.js templates are valid HTML that can be parsed by spec-compliant browsers and HTML parsers.

### Interpolations
1. Text
> The most basic form of data binding is text interpolation using the “Mustache” syntax (double curly braces):
```
<span>Message: {{ msg }}</span>
```

> You can also perform one-time interpolations that do not update on data change by using the v-once directive, but keep in mind this will also affect any other bindings on the same node:

```
<span v-once>This will never change: {{ msg }}</span>
```

2. Raw HTML
> The double mustaches interprets the data as plain text, not HTML. In order to output real HTML, you will need to use the v-html directive:
```
<p>Using v-html directive: <span v-html="rawHtml"></span></p>
```

3. Attributes
> Mustaches cannot be used inside HTML attributes. Instead, use a v-bind directive:
```
<div v-bind:id="dynamicId"></div>
``` 
> In the case of boolean attributes, where their mere existence implies true, v-bind works a little differently. In this example:
```
<button v-bind:disabled="isButtonDisabled">Button</button>
```

4. Using JavaScript Expressions
```
{{ number + 1 }}

{{ ok ? 'YES' : 'NO' }}

{{ message.split('').reverse().join('') }}

<div v-bind:id="'list-' + id"></div>
```

5. Directives
> Directives are special attributes with the v- prefix. Directive attribute values are expected to be a single JavaScript expression (with the exception of v-for, which will be discussed later). A directive’s job is to reactively apply side effects to the DOM when the value of its expression changes. Let’s review the example we saw in the introduction:

```
<p v-if="seen">Now you see me</p>
```

6. Arguments
> Some directives can take an “argument”, denoted by a colon after the directive name. For example, the v-bind directive is used to reactively update an HTML attribute:
```
<a v-bind:href="url"> ... </a>
```
> Here href is the argument, which tells the v-bind directive to bind the element’s href attribute to the value of the expression url.

> Another example is the v-on directive, which listens to DOM events:
```
<a v-on:click="doSomething"> ... </a>
```

7. Dynamic Arguments
> Starting in version 2.6.0, it is also possible to use a JavaScript expression in a directive argument by wrapping it with square brackets:
```
<!--
Note that there are some constraints to the argument expression, as explained
in the "Dynamic Argument Expression Constraints" section below.
-->
<a v-bind:[attributeName]="url"> ... </a>
```
> Here attributeName will be dynamically evaluated as a JavaScript expression, and its evaluated value will be used as the final value for the argument. For example, if your Vue instance has a data property, attributeName, whose value is "href", then this binding will be equivalent to v-bind:href.

> Similarly, you can use dynamic arguments to bind a handler to a dynamic event name:
```
<a v-on:[eventName]="doSomething"> ... </a>
```