
var App = {
  launch: function () {
    App.getheight();
    App.getweight();
    App.getBmi();
    
  },
  getheight: function () {
    let answer = prompt("enter your height", "150");
    if (answer != null) {
      $("#height").html(answer);
    }
  },
  getweight: function () {
    let answer = prompt("enter your weight", "70");
    if (answer != null) {
      $("#weight").html(answer);   
    }
  },

  getBmi: function () {
    let inputheight = parseFloat($('#height').html());
    let inputweight = parseFloat($('#weight').html());
    let answer = App.calculateBmi(inputheight, inputweight); 
    $("#bmi").html(answer);
    $(".displayText").css('display', 'inline-block');  
    alert("Your Bmi is " + answer );
    
  },
  calculateBmi: function (givenheight, givenweight) {
    if (typeof givenheight !== 'number' || typeof givenweight !== 'number') {
      throw Error('The given argument is not a number');
    }

    const minheight = 1;
    const minweight = 1;
    const maxheight = 500;
    const maxweight = 500;

    
    let height  
    if (givenheight < minheight) {
      height = minheight;
    }
    else if (givenheight > maxheight) {
      height = maxheight;
    }
    else {
      height = givenheight;
    }

    
    if (givenweight < minweight) {
      weight = minweight;
    }
    else if (givenweight > maxweight) {
      weight = maxweight;
    }
    else {
      weight = givenweight;
    }

        let Bmi = weight/((height/100)*(height/100)); 
        return Bmi;
  },
  
};

