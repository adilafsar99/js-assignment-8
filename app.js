var taskNum = 0;
while (taskNum < 1 || taskNum > 8 || taskNum === "" || taskNum === null || taskNum != Number(taskNum))
{
  taskNum = prompt("Enter task number:")
  if (taskNum === "")
  {
    alert("Please enter some value!");
  }
  else if (taskNum === null)
  {
    alert("You can't cancel!")
  }
  else if (taskNum < 1 || taskNum > 8)
  {
    alert("The available tasks are from 1 to 8!");
  }
  else if (taskNum != Number(taskNum))
  {
    alert("Please enter numbers only!");
  }
}

taskNum = +taskNum;
if (taskNum === 1)
{
  var floatNum = "";
  while (floatNum === "" || floatNum === null || floatNum != Number(floatNum) || Number(floatNum) < 0 || floatNum.indexOf(".") === -1)
  {
    floatNum = prompt("Enter a positive decimal number:");
    if (floatNum === "")
    {
      alert("You entered nothing!");
    }
    else if (floatNum === null)
    {
      alert("You can't cancel!");
    }
    else if (floatNum != Number(floatNum))
    {
      alert("This isn't a number!");
    }
    else if (Number(floatNum) < 0)
    {
      alert("This is a negative number!");
    }
    else if (floatNum.indexOf(".") === -1)
    {
      alert("This is an integer!");
    }
  }

  document.write("Number: " + floatNum + "<br />");
  document.write("Round off value: " + Math.round(floatNum) + "<br />");
  document.write("Floor value: " + Math.floor(floatNum) + "<br />");
  document.write("Ceil value: " + Math.ceil(floatNum) + "<br />");
}

else if (taskNum === 2)
{
  var floatNum = "";
  while (floatNum === "" || floatNum === null || floatNum != Number(floatNum) || Number(floatNum) > -1 || floatNum.indexOf(".") === -1)
  {
    floatNum = prompt("Enter a negative decimal number:");
    if (floatNum === "")
    {
      alert("You entered nothing!");
    }
    else if (floatNum === null)
    {
      alert("You can't cancel!");
    }
    else if (floatNum != Number(floatNum))
    {
      alert("This isn't a number!");
    }
    else if (Number(floatNum) > -1)
    {
      alert("This is a positive number!");
    }
    else if (floatNum.indexOf(".") === -1)
    {
      alert("This is an integer!");
    }
  }

  document.write("Number: " + floatNum + "<br />");
  document.write("Round off value: " + Math.round(floatNum) + "<br />");
  document.write("Floor value: " + Math.floor(floatNum) + "<br />");
  document.write("Ceil value: " + Math.ceil(floatNum) + "<br />");
}

else if (taskNum === 3)
{
  var userInput = "";
  while (userInput === "" || userInput === null || userInput != Number(userInput))
  {
    userInput = prompt("Enter a number:");
    if (userInput === "")
    {
      alert("You entered nothing!");
    }
    else if (userInput === null)
    {
      alert("You can't cancel!");
    }
    else if (userInput != Number(userInput))
    {
      alert("This is not a number!");
    }
  }
  userInput = Number(userInput);
  var absValue = Math.abs(userInput);
  alert("The absolute value of " + userInput + " is " + absValue + ".");
}

else if (taskNum === 4)
{
  var diceValue = Math.floor(Math.random() * 6 + 1);
  document.write("Random dice value: " + diceValue);
}

else if (taskNum === 5)
{
  var randomNum = Math.floor(Math.random() * 2 + 1);
  if (randomNum === 1)
  {
    var coinValue = "Tails";
  }
  else
  {
    var coinValue = "Heads";
  }
  document.write(randomNum + "<br />");
  document.write("Random coin value: " + coinValue);
}

else if (taskNum === 6)
{
  var randomNum = Math.floor(Math.random() * 100 + 1);
  document.write("Random number between 1 and 100: " + randomNum);
}

else if (taskNum === 7)
{
  var userWeight = "";
  var validInput = false;
  while (userWeight === "" || userWeight === null || validInput === false)
  {
    userWeight = prompt("Enter your weight in kilograms: (e.g. 50, 50kgs or 50kilograms)");
    if (userWeight === "")
    {
      alert("You entered nothing!");
    }
    else if (userWeight === null)
    {
      alert("You can't cancel!");
    }
    else if (userWeight != Number(userWeight))
    {
      if (userWeight.indexOf("kgs") === -1 && userWeight.indexOf("kilograms") === -1)
      {
        alert("Something other than kgs or kilograms is not allowed!");
      }
      else if (userWeight.replace("kgs", "") != Number(userWeight.replace("kgs", "")) && userWeight.replace("kilograms", "") != Number(userWeight.replace("kilograms", "")))
      {
        alert("Something other than kgs or kilograms is not allowed!");
      }
      else if (userWeight.indexOf("kgs") === 0 || userWeight.indexOf("kilograms") === 0)
      {
        alert("The input has words at the start!");
      }
      else if (userWeight.indexOf("s") !== userWeight.length - 1)
      {
        alert("The input has words in between.");
      }
      else
      {
        validInput = true;
      }
    }
    else
    {
      validInput = true;
    }
  }
  if (userWeight.indexOf("kgs") !== -1)
  {
    userWeight = userWeight.replace("kgs", "");
  }
  else
  {
    userWeight = userWeight.replace("kilograms", "");
  }
  document.write("The weight of user is " + userWeight + " kilograms.");
}

else if (taskNum === 8)
{
  var secretNum = Math.floor(Math.random() * 10 + 1);
  var userInput = "";
  while (userInput === "" || userInput === null || userInput != Number(userInput) || userInput < 1 || userInput > 10)
  {
    userInput = prompt("Enter a number between 1 and 10:");
    if (userInput === "")
    {
      alert("You entered nothing!");
    }
    else if (userInput === null)
    {
      alert("You can't cancel!");
    }
    else if (userInput < 1 || userInput > 10)
    {
      alert("Your input is out of range!");
    }
    else if (Number(userInput) != userInput)
    {
      alert("Please enter numbers only!")
    }
  }
  if (+userInput === secretNum)
  {
    alert("Bingo! You guessed it.");
  }
  else
  {
    alert("Try again!");
  }
}