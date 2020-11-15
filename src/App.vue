<template>
  <div id="app">
    <h1>Step 2:</h1>
    <code v-html="stepOneRange(dummySecuence)" />
  </div>
</template>

<script>

export default {
  name: 'App',
  data: function() {
    return {
      dummySecuence: [...Array(20).keys()]
    }
  },
  methods: {
    stepOneRange(secuence){
      let result = secuence.map((element) => {
        let item = element + 1; 
        
        let hasThree = (item).toString().search("3") != -1;
        let isMultipleOfThree = item % 3 == 0;
        let isMultipleOfFive = item % 5 == 0;
        let isMultipleOfFifteen = item % 15 == 0;

        if(hasThree){
          return "lucky";
        }
        else if(isMultipleOfFifteen){
          return "fizzbuzz";
        }
        else if(isMultipleOfFive){
          return "buzz";
        }
        else if(isMultipleOfThree){
          return "fizz";
        } else {
          return item;
        }
      });

      return result.join(' ');
    }
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat');

body {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding: 30px 15px;
  background-color: #2e3038;
  color: #d2d2d2;
}

h1 {
  color: #c79f42;
  font-size: 23px;
  font-weight: 200;
  text-transform: uppercase;
  margin-bottom: 3rem;
  letter-spacing: 6px;
  text-shadow: 2px 2px 2px rgb(0 0 0 / 50%);
}

code {
  padding: 1rem 2rem;
  background: #393c46;
  border-radius: 5px;
  margin: 1rem 0 3rem;
}
</style>
