# <p align="center"> ADOTE UM ROBO <br> API </p> #

- ## API made to scrappe news from diferent sectors of the market (GET method only) ##

#### <p align="right" > Want to test it? <br> click [here](https://adoteumrobo-api.herokuapp.com/logistica) </p> ####

---

- ## URL ##

### ROOT ###

```markdown
# https://adoteumrobo-api.herokuapp.com
```

### PATHS ###

```markdown
# /automobilismo
# /educacao
# /financeiro
# /imobiliario
# /logistica
# /oleo_gas
# /saude
# /varejo
```

- ## SUCCESS RESPONSE ##

Status Code `200`

Response Content
```javascript
{
  newslist: Array,
  id: String,
  sector: String,
  site: String,
  date: String ( Weekday, Day 'of' month_name 'of' Year),
  _v: Number
}
```

- ## FETCH EXAMPLE ##

```javascript
fetch('https://adoteumrobo-api.herokuapp.com/logistica')
  .then( response => response.json() )
  .then( parsedResponse => console.log( parsedResponse ) )
```

## Made By ##

- ### [Joaquim Castro](https://github.com/Joaquim09Castro) ###
<a href="mailto:joaquimcastro2909@gmail.com?subject=Contact%20through%20Github">
  <img src="https://img.shields.io/badge/gmail-D14836?&style=plastic&logo=gmail&logoColor=white">
</a>
<a href="https://www.linkedin.com/in/joaquim-rodrigo-moraes-de-castro/">
  <img src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=plastic&logo=linkedin&logoColor=white">
</a>

<br><br>

- ### [Kelwin Ladeira](https://github.com/ladeirakelwin) ###
<a href="mailto:ladeirakelwin@gmail.com?subject=Contact%20through%20Github">
  <img src="https://img.shields.io/badge/gmail-D14836?&style=plastic&logo=gmail&logoColor=white">
</a>
<a href="https://www.linkedin.com/in/ladeirakelwin/">
  <img src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=plastic&logo=linkedin&logoColor=white">
</a>

<br><br>

- ### [Fabio Reis](https://github.com/Fabinnreis) ###
<a href="mailto:fabioreisti@outlook.com?subject=Contact%20through%20Github">
  <img src="https://img.shields.io/badge/outlook-3648D1?&style=plastic&logo=microsoft-outlook&logoColor=white">
</a>
<a href="https://www.linkedin.com/in/fabio-reis-chagas-41a704141/">
  <img src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=plastic&logo=linkedin&logoColor=white">
</a>
